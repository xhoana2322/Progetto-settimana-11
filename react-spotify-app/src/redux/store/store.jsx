
import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

const initialState = {
    favourites: []
  }

  const bigReducer = combineReducers({
    favourites: reducers,
  })

const store = createStore(bigReducer, initialState);


export default store;