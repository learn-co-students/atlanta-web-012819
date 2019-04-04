import React, { Component } from 'react'

class RandomKoala extends Component {

  constructor(){
    super()

    this.state = {
      koala : ""
    }
  }

  componentDidMount(){

    console.log("mounted")
    fetch('http://localhost:3000/koalas')
    .then(res => res.json())
    .then(data => this.setState({koala:data[0].image_url}))

  }

  // 
  render () {
    console.log("rendered")
    return (
      <div className="app-children">
      <img alt="random koala" src={this.state.koala}/>
      </div>
    )
  }
}

export default RandomKoala