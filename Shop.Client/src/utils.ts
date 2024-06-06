import { ProductBaseData } from "./types";

export function formatNumber(number: number|string): string {
    let numStr = String(number);
    numStr = numStr.split(".")[0];
    numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return numStr;
}

export function sumPrices(products: ProductBaseData[]): number {
    return products.reduce((total, product) => total + Number(product.price), 0);
}
