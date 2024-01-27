import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addSongToFavourites, removeSongsToFavourites } from '../redux/actions/actions'


export default function AlbumPage() {
  const { id } = useParams()
  const [album, setAlbum] = useState({})
  const favourites = useSelector(state => state.favourites)
  // console.log(favourites)
  const favouriteSong = favourites.find(song => song.album.title === album.album.title)
  // console.log(favouriteSong)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
      .then((resp) => {
        setAlbum(resp.data)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <>
        <h1>AlbumPage</h1>
        <Container fluid>
        <MyNavbar />
          <Row>
            <Col className="col-12 col-md-9 offset-md-3 mainPage">
              <Row>
                <Col className="col-md-3 pt-5 text-center" id="img-container">
                  <img src={album.cover_big} alt={album.title} id="album-img" />
                  <div className="mt-4 text-center">
                    <p className="album-title">{album.title}</p>
                  </div>
                  <div className="text-center">
                    <p className="artist-name">{album?.artist?.name}</p>
                  </div>
                  <div className="mt-4 text-center">
                    <button id="btnPlay" className="btn btn-success" type="button">
                      Play
                    </button>
                  </div>
                </Col>
                <Col className="col-md-8 pt-5">
                  <Row>
                    <Col className="col-md-10 mb-5" id="trackList">
                      {album?.tracks?.data.map((album, index) => (
                        <div key={index} className="py-3 trackHover d-flex justify-content-between" >
                          <div className='w-75'>
                            <a
                              href="#"
                              className="card-title"
                              style={{color:"white"}}
                            >
                              {album.title}
                            </a>
                          </div>
                          <small className="duration d-flex text-align-center justify-content-center" style={{color:"white"}}>
                            <div className='d-flex align-items-center'>
                              {Math.floor(
                              parseInt(album.duration) / 60 // setting the duration minutes
                            )}
                            :
                            {parseInt(album.duration) % 60 < 10
                              ? "0" + (parseInt(album.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                              : parseInt(album.duration) % 60}
                            </div>
                            
                              <div className='div-btn-heart d-flex justify-content-center align-items-center'>
                                { !favouriteSong ? (
                                    <i 
                                      className="bi bi-suit-heart ms-3"   
                                      onClick={() => dispatch(addSongToFavourites(album))}> 
                                    </i>
                                ) : (
                                    <i 
                                      className="bi bi-suit-heart-fill ms-3"
                                      onClick={() => dispatch(removeSongsToFavourites(album))}
                                    ></i>
                                )} 
                              </div>
                          </small>
                        </div>
                      ))}
                      
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <MyFooter />
    </>
  )
}
