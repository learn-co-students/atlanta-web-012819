import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'
import { connect } from 'react-redux';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushis.map(x => <Sushi {...x} eaten={props.eaten} dispatch={props.dispatch} /> ) }
        <MoreButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ sushi }) => {
  const { page, menu, eaten } = sushi
  let startIndex = (page - 1) * 4

  return {
    sushis: menu.slice(startIndex, startIndex + 4),
    eaten: eaten
  }
}

export default connect(mapStateToProps)(SushiContainer);
