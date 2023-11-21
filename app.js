const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * oneEuroIs.GBP / oneEuroIs.JPY;
    return valueInPound;
}

const sum =(a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar }

console.log(fromEuroToDollar(10));     
console.log(fromDollarToYen(10));      
console.log(fromYenToPound(1000));    