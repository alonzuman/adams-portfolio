import React, { useState } from 'react';
import OpenPhoto from './OpenPhoto';
import './Photo.css'

export default function Photo({ photo }) {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  }


  if (!isOpen) {
    return (
      <div onClick={handleOpen}>
        <div className='gallery-photo-container' onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} >
          <img src={photo.img} className='gallery-photo' alt={photo.title} />
          {isHover && <div className='photo-description-container'>{photo.title}</div>}
        </div>
      </div>
    )
  } else {
    return (
      <OpenPhoto photo={photo.img} isOpen={isOpen} handleOpen={handleOpen} setIsOpen={setIsOpen} />
    )
  }
}
