import React from 'react'
import ImageSlidder from '../components/ImageSlidder'
import KopalSingh from '../components/KopalSingh'
import HomeFacilities from '../components/HomeFacilities'
import Reviews from '../components/Reviews'
import WhatsappBooking from '../components/WhatsappBooking'
import SocialMedia from '../components/SocialMedia'

const Home = () => {
  return (
    <>
    <div className='container mx-auto sm:text-center'>
      <ImageSlidder />
    </div>
    <KopalSingh />
    <HomeFacilities />
    <Reviews />
    <WhatsappBooking />
    <SocialMedia />
    </>
  )
}

export default Home