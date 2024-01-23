const initialState = {
    songs: [],
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_SUCCESS':
        return {
          ...state,
          songs: action.payload,
          error: null,
        };
      case 'SEARCH_FAILURE':
        return {
          ...state,
          songs: [],
          error: 'Error fetching songs',
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;