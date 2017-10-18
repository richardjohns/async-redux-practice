import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_MEMES = 'RECEIVE_MEMES'
export const REQUEST_MEMES = 'REQUEST_MEMES'

// Post apis
export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    // triggers waiting indicator
    request
      // subreddit is the argument entered into fetchPosts in the button.
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}

// Meme apis
export const requestMemes = () => {
  return {
    type: REQUEST_MEMES
  }
}

export const receiveMemes = (memes) => {
  return {
    type: RECEIVE_MEMES,
    memes: memes
    // memes: memes.map(meme => meme.data)

  }
}

export function fetchMemes() {
  return (dispatch) => {
    dispatch(requestMemes())
    request
      // subreddit is the argument entered into fetchPosts in the button.
      .get('https://api.imgflip.com/get_memes')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receiveMemes(res.body))
      })
  }
}
