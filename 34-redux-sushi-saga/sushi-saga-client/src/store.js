import { createStore, combineReducers } from 'redux';
import budgetReducer from './reducers/budget'
import sushiReducer from './reducers/sushi'

const rootReducer = combineReducers({
  budget: budgetReducer,
  sushi: sushiReducer
  // students: studentsReducer
})

// console.log(budgetReducer)
// console.log(sushiReducer)
// console.log(rootReducer)

export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
