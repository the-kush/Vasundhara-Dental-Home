import React from 'react'
import ImageSlidder from '../components/ImageSlidder'
import KopalSingh from '../components/KopalSingh'
import HomeFacilities from '../components/HomeFacilities'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <>
    <div className='container mx-auto'>
      <ImageSlidder />
    </div>
    <KopalSingh />
    <HomeFacilities />
    <Reviews />
    </>
  )
}

export default Home