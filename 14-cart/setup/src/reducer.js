const updateItemAmount = (state, action) => {
  let value =
    action.type === 'INCREASE' ? 1 : action.type === 'DECREASE' ? -1 : 0
  let tempCartDec = state.cart
    .map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + value }
      }

      return cartItem
    })
    .filter((cartItem) => cartItem.amount > 0)

  return {
    ...state,
    cart: tempCartDec,
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'DISPLAY_ITEMS':
      return {
        ...state,
        cart: action.payload,
        loading: false,
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      }
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case 'INCREASE':
    case 'DECREASE':
      return updateItemAmount(state, action)
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (previousCartTotal, cartItem) => {
          return {
            total: cartItem.amount * cartItem.price + previousCartTotal.total,
            amount: cartItem.amount + previousCartTotal.amount,
          }
        },
        { total: 0, amount: 0 }
      )

      total = parseFloat(total.toFixed(2))

      return {
        ...state,
        total,
        amount,
      }
    default:
      throw new Error(`no matching action [${action.type}]`)
  }
}

export default reducer
