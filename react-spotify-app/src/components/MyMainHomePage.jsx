import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSong from './CardSong'
import CardResults from './CardResults'

export default function MyMainHomePage({ data }) {

  const getData = data;
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
        // console.log(json.data)
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
      // console.log(json.data)
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
      // console.log(json.data)
        })
      .catch(error => console.error('error'))
  }


  // async function getTextInput() {
  //   await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
  // }

  // const handleFetch = () => {
  //   getSongsRock()
  //   getSongsPop()
  //   getSongsHipHop()
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


            {/* { getData &&  */}
                <Row>
                <Col className="col-10">
                  <div id="searchResults" className='d-none'>
                      <h2>Search Results</h2>
                      <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      >
                        {/* <CardResults key={data.value} data={data} /> */}
                      </div>
                  </div>
                </Col>
            </Row>
            {/* } */}
            

            <Row>
              <Col className="col-10">
                <div id="rock" className='d-flex justify-content-center flex-column'>
                  <h2>Rock Classics</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 d-flex align-items-center justify-content-center"
                    id="rockSection">
                      <CardSong key={songs.value} songs={songs} />
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
                    id="popSection">
                      <CardSong key={pop.value} pop={pop} />
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
                    id="hipHopSection">
                      <CardSong key={hip.value} hip={hip} />
                    </div>
                </div>
                </Col>
              </Row>
          </div>
    </>
  )
}
