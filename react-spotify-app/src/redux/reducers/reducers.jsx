
  
  const rootReducer = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_SUCCESS':
        return {
          ...state,
          songs: [...action.payload]
        };
      case 'SEARCH_FAILURE':
        return {
          ...state,
          songs: [],
          error: 'Error fetching songs',
        };
      default:
        break;
        
    } 
    return state;
  };
  

  export default rootReducer;