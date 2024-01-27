import React from 'react'
import { Link } from 'react-router-dom' 
import { Row, Col } from 'react-bootstrap'  

export default function CardResults({ data }) {

  console.log(data)

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
               <div id="searchResults">
                 <h2>Search Results</h2>
                 <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                >
                  {data.map((item, index) => (
                    <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'>
                      <Link to={{ pathname: '/album', state: { item }}}>
                        <img 
                          className='img-album-card'
                          variant="top" 
                          src={item.album.cover_medium}
                        />
                      </Link>               
                      <div className='lh-1' >
                        <Link to={{ pathname: '/album', state: { item }}} id='title-album' className='m-1' >Album: {item.album.title}</Link>
                        <Link to={{ pathname: '/artist', state: { item }}} id='title-artist' > Artist: {item.artist.name} </Link>
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


  // return (
  //   <>
  //     {data ? (
  //       <div className="col-12 col-md-9 offset-md-3 mainPage">
  //         <Row>
  //           <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
  //             <a href="#">TRENDING</a>
  //             <a href="#">PODCAST</a>
  //             <a href="#">MOODS AND GENRES</a>
  //             <a href="#">NEW RELEASES</a>
  //             <a href="#">DISCOVER</a>
  //           </Col>
  //         </Row>
  
  //         <Row>
  //           <Col className="col-10">
  //             <div id="searchResults">
  //               <h2>Search Results</h2>
  //               <div
  //                 className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
  //               >
  //                 {data.map((item, index) => (
  //                   <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'>
  //                     <Link to={{ pathname: '/album', state: { item }}}>
  //                       <img 
  //                         variant="top" 
  //                         src={item.album.cover_medium}
  //                       />
  //                     </Link>               
  //                     <div className='lh-1' >
  //                       <Link to={{ pathname: '/album', state: { item }}} id='title-album' className='m-1' >Album: {item.album.title}</Link>
  //                       <Link to={{ pathname: '/artist', state: { item }}} id='title-artist' > Artist: {item.artist.name} </Link>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>
  //           </Col>
  //         </Row>
  //       </div>
  //     ) : null}
  //   </>
  // );
  

}
