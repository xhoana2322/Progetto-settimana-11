import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CardSong({songs, pop, hip}) {

  const currentArray = songs || pop || hip

  return (
    <>
      {currentArray.slice(0, 4).map((data, index) => (
        <div key={index} className='text-center d-flex flex-column align-items-center justify-content-center'
        >
          <Link to='/album' state={{ some: currentArray }}>
            <img 
              variant="top" 
              src={data.album.cover_medium}
            />
          </Link>               
          <div className='lh-1' >
            <Link to='/album' state={{ some: currentArray }} id='title-album' className='m-1' >Album: {data.album.title}</Link>
            <Link to='/artist' state={{ some: currentArray }} id='title-artist' > Artist: {data.artist.name} </Link>
          </div>
        </div>
      ))}
    </>
  )
}
