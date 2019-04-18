import React, { Fragment } from 'react'
import { connect } from 'react-redux';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.amount } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

let mapStateToProps = (state) => {
  return {
    amount: state.budget.amount,
    eaten: state.sushi.eaten
  }
}

// const connectorFunction = connect(mapStateToProps)
// console.log(connectorFunction)
// const WrappedTable = connectorFunction(Table)
// console.log(WrappedTable)

export default connect(mapStateToProps)(Table)
