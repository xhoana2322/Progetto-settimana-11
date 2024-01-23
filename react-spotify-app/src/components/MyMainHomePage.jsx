import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function MyMainHomePage() {

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
                    ></div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                <div id="rock">
                    <h2>Rock Classics</h2>
                    <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                    ></div>
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
                    ></div>
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
                    ></div>
                </div>
                </Col>
            </Row>
        </div>
    </>
  )
}
