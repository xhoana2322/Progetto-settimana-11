import React, { useEffect, useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
// import MyMainArtist from '../components/MyMainArtist'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'

export default function ArtistPage() {

  const { id } = useParams()
  const [artist, setArtist] = useState({})
  const [artistTracks, setArtistTracks] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
      .then((resp) => {
        setArtist(resp.data)
        console.log(resp.data)
      })
      .catch(err => console.error(err))

    axios.get(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`)
      .then((resp) => {
        setArtistTracks(resp.data.data)
        console.log(resp.data.data)
      })
      .catch(err => console.error(err))
  }, [])
  
  return (
    <>
      <div>ArtistPage</div>
      <Container fluid>
      <MyNavbar />
     
      
        <Row>
          <Col className="col-12 col-md-9 offset-md-3 mainPage">
            <Row>
              <Col className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain">{artist.name}</h2>
                <div id="followers">{artist.nb_fan + " followers"}</div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className="btn btn-success me-2 mainButton"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className="btn btn-outline-light mainButton "
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                {/* <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div> */}
                <div className="pt-5 mb-5">
                  <Row id="apiLoaded">
                    {artistTracks.map((track, index) => (
                      <Col key={index} className="col-sm-auto col-md-auto text-center mb-5 imgLinks" id={track.id}>
                        <div
                          onClick={() => navigate(`/album/${track.album.id}`)}
                        >
                          <img
                            className="img-fluid"
                            src={track.album.cover_medium}
                            alt="1"
                          />
                        </div>
                          <div 
                            className='text-white'
                            onClick={() => navigate(`/album/${track.album.id}`)}
                          >
                            Album: "
                            {track.album.title.length < 16
                              ? `${track.album.title}`
                              : `${track.album.title.substring(0, 16)}...`}
                            "<br />
                          </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </>
   
  )
}
