import React from 'react';
import Spinner from './Spinner';
import './Gallery.css';
import Photo from './Photo';

export default function Gallery({ gallery }) {
  console.log(gallery.content)

  if (gallery.content) {
    return (
      <div className='gallery-container'>
        <h1>{gallery.title}</h1>
        <div className='gallery'>
          {gallery.content.map(photo => <Photo photo={photo} key={photo.id} />)}
        </div>
      </div>
    )
  } else {
    return <Spinner />
  }
}
