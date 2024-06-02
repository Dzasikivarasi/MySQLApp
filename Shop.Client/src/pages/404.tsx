import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <div className="container__not-found">
      <p className="message__not-found">«Такого товара не существует»</p>
      <Link to={`/products-list`}>
        <button className="button__not-found">Назад</button>
      </Link>
    </div>
  );
}