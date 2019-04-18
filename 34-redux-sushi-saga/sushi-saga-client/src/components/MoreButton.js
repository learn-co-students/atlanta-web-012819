import React from 'react'
import { connect } from 'react-redux'

const MoreButton = (props) => {
    return <button onClick={ () => props.dispatch({ type: 'NEXT_PAGE' }) }>
            More sushi!
          </button>
}

export default connect()(MoreButton)
