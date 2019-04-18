import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from 'redux';

const initialState = {
  count: 1
}

const rootReducer = (oldState = initialState, action) => {
  console.log(oldState)
  switch (action.type) {
    case 'ADD': {
      return { count: oldState.count + 1 }
    }
    case 'SUB': {
      return { count: oldState.count - 1 }
    }
    default: return oldState
  }
}

const store = createStore(rootReducer)
console.log(store)
console.log(store.getState())


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  constructor() {
    super();
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const count = store.getState().count;
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  constructor() {
    super();
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={() => store.dispatch({ type: 'SUB' })}> - </button>
        <button onClick={() => store.dispatch({ type: 'ADD' })}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
