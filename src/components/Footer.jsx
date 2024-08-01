import React from 'react'
import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='!px-0 !py-10 bg-purple-200 font-serif'>
      <div className='container flex flex-col sm:flex-row sm:justify-between items-center gap-10 sm:h-20'>
        <p className='caption text-n-4 sm:ml-32'>© {new Date().getFullYear()} All rights reserved.</p>
        <p className='text-xl font-semibold'>Vasundhara Dental Home</p>
        <ul className='flex gap-5 flex-wrap justify-center'>
          <li>
            <a href="" className='hover:text-black-500'><FaFacebook /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/vasundhara_dental_home?igsh=MWxmYzBjdHF1cGI3MA==" className='hover:text-black-500'><FaInstagram /></a>
          </li>
          <li>
            <a href="https://wa.link/090sm7" className='hover:text-black-500'><FaWhatsapp /></a>
          </li>
          <li>
            <a href="https://www.google.com/maps/dir//vasundhara+dental+home/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390ce56728aaf793:0xa7ebca477d53b386?sa=X&ved=1t:3061&ictx=111"><FaMapMarkedAlt /></a>
          </li>
          <li>
            <a href=""><FaPhoneAlt /></a>
          </li>
          <li>
            <a href=""><MdMail /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer