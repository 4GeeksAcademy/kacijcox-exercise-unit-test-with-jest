const { sum, fromEuroToDollar, fromDollarToYen } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("Convert 10 dollars to yen", function () {
    const yen = fromDollarToYen(10);
    const expected = 10 * 129.5 / 1.07; // Using the conversion rates
    expect(yen).toBe(expected);
});
