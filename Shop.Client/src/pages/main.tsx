import Button from "../components/button";
import { useNavigate } from 'react-router-dom';

export default function Main(): JSX.Element {
    const navigate = useNavigate();

    const onProductsButtonClick = (): void => {
        navigate('/products-list');
    };

    const onAdminButtonClick = (): void => {

    };

    return (
        <>
            <h1 className="main_title">Shop.Client</h1>
            <p className="main_description">В базе данных находится n товаров общей стоимостью m</p>
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