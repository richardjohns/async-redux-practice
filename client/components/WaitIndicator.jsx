import React from 'react'
import {connect} from 'react-redux'

const WaitIndicator = (props) => {
  // && evaluates to null if props.waiting is falsey.
  return (
    <div className='error'>
      {
        props.waiting &&
        <img src='/animated-circle.gif' />
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)
