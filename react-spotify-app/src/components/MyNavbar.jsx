// import React, { useEffect, useState } from 'react'
// import { Button, Navbar, ListGroup, Form, InputGroup } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import logo from '../assets/logo/Spotify_Logo.png'
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchSongs } from './actions';

// export default function MyNavbar() {

//     const YourReactComponent = () => {
//         const dispatch = useDispatch();
//         const songs = useSelector((state) => state.songs);
//         const error = useSelector((state) => state.error);
//         const [query, setQuery] = useState('');
      
//         useEffect(() => {
//           if (query.length > 2) {
//             dispatch(searchSongs(query));
//           }
//         }, [query, dispatch]); 
//     }


//   return (
//     <>
//         <div class="col-2">
//             <Navbar
//                 className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-3"
//                 id="sidebar"
//                 >
//                 <div className="nav-container mt-2">
//                     <Link className="navbar-brand" to='/'>
//                         <img
//                         src={logo}
//                         alt="Spotify_Logo"
//                         width="131"
//                         height="40"
//                         />
//                     </Link>
//                     <Button
//                         className="navbar-toggler"
//                         type="button"
//                         data-toggle="collapse"
//                         data-target="#navbarNavAltMarkup"
//                         aria-controls="navbarNavAltMarkup"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </Button>


//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className="navbar-nav mt-4 p-1">
//                         <ListGroup className='ul-nav'>
//                             <div className='lh-1'>
//                                <li>
//                                     <Link className="nav-item nav-link" to='/'>
//                                         <i className="bi bi-house-door-fill fs-4"></i>&nbsp; Home
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="nav-item nav-link mb-2" to='/' >
//                                         <i className="bi bi-book-fill fs-4"></i>&nbsp; Your Library
//                                     </Link>
//                                 </li> 
//                             </div>
                            
//                             <InputGroup className="mt-3">
//                                 <Form.Control
//                                     placeholder="Search"
//                                     aria-label="Search"
//                                     aria-describedby="basic-addon2"
//                                     className="mb-2"
//                                 />
//                                 <Button 
//                                     variant="outline-secondary" 
//                                     id="button-addon2" className="mb-2"
//                                 >
//                                     GO
//                                 </Button>
//                             </InputGroup>
//                         </ListGroup>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="nav-btn p-1">
//                     <Button className="btn signup-btn" type="button">Sign Up</Button>
//                     <Button className="btn login-btn" type="button">Login</Button>
//                     <div>
//                         <Link to='/*' className='text-decoration-none'>Cookie Policy</Link> |
//                         <Link to='/*' className='text-decoration-none'> Privacy</Link>
//                     </div>
//                 </div>
//             </Navbar>
//         </div>
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import { Button, Navbar, ListGroup, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchSongs } from '../redux/actions/actions';
import logo from '../assets/logo/Spotify_Logo.png';

export default function MyNavbar() {

  // const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  // console.log(query)

  let headers = new Headers({
    // sets the headers
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
  })

  async function getQuery() {
    await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    // { headers }
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getQuery()
  }, [query])


  // useEffect(() => {
  //   if (query.length > 2) {
  //     dispatch(searchSongs(query));
  //   }
  // }, [query]);

  
  return (
    <div className="col-2">
      <Navbar
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-3"
        id="sidebar"
      >
        <div className="nav-container mt-2">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-4 p-1">
              <ListGroup className="ul-nav">
                <div className="lh-1">
                  <li>
                    <Link className="nav-item nav-link" to="/">
                      <i className="bi bi-house-door-fill fs-4"></i>&nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link mb-2" to="/">
                      <i className="bi bi-book-fill fs-4"></i>&nbsp; Your Library
                    </Link>
                  </li>
                </div>
                <InputGroup className="mt-3">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    className="mb-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    // onKeyPress={(e) => {
                    //   if (e.key === 'Enter' && query.length > 2) {
                    //     dispatch(searchSongs(query));
                    //   }
                    // }}
                  />
                  <Button
                    type='submit'
                    variant="outline-secondary"
                    id="button-addon2"
                    className="mb-2"
                    // onClick={() => dispatch(searchSongs(query))}
                    onClick={() => getQuery()
                      
                    }
                  >
                    GO
                  </Button>
                </InputGroup>
              </ListGroup>
            </div>
          </div>
        </div>

        <div className="nav-btn p-1">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <Link to="/" className="text-decoration-none">
              Cookie Policy
            </Link>{' '}
            |{' '}
            <Link to="/" className="text-decoration-none">
              Privacy
            </Link>
          </div>
        </div>
      </Navbar>
    </div>
  );
}