import Sorting from "../components/sorting";
import { DATA } from "../mock-data";
import Card from "../components/card";
import { ProductBaseData } from "../types";
import { useState } from "react";
// import { loadProducts } from "../app/dataSlice";

export default function Products(): JSX.Element {

    // loadProducts();

    const [sortedProducts, setSortedProducts] = useState<ProductBaseData[]>(DATA);

    const onProductsUpdate = (products: ProductBaseData[]): void => {
        setSortedProducts(products)
    }

    return (
        <>
            <h1 className="products_title">Список товаров ({DATA.length})</h1>
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
}