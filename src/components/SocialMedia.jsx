import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
                <div className='fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-4 p-4 backdrop-blur-lg'>
                <a href="" className='hover:text-black-500'><FaFacebook className='text-2xl text-blue-500'/></a>
                <a href="https://www.instagram.com/vasundhara_dental_home?igsh=MWxmYzBjdHF1cGI3MA==" className='hover:text-black-500'><FaInstagram className='text-2xl text-pink-600'/></a>
                <a href="https://wa.link/090sm7" className='hover:text-black-500'><FaWhatsapp className='text-2xl text-green-600'/></a>
            </div>
    </div>
  )
}

export default SocialMedia