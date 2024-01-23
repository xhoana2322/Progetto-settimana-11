import axios from 'axios'

// let headers = new Headers({
//   // sets the headers
//   'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//   'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
// })


// export const searchSongs = (query) => async (dispatch) => {

//   try {
//     // Fai la chiamata API a Deezer
//     const response = await axios.get(
//       `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
//       , { headers })
//       // .then(response => response.json())
//       // .then(json => console.log(json))
//       const data = await response.data;

//     if (response.status === 200) {
//       // Se la chiamata ha successo, aggiorna lo stato globale con le canzoni ricevute
//       dispatch({ type: 'SEARCH_SONGS_SUCCESS', payload: data.data });
//     } else {
//       // Se c'è un problema con la chiamata API, aggiorna lo stato globale con l'errore
//       dispatch({ type: 'SEARCH_SONGS_FAILURE', payload: 'Errore nella chiamata API' });
//     }
//   } catch (error) {
//     // Se c'è un errore durante la chiamata API, aggiorna lo stato globale con l'errore
//     dispatch({ type: 'SEARCH_SONGS_FAILURE', payload: error.message });
//   }
// }


export const searchSongs = (query) => {

  return function(dispatch, getState) { 
    const state = getState()
      axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
          .then(response => {
              return dispatch({ type: 'SEARCH_SONGS_SUCCESS', payload: response.data.data})
          })
          .catch(error => console.error(error))
  }
}