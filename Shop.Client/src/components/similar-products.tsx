import { SIMILAR_PRODUCTS, DATA } from "../mock-data";
import { ProductBaseData } from "../types";
import { findRelatedIds } from "../utils";
import Card from "./card";

type SimilarProps = {
    product: ProductBaseData;
}

export default function SimilarProducts({ product }: SimilarProps): JSX.Element {
    if (!product.id) {
        return <div>Похожие товары отсутствуют</div>;
    }

    const similarProductsIds: string[] = findRelatedIds(SIMILAR_PRODUCTS, product.id);
    const similarProducts: ProductBaseData[] = DATA.filter((product) => similarProductsIds.includes(product.id));

    return (
        <div>
            {similarProducts && similarProducts.length > 0 && (
                <div className="similar">
                    <h2 className="product_name">Похожие товары</h2>
                    <ul className="products_list">
                        {similarProducts.map((product) => (
                            <Card product={product} key={product.id}/>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}