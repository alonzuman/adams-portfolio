import React from 'react';
import './GalleryThumb.css';
import { Link } from 'react-router-dom'

export default function GalleryThumb({ gallery }) {

  return (
    <Link to={`/galleries/${gallery.id}`}>
      <div className='gallery-thumb'>
        <img src={gallery.img} className='thumb-photo' alt={gallery.title} />
        <h1>{gallery.title}</h1>
      </div>
    </Link>
  )
}
