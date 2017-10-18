import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const MemeDisplay = ({memes}) => (
  <div>
    {console.log('This is data: ',{memes})}
    {memes.map((meme, i) =>
      <img
        title={meme.name}
        src={meme.url}
      />
    )}
  </div>
)

// Subreddit.propTypes = {
//   subreddits: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => {
  console.log('This is MemeDisplay state: ', state)
  return {
    memes: state.memes
  }
}

export default connect(
  mapStateToProps
)(MemeDisplay)