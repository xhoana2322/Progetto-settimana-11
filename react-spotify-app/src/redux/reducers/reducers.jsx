  const reducers = (state = [], action) => {

    switch(action.payload) {
      case 'ADD_SONG_TO_FAVOURITES':
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        }
        case 'REMOVE_SONG_TO_FAVOURITES':
          return{
            ...state,
            favourites: state.favourites.filter(song => song.album.title !== action.payload.album.title)
          }
          default:
            break
    }
    return state
  }

  export default reducers;