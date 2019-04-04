import React, { Component } from 'react';
import WidgetSelector from './components/WidgetSelector'
// import RandomKoala from './components/RandomKoala'

class App extends Component {

  
  constructor(){
    super()
    this.state ={
      component_selected: "profile"
      //or "books"
    }

  }

  handleClick = ()=>{

   this.setState({component_selected: "books"})

  }

  componentDidUpdate(){

    console.log("app updated!")
  }
  
  render() {
    //console.log("rendered!")
    return (
      <div id='app'>
        {/* <RandomKoala/> */}
        <WidgetSelector component = {this.state.component_selected} handleClick = {this.handleClick}/>
      </div>
    )
  }
}

export default App;


