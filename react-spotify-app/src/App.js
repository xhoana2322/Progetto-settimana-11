import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ResultPage from './pages/ResultPage';
import Library from './pages/Library';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/results" element={<ResultPage />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
