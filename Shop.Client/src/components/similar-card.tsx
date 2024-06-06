import { Link } from "react-router-dom";
import { formatNumber } from "../utils";
import { SimilarProductsType } from "../types";

type SimilarCard = {
    similarProduct: SimilarProductsType;
}

export default function SimilarCard({ similarProduct }: SimilarCard): JSX.Element {

    return (
        <Link to={`/product/${similarProduct.id}`} key={similarProduct.id}>
            <li className="similar-products_list-item">
                <p className="products_list-item-name">{similarProduct.title}</p>
                <p className="products_list-item-price">{formatNumber(similarProduct.price)} ₽</p>
            </li>
        </Link>
    );
}
