import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function CardSong({songs, pop, hip }) {

  const currentArray = songs || pop || hip 
  const navigate = useNavigate();

  return (
    <>
    {currentArray && 
      currentArray.slice(0, 4).map((data, index) => (
          <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'
          >
            <a>
              <img 
                variant="top" 
                src={data.album.cover_medium}
                onClick={() => navigate(`/album/${data.album.id}`)}
              />
            </a>               
            <div className='lh-1' >
              <a as={Link} onClick={() => navigate(`/album/${data.album.id}`)} id='title-album' className='m-1' >Album: {data.album.title}</a>
              <a as={Link} onClick={() => navigate(`/artist/${data.artist.id}`)} id='title-artist' > Artist: {data.artist.name} </a>
            </div>
          </div>
        ))
    }
      
    </>
  )
}

