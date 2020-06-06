import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Gallery from '../components/Gallery';
// import { data } from '../content';
// import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const dummyGallery = {
  title: 'Aliqua dolor minim incididunt sit.',
  photos: [
    { id: 1, title: 'Excepteur velit in fugiat irure anim exercitation irure excepteur.', img: 'https://images.unsplash.com/photo-1510900767338-8bf61abf2562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
    { id: 2, title: 'Ipsum in commodo aute aliquip ea culpa ad nostrud occaecat pariatur velit nostrud cillum.', img: 'https://images.unsplash.com/photo-1529387133108-ff5502a6de81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
  ]
}

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState(dummyGallery);
  // const { id } = useParams() // will be used for fetching proper one

  // const fetchGallery = () => {
  //   console.log('fetching gallery...');
  // }

  useEffect(() => {
    setIsLoading(true);
    // fetchGallery();
    setGallery(dummyGallery);
    setIsLoading(false);
  })

  return (
    <div className='container'>
      <div className='gallery-topbar'>
        <div>
          <Link to='/galleries'>Back</Link>
        </div>
      </div>
      {isLoading && <Spinner />}
      {!isLoading &&
        <div>
          <Gallery gallery={gallery} />
        </div>}
    </div>
  )
}
