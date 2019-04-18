const initialState = {
  amount: 100
}

const budgetReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'EAT': {
      return { ...oldState, amount: oldState.amount - action.price }
    }
    default: { return oldState }
  }
}

export default budgetReducer;
