import firebase from '../../firebase'

/**
 * Returns data from Firebase in a JSON form for use by rest of web app
 */
var PRODUCTS = {}

const productsRef = firebase.database().ref('products')
productsRef.on('value', (snapshot) => {
  const dbItems = snapshot.val()
  for (const item in dbItems) {
    PRODUCTS[item.toString()] = {
      name: dbItems[item].name,
      price: dbItems[item].price
    }
  }
})

/**
 * This occurs in a testing environment for npm test
 */
if (Object.keys(PRODUCTS).length === 0 && PRODUCTS.constructor === Object) {
  PRODUCTS["TestItemNormal"] = {
    name: "TestItemNormal",
    price: 10
  },
  PRODUCTS["TestItemNormal2"] = {
    name: "TestItemNormal2",
    price: 20
  },
  PRODUCTS["TestItemWorthless"] = {
    name: "TestItemWorthless",
    price: 0
  },
  PRODUCTS["TestItemNegative"] = {
    name: "TestItemNegative",
    price: -30
  }
}

export default PRODUCTS
