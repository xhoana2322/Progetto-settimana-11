import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function MyMainAlbum() {
  return (
    <>
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
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
            <Col className="col-md-3 pt-5 text-center" id="img-container"></Col>
            <Col className="col-md-8 p-5">
              <Row>
                <Col className="col-md-10 mb-5" id="trackList"></Col>
              </Row>
            </Col>
          </Row>
        </Col>
    </>
  )
}
