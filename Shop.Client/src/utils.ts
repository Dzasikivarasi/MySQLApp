export function formatNumber(number: number): string {
    let numStr = String(number);
    numStr = numStr.split(".")[0];
    numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return numStr;
}


export function findRelatedIds(data:{ first_product: string, second_product: string }[], targetId:string):string[] {
    const relatedIds = [];
    
    for (const item of data) {
        if (item.first_product === targetId) {
            relatedIds.push(item.second_product);
        }
        if (item.second_product === targetId) {
            relatedIds.push(item.first_product);
        }
    }
    return relatedIds;
}