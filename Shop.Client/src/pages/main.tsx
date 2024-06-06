import { useSelector } from "react-redux";
import Button from "../components/button";
import { useNavigate } from 'react-router-dom';
import { RootState } from "../app/store";
import { sumPrices } from "../utils";

export default function Main(): JSX.Element {
    const navigate = useNavigate();
    const data = useSelector((state: RootState) => state.products.data);

    const onProductsButtonClick = (): void => {
        navigate('/products-list');
    };

    const onAdminButtonClick = (): void => {
        window.open('/admin', '_blank');
    };

    return (
        <>
            <h1 className="main_title">Shop.Client</h1>
            <p className="main_description">В базе данных находится {data.length} товаров общей стоимостью {sumPrices(data)} ₽</p>
            <div className="main_transfer">
                <Button
                    buttonTitle="Перейти к списку товаров"
                    classButton="main_transfer-button"
                    onButtonClick={onProductsButtonClick}
                />
                <Button
                    buttonTitle="Перейти в систему администрирования"
                    classButton="main_transfer-button"
                    onButtonClick={onAdminButtonClick}
                />
            </div>
        </>
    )
}
