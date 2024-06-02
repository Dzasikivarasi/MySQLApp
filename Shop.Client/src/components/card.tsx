import { Link } from "react-router-dom";
import { ProductBaseData } from "../types";
import { formatNumber } from "../utils";

type CardProps = {
    product: ProductBaseData;
}

export default function Card({ product }: CardProps): JSX.Element {

    return (
        <Link to={`/product/${product.id}`} key={product.id}>
            <li className="products_list-item">
                <img className="products_list-item-photo" src={product.thumbnail?.url || "../../public/img/placeholder.jpg"} alt="Фото товара" />
                <p className="products_list-item-name">{product.title}</p>
                <p className="products_list-item-price">{formatNumber(product.price)} ₽</p>
                <p className="products_list-item-comments">Комментарии: {product.comments ? product.comments.length : 0}</p>
            </li>
        </Link>
    );
}