const oneEuroIs = {
    JPY: 129.5, 
    USD: 1.07,  
};

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.JPY / oneEuroIs.USD;
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}


const sum = function(a, b) {
    return a + b;
}

module.exports = { fromDollarToYen, fromEuroToDollar, sum };
