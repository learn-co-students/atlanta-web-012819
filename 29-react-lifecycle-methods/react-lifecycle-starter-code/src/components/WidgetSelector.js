import React, { Component } from 'react'
import Profile from './Profile'
import Books from './Books'




class WidgetSelector extends Component {

  componentDidMount(){

  //  console.log("widget selecter mounted!")
  }

  displayComponent = ()=> {

    if(this.props.component === "profile"){
     return <Profile />   
    }
    else if(this.props.component === "books")
      return <Books /> 
    else
      console.log("nothing!")
  }
  render () {
    return (
      <div className="app-children">
        <div>
        {this.displayComponent()}
        <button onClick = {this.props.handleClick}> Switch! </button>
        </div>
      </div>
    )
  }
}

export default WidgetSelector
