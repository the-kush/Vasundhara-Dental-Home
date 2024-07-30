import React from 'react'
import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='!px-0 !py-10 bg-purple-200 font-serif'>
        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col h-10'>
            <p className='caption texr-n-4 lg:block ml-32'> © {new Date().getFullYear()} All rights reserved.</p>
            <p className='text-xl hover:subpixel-antialiased font-semibold'>Vasundhara Dental Home</p>
            <ul className='flex gap-5 flex-wrap'>
                <a href="" className='hover:text-black-500'><FaFacebook /></a>
                <a href="https://www.instagram.com/vasundhara_dental_home?igsh=MWxmYzBjdHF1cGI3MA==" className='hover:text-black-500'><FaInstagram /></a>
                <a href="https://wa.link/090sm7" className='hover:text-black-500'><FaWhatsapp /></a>
                <a href="https://www.google.com/maps/dir//vasundhara+dental+home/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390ce56728aaf793:0xa7ebca477d53b386?sa=X&ved=1t:3061&ictx=111"><FaMapMarkedAlt /></a>
                <a href=""><FaPhoneAlt /></a>
                <a href=""><MdMail /></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer