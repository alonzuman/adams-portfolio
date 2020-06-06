import React from 'react';
import './OpenPhoto.css';

export default function OpenPhoto({ photo, isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
    const body = document.querySelector('body');
    body.style.overflow = 'scroll'
  }

  return (
    <div className='full-page-photo-container'>
      <div className='box-shadow'>
        <button className='close-button' onClick={handleClose}>Close</button>
        <img src={photo} className='full-page-photo' alt='' />
      </div>
    </div>
  )
}
