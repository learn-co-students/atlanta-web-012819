const initialState = {
  menu: [],
  eaten: [],
  page: 1
}

const sushiReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_SUSHI': {
      return { ...oldState, menu: action.data }
    }
    case 'NEXT_PAGE': {
      const pageCount = oldState.menu.length / 4
      const nextPage = (oldState.page === pageCount) ? 1 : oldState.page + 1
      return { ...oldState, page: nextPage }
    }
    case 'EAT': {
      return { ...oldState, eaten: oldState.eaten.concat(action.price) }
    }
    default: { return oldState }
  }
}

export default sushiReducer;
