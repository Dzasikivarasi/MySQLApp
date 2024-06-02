import { ProductBaseData } from "../types";


type CommentsProps = {
    product?: ProductBaseData;
}

export default function CommentsList({ product }: CommentsProps): JSX.Element {

    return (
        <ul className="comments_list">

            {product && product.comments && product.comments.map((comment) => (
                <li className="comments_list-item" key={comment.id}>
                    <p className="comments_list-item-mail">{comment.email}</p>
                    <p className="comments_list-item-title">{comment.name}</p>
                    <p className="comments_list-item-comment">{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
