import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, fetchMemes} from '../actions'

// ({dispatch}) is deconstructing the props object received by the component, just for convenience.

class LoadSubreddit extends React.Component {
   constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.updateInputState = this.updateInputState.bind(this)
  }

   updateInputState (e) {
    this.setState({
      input: e.target.value
    })
  }

   render () {
    return (
          <div>
            <label htmlFor="subredditField">Enter Subreddit: </label>
            <input type="text" name='input' onChange={this.updateInputState} value={this.state.input} />
            {/* name inside the input tag is the key inside the object produced, and value is the value of the key. */}
            <button
              onClick={() => this.props.dispatch(fetchPosts(this.state.input))}
            >Fetch Posts</button>
            <br/>
            <button
              onClick={() => this.props.dispatch(fetchMemes())}
            >Fetch Memes</button>

            {/* <button
              onClick={() => dispatch(fetchPosts(document.getElementById('subredditField').value))}
            >Fetch Posts</button> */}

        </div>
    )
  }
}

// Note that we don't have mapStateToProps here as we're not passing anything back from the store to the component.
// instead tho we need connect() so that the fetchPosts action dispatch will work.
export default connect()(LoadSubreddit)
