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

export default PRODUCTS
