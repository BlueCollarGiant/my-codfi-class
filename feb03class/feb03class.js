const prices = [100,399,2,200,500];

function applyDiscount(prices, callback) {
    const discountedPrices = prices.map(callback);

    console.log(discountedPrices);
}


function applyDiscountCallback (price) {
    const discountRate = 0.25;
    const discount = price * discountRate;
    return price - discount
}

applyDiscount(prices, applyDiscountCallback);

