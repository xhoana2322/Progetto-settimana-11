import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function MyMainHomePage() {

  const [songs, setSongs] = useState([])
  const [pop, setPop] = useState([])
  const [hip, setHop] = useState([])


  let headers = new Headers({
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
  })

  // rock
  async function getSongsRock() {
    await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=rock',
    {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      .then(json => { 
        setSongs(json.data)
        // console.log(songs)
        })
      .catch(error => console.error('error'))
  }

  // pop culture
  async function getSongsPop() {
    await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pop',
    {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      .then(json => { 
        setPop(json.data)
      // console.log(pop)
        })
      .catch(error => console.error('error'))
  }


  // hiphop
  async function getSongsHipHop() {
    await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop',
    {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      .then(json => { 
        setHop(json.data)
      // console.log(hip)
        })
      .catch(error => console.error('error'))
  }


  // async function getTextInput() {
  //   await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
  // }

  useEffect(() => {
    getSongsRock()
    getSongsPop()
    getSongsHipHop()
  }, [])
  

  return (
    <>
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <Row>
                <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                  <div id="searchResults" style={{display: "none"}}>
                      <h2>Search Results</h2>
                      <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      >
                      </div>
                  </div>
                </Col>
            </Row>

            <Row>
              <Col className="col-10">
                <div id="rock" className='d-flex justify-content-center flex-column'>
                  <h2>Rock Classics</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 d-flex align-items-center justify-content-center"
                    id="rockSection">
                      {songs.slice(0, 4).map((data, index) => (
                        <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'
                        >
                          <div style={{ width: '13rem' }}>
                            <img 
                            variant="top" 
                            src={data.album.cover_medium}
                            className='w-100'
                             />
                          </div>
                          
                          <div className='lh-1' >
                            <p id='title-album' className='m-1' >Album: {data.album.title}</p>
                            <p id='title-artist' > Artist: {data.artist.name} </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
            </Row>
            
            <Row>
                <Col className="col-10">
                <div id="pop">
                    <h2>Pop Culture</h2>
                    <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                    >
                      {pop.slice(0, 4).map((data, index) => (
                        <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'>
                          <img 
                            variant="top" 
                            src={data.album.cover_medium} />
                          <div className='lh-1' >
                            <p id='title-album' className='m-1' >Album: {data.album.title}</p>
                            <p id='title-artist'> Artist: {data.artist.name} </p>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                <div id="hiphop">
                    <h2>#HipHop</h2>
                    <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                    >
                      {hip.slice(0, 4).map((data, index) => (
                        <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'>
                          <img 
                            variant="top" 
                            src={data.album.cover_medium} />
                          <div className='lh-1' >
                            <p id='title-album' className='m-1' >Album: {data.album.title}</p>
                            <p id='title-artist'> Artist: {data.artist.name} </p>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    </>
  )
}


// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { searchSongs } from '../redux/actions/actions'; // Assicurati che il percorso sia corretto

// const MyMainHomePage = () => {
//   const dispatch = useDispatch();
//   const songs = useSelector((state) => state.songs);
//   const error = useSelector((state) => state.error);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     if (query.length > 2) {
//       dispatch(searchSongs(query));
//     }
//   }, [query, dispatch]);

//   return (
//     <div>
//       <h2>Risultati della ricerca</h2>
//       {error && <p>Errore nella ricerca: {error}</p>}
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id}>{song.title}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         placeholder="Cerca canzoni..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//     </div>
//   );
// };

// export default MyMainHomePage;