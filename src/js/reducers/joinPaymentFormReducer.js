const initState = {
  selectedAccount: "",
  gas: 1000000,
  gasPrice: 20000000000,
  name: "",
  errors: {
    selectedAccountError: "",
    passwordError: "",
  },
}

const joinPaymentForm = (state=initState, action) => {
  switch (action.type) {
    case "JOIN_PAYMENT_ACCOUNT_SELECTED": {
      return {...state, selectedAccount: action.payload}
    }
    case "JOIN_PAYMENT_GAS_PRICE_SPECIFIED": {
      return {...state, gasPrice: action.payload}
    }
    case "JOIN_PAYMENT_NAME_SPECIFIED": {
      return {...state, name: action.payload}
    }
    case "JOIN_PAYMENT_GAS_SPECIFIED": {
      return {...state, gas: action.payload }
    }
    case "JOIN_PAYMENT_ERROR_THREW": {
      return {...state, errors: {...state.errors, ...action.payload}}
    }
    case "JOIN_PAYMENT_EMPTIED": {
      return {...initState}
    }
  }
  return state
}

export default joinPaymentForm
