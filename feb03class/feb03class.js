const prices = [100,399,2,200,500];
//this is my aray yes i used random numbers
function applyDiscountCallback (price) {
    const discountRate = 0.25;
    const discount = price * discountRate;
    return price - discount
}
//this creates the discount

function applyDiscount(prices, callback) {
    const discountedPrices = prices.map(callback);

    console.log(discountedPrices);
}
// this creates a function applying the discount to prices
// it uses map to apply the discount to the array


applyDiscount(prices, applyDiscountCallback);
//this calls everything or in my head the starting point

//exercise one complete



const squareAndPrint = (value) => console.log(value * value); 
squareAndPrint(5)

// exercise two complete



console.log([1,2,3,4,5,6,7,8,9,10].filter((value, index) => {
    if (value % 2 === 1) {
        return true;
    } else {
        return false;
    }
}));
// exercise four complete


function timed() {
    console.log("Task completed")
    clearInterval(waiting);// clear interval stops the setinterval
}

const waiting = setInterval(() => { // had to put set interval in a variable to use clear interval correctly
    console.log("still waiting...")
}, 2000);
setTimeout(timed,5000)

// exersice five complete