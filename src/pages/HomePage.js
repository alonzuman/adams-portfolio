import React from 'react';
import { data } from '../content';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='home-container'>
      <div className='hero-banner-container'>
        <img
          src='https://images.unsplash.com/photo-1519084153128-6ea99fe95bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          className='hero-banner' />
        <h1>{data.homePage.heroBanner}</h1>
      </div>

    </div>
  )
}
