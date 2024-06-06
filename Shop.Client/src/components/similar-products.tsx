import { useDispatch, useSelector } from "react-redux";
import { ProductBaseData } from "../types";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { loadSimilarProducts } from "../app/dataSlice";
import SimilarCard from "./similar-card";
import Loading from "./loading";

type SimilarProductsProps = {
    similarProduct: ProductBaseData;
}

export default function SimilarProducts({ similarProduct }: SimilarProductsProps): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const similarProducts = useSelector((state: RootState) => state.similarProducts.similarProducts);
    const isLoading = useSelector((state: RootState) => state.similarProducts.loading);

    useEffect(() => {
        dispatch(loadSimilarProducts(similarProduct.id));
    }, [similarProduct.id, dispatch]);

    return (
        isLoading ? (
            <Loading />
        ) : (
            <div>
                {similarProducts && similarProducts.length > 0 ? (
                    <div className="similar">
                        <h2 className="product_name">Похожие товары</h2>
                        <ul className="similar-products_list">
                            {similarProducts.map((product) => (
                                <SimilarCard similarProduct={product} key={product.id} />
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>Похожие товары отсутствуют</div>
                )}
            </div>
        )
    );
}
