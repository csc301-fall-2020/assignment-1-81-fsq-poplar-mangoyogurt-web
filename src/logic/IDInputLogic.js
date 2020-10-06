/**
 * Handler for button events on the IDInput keypad
 *
 * @param state current value of the IDInput, also the value on the display
 * @param buttonName name/text on the button that determines functionality
 */
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

/**
 * Checks if the input string is a one digit number
 *
 * @param item string being tested
 */
function isNumber (item) {
  return /[0-9]+/.test(item)
}
