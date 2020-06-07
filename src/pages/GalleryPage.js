import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Gallery from '../components/Gallery';
import { Link, useParams } from 'react-router-dom';

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState({});
  const { id } = useParams();

  const fetchGallery = async () => {
    setIsLoading(true);
    const res = await axios.get(`/api/v1/galleries/${id}`)
    const fetchedGallery = res.data.payload;
    setGallery(fetchedGallery);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchGallery();
  }, [])

  return (
    <div className='container'>
      <div className='gallery-topbar'>
        <div>
          <Link to='/galleries'><button>Back</button></Link>
        </div>
      </div>
      {isLoading && <Spinner />}
      {gallery &&
        <div>
          <Gallery gallery={gallery} />
        </div>}
    </div>
  )
}
