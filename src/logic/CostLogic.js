import PRODUCTS from '../component/resources/products'

export { totalPreTax, tax, total }

/**
 * Calculates the total price of a cart BEFORE taxes, given IDs of cart items
 *
 * @param cart : list of IDs which can be used to get values from the database
 */
function totalPreTax (cart) {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += parseInt(PRODUCTS[cart[i]].price)
  }

  return total.toFixed(2).toString()
}

/**
 * Calculates the tax on a cart, given IDs of cart items
 *
 * @param cart : list of IDs which can be used to get values from the database
 */
function tax (cart) {
  return parseFloat(totalPreTax(cart) * 0.13).toFixed(2).toString()
}

/**
 * Calculates the total price of a cart AFTER taxes, given IDs of cart items
 *
 * @param cart : list of IDs which can be used to get values from the database
 */
function total (cart) {
  return parseFloat(totalPreTax(cart) * 1.13).toFixed(2).toString()
}
