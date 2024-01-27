export const addSongToFavourites = (song) => ({
  type: 'ADD_SONG_TO_FAVOURITES',
  payload: song
}) 

export const removeSongsToFavourites = (song) => ({
  type: 'REMOVE_SONG_TO_FAVOURITES',
  payload: song
})