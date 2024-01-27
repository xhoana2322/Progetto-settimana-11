// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import ArtistPage from './pages/ArtistPage';
// import AlbumPage from './pages/AlbumPage';

// function App() {
//   return (
//   <>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<HomePage />} /> 
//       <Route path="/artist" element={<ArtistPage />} /> 
//       <Route path="/album" element={<AlbumPage />} /> 
//     </Routes>
//   </BrowserRouter>
//   </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
