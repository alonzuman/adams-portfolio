import React from 'react';
import './Gallery.css';
import Photo from './Photo';

export default function Gallery({ gallery }) {
  return (
    <div className='gallery-container'>
      <h1>{gallery.title}</h1>
      <div className='gallery'>
        {gallery.photos.map(photo => <Photo photo={photo} key={photo.id} />)}
      </div>
    </div>
  )
}
