export function formatCurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2);
}

//export default formatCurrency;//it called default export. A file have only one default export