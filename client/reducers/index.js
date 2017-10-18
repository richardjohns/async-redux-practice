import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import memes from './memes'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  memes
})

