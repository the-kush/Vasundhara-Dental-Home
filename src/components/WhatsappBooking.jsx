import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappBooking = () => {

  const handleClick = () => {
    window.location.href = 'https://wa.link/090sm7'
  }

  return (
    <div className="fixed bottom-4 right-4 flex items-center p-2 shadow-lg rounded-lg hover:bg-rose-600 sm:text-left">
      <a href="https://wa.link/090sm7" className='hover:text-black-500'><FaWhatsapp className='text-6xl text-green-600'/></a>
      <button onClick={handleClick} className=" text-black py-2 px-4 rounded-lg transition duration-300 text-2xl">
        Book an Appointment Now
      </button>
    </div>
  )
}

export default WhatsappBooking