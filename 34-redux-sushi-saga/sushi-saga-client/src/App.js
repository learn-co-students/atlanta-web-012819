import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { connect } from 'react-redux';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.props.dispatch({ type: 'FETCHED_SUSHI', data: data }))
  }

  render() {
    return (
      <div className="app">
        <Table />
        <SushiContainer  />
      </div>
    );
  }
}

export default connect()(App);
