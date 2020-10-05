export default function input (state, buttonName) {
  if (buttonName === 'ENTER') {
    if (state.id === '0') {
      return {
        nextItem: '0'
      }
    } else {
      const nextItem = state.id

      return {
        id: '0',
        nextItem: nextItem
      }
    }
  } else if (buttonName === 'DEL') {
    return {
      id: '0'
    }
  } else if (isNumber(buttonName)) {
    const newID = state.id + buttonName

    if (state.id === '0') {
      return {
        id: buttonName
      }
    } else {
      return {
        id: newID
      }
    }
  } else {
    console.log('You should never be here, check IDInputLogic.js')
  }
}

function isNumber (item) {
  return /[0-9]+/.test(item)
}
