export function formatNumber(number: number|string): string {
    let numStr = String(number);
    numStr = numStr.split(".")[0];
    numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return numStr;
}

