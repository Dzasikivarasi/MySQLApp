import Sorting from "../components/sorting";
import Card from "../components/card";
import { ProductBaseData } from "../types";
import { useEffect, useState } from "react";
import { loadProducts } from "../app/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import Loading from "../components/loading";

export default function Products(): JSX.Element {

    const dispatch = useDispatch<AppDispatch>();
    const isLoading = useSelector((state: RootState) => state.products.loading);
    const data = useSelector((state: RootState) => state.products.data);
    const [sortedProducts, setSortedProducts] = useState<ProductBaseData[]>([]);

    useEffect(() => {
        dispatch(loadProducts());
    }, []);

    useEffect(() => {
        setSortedProducts(data);
    }, [data]);

    const onProductsUpdate = (products: ProductBaseData[]): void => {
        setSortedProducts(products)
    }

    return (
        isLoading ? (
            <Loading />
        ) : (
            <>
                <h1 className="products_title">Список товаров ({data.length})</h1>
                <Sorting updateProducts={onProductsUpdate} sortedProducts={sortedProducts} />

                <div>
                    <ul className="products_list">
                        {sortedProducts.map(product => (
                            <Card product={product} key={product.id} />
                        ))}
                    </ul>
                </div>
            </>
        )
    );
}
