import React, { useState } from 'react';
import { data } from '../content';
import GalleryThumb from '../components/GalleryThumb';
import './GalleriesPage.css';

export default function GalleriesPage() {
  const [isStills, setIsStills] = useState(true);
  const stills = data.galleriesPage.galleries.stills
  const motion = data.galleriesPage.galleries.motion
  return (
    <div className='container'>
      <ul>
        <li><button onClick={() => setIsStills(true)}>Stills</button> </li>
        <li><button onClick={() => setIsStills(false)}>Motion</button> </li>
      </ul>
      {isStills &&
        <div className='galleries-container'>
          {stills.map(gallery => <GalleryThumb key={gallery.id} gallery={gallery} />)}
        </div>}
      {!isStills &&
        <div className='galleries-container'>
          {motion.map(gallery => <GalleryThumb key={gallery.id} gallery={gallery} />)}
        </div>}
    </div>
  )
}
