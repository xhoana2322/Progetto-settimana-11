
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const initialState = {
    songs: []
  }

  const bigReducer = combineReducers({
    songs: rootReducer
  })

const store = createStore(bigReducer, initialState, applyMiddleware(thunk));

export default store;