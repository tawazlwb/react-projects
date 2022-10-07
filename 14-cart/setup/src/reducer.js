const reducer = (state, action) => {
  switch (action.type) {
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
      let tempCartInc = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }

        return cartItem
      })

      return {
        ...state,
        cart: tempCartInc,
      }
    case 'DECREASE':
      let tempCartDec = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }

          return cartItem
        })
        .filter((cartItem) => cartItem.amount > 0)

      return {
        ...state,
        cart: tempCartDec,
      }
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
      return state
  }
}

export default reducer
