import React from 'react'
import { Helmet } from 'react-helmet'
import ImageSlidder from '../components/ImageSlidder'
import KopalSingh from '../components/KopalSingh'
import HomeFacilities from '../components/HomeFacilities'
import Reviews from '../components/Reviews'
import WhatsappBooking from '../components/WhatsappBooking'
import SocialMedia from '../components/SocialMedia'

const Home = () => {
  return (
    <>
    <Helmet>
    <title>Home Page</title>
        <meta name="description" content="This is official home page for Vasundhara Dental Home. Dental services provided at the best price & doctor makes sure you have a best environment for you & your family." />
        <meta name="keywords" content="Dentist, dental, vasundhara dental home, vasundhara, dental home, tooth" />
    </Helmet>
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