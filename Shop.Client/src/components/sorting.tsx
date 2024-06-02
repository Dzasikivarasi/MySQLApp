import Button from "./button";
import { ProductBaseData } from "../types";

type SortingProps = {
    sortedProducts: ProductBaseData[];
    updateProducts: (products: ProductBaseData[]) => void;
  };

export default function Sorting({sortedProducts, updateProducts}:SortingProps): JSX.Element {

    const onButtonClick = (sortOption: string): void => {
        let products = sortedProducts;
        switch (sortOption) {
            case "title":
                products = [...products].sort((a, b) => a.title.localeCompare(b.title));
                console.log('отсортировался по названию')
                break;
            case "price":
                products = [...products].sort((a, b) => a.price - b.price);
                console.log('отсортировался по цене')
                break;
            default:
                return;
        }
        updateProducts(products);
    };

    return (
        <div className="products_sorting">
            <p className="products_sorting-description">Сортировать по:</p>
            <div className="main_transfer">

                <Button
                    buttonTitle="Название"
                    classButton="main_transfer-button"
                    onButtonClick={() => onButtonClick("title")}
                />
                <Button
                    buttonTitle="Цена"
                    classButton="main_transfer-button"
                    onButtonClick={() => onButtonClick("price")}
                />
            </div>
        </div>
    )
}