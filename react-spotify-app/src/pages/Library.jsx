import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'


export default function Library({ artistTracks }) {
    const favourites = useSelector(state => state.favourites)
    console.log(favourites)

  return (
    <>
            <Row className="mb-3">
              <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                {/* <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div> */}
                <div className="pt-5 mb-5">
                  <Row id="apiLoaded">
                    {artistTracks.map((track, index) => (
                      <Col key={index} className="col-sm-auto col-md-auto text-center mb-5 imgLinks" id={track.id}>
                        <div>
                          <img
                            className="img-fluid"
                            src={track.album.cover_medium}
                            alt="1"
                          />
                        </div>
                          <div 
                            className='text-white'
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
    </>
  )
}
