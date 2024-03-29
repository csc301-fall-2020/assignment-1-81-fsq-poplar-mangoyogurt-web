import { totalPreTax, tax, total } from '../logic/CostLogic'
import PRODUCTS from '../component/resources/products'

/**
 * Test carts using normally unaccessible items
 */
var emptyCart = []
var normalCart = ["TestItemNormal", "TestItemNormal2", "TestItemNormal2"]
var withZero = ["TestItemNormal", "TestItemNormal2", "TestItemNormal2", "TestItemWorthless"]
var allZero = ["TestItemWorthless", "TestItemWorthless"]
var withNegative = ["TestItemNormal", "TestItemNormal2", "TestItemNormal2", "TestItemNegative"]
var allNegative = ["TestItemNegative", "TestItemNegative"]


/**
 * Total Pre Tax Tests
 */
test('Pre Tax Empty', () => {
    expect(totalPreTax(emptyCart)).toBe("0.00")
})

test('Pre Tax Normal', () => {
    expect(totalPreTax(normalCart)).toBe("50.00")
})

test('Pre Tax With Zero', () => {
    expect(totalPreTax(withZero)).toBe("50.00")
})

test('Pre Tax All Zero', () => {
    expect(totalPreTax(allZero)).toBe("0.00")
})

test('Pre Tax With Negative', () => {
    expect(totalPreTax(withNegative)).toBe("20.00")
})

test('Pre Tax All Negative', () => {
    expect(totalPreTax(allNegative)).toBe("-60.00")
})

/**
 * Tax Only
 */
test('Tax Empty', () => {
    expect(tax(emptyCart)).toBe("0.00")
})

test('Tax Normal', () => {
    expect(tax(normalCart)).toBe("6.50")
})

test('Tax With Zero', () => {
    expect(tax(withZero)).toBe("6.50")
})

test('Tax All Zero', () => {
    expect(tax(allZero)).toBe("0.00")
})

test('Tax With Negative', () => {
    expect(tax(withNegative)).toBe("2.60")
})

test('Tax All Negative', () => {
    expect(tax(allNegative)).toBe("-7.80")
})

/**
 * Combined Total
 */
test('With Tax Empty', () => {
    expect(total(emptyCart)).toBe("0.00")
})

test('With Tax Normal', () => {
    expect(total(normalCart)).toBe("56.50")
})

test('With Tax With Zero', () => {
    expect(total(withZero)).toBe("56.50")
})

test('With Tax All Zero', () => {
    expect(total(allZero)).toBe("0.00")
})

test('With Tax With Negative', () => {
    expect(total(withNegative)).toBe("22.60")
})

test('With Tax All Negative', () => {
    expect(total(allNegative)).toBe("-67.80")
})
