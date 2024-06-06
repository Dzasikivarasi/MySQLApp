import { useEffect } from "react";
import CommentsList from "../components/comments-list";
import { useNavigate, useParams } from "react-router-dom";
import { formatNumber } from "../utils";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import SimilarProducts from "../components/similar-products";

export default function Product(): JSX.Element {
    const params = useParams();
    const navigate = useNavigate();
    const data = useSelector((state: RootState) => state.products.data);

    const { id } = params;
    const product = data.find((product) => product.id === id);

    useEffect(() => {
        if (!product) {
            navigate('/404');
        }
    }, [navigate, product]);

    if (!product) {
        return <></>;
    }

    return (
        <>
            <div className="product">
                <img className="product_photo" src={product && product.thumbnail?.url || `/img/placeholder.jpg`} alt="Фото товара" />
                <div className="product_right">
                    <h1 className="product_name">{product?.title}</h1>
                    <p className="product_description">{product?.description}</p>
                    <p className="product_price">{product && formatNumber(product.price)} ₽</p>
                    <ul className="product_photo-thumbnails">
                        {product?.images?.map((image) => (
                            <li className="product_photo-thumbnail" key={image.id}><img src={image?.url} alt="Фото товара" /></li>
                        ))}
                    </ul>
                </div>
            </div>

            <SimilarProducts similarProduct={product} />

            <div className="comments">

                {product.comments && product.comments.length > 0 ?
                    <h2 className="product_name">Комментарии: {product.comments.length} </h2> :
                    <h2 className="product_name">Комментарии отсутствуют</h2>
                }
                <CommentsList product={product} />
            </div>
        </>
    )
}
