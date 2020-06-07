import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryThumb from '../components/GalleryThumb';
import './GalleriesPage.css';

export default function GalleriesPage() {
  const [isStills, setIsStills] = useState(true);
  const [stills, setStills] = useState([]);
  const [motion, setMotion] = useState([]);

  const fetchGalleries = async () => {
    const res = await axios.get('/api/v1/galleries');
    const galleries = res.data.payload;
    const fetchedStills = galleries.filter(gallery => gallery.type === 'stills');
    const fetchedMotion = galleries.filter(gallery => gallery.type === 'motion');
    setStills(fetchedStills);
    setMotion(fetchedMotion);
  }

  useEffect(() => {
    fetchGalleries()
  }, [])

  return (
    <div className='container'>
      <ul className='galleries-toggler-container'>
        <li><button className={isStills ? 'selected' : ''} onClick={() => setIsStills(true)}>Stills</button> </li>
        <li><button className={!isStills ? 'selected' : ''} onClick={() => setIsStills(false)}>Motion</button> </li>
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
