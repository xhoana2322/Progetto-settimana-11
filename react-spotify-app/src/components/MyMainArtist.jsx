import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function MyMainArtist() {

  const { id } = useParams()

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
                <Col className="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 className="titleMain"></h2>
                    <div id="followers"></div>
                    <div className="d-flex justify-content-center" id="button-container">
                        <Button
                            className="btn btn-success mr-2 mainButton d-none"
                            id="playButton"
                            >
                            PLAY
                        </Button>
                        <Button
                            className="btn btn-outline-light mainButton d-none"
                            id="followButton"
                            >
                            FOLLOW
                        </Button>
                    </div>
                </Col>
            </Row>

          <Row className=" mb-3">
            <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <Row id="apiLoaded"></Row>
              </div>
            </Col>
          </Row>
        </div>
    </>
  )
}
