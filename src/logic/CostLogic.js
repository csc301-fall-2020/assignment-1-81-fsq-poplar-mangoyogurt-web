import PRODUCTS from '../component/resources/products'

export {totalPreTax, tax, total}

function totalPreTax(cart) {
    let total=0
    for (let i=0; i<cart.length; i++) {
        total += parseInt(PRODUCTS[cart[i]].price)
    }

    return total.toFixed(2).toString()
}

function tax(cart) {
    return parseFloat(totalPreTax(cart) * 0.13).toFixed(2).toString()
}

function total(cart) {
    return parseFloat(totalPreTax(cart) * 1.13).toFixed(2).toString()
}
