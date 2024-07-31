import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaThumbsUp } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import loc from "../assets/loc.png";
import WhatsappBooking from '../components/WhatsappBooking';

const ContactUs = () => {
  return (
    <div className="font-serif">
      <div className="p-12 pl-24 pr-24 pb-36">
        <h1 className="text-6xl font-bold text-center mb-10 text-orange-300">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-500" size={36} />
              <span className="text-xl pl-20">+91 9990277066</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-500" size={36} />
              <span className="text-xl pl-20">dr.kopalsingh21@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-500" size={36} />
              <span className="text-xl pl-20">E-333/4, Khosla Market, <br />
              Opp Mahesh Apt, <br />
              New Ashok Nagar, Delhi - 110096</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaThumbsUp className="text-yellow-500" size={36} />
              <span className="text-lg flex space-x-4 pl-20">
                <a href="https://www.facebook.com/profile.php?id=61559639683181&mibextid=ZbWKwL" className='hover:text-black-500'><FaFacebook className='text-2xl text-blue-500'/></a>
                <a href="https://www.instagram.com/vasundhara_dental_home?igsh=MWxmYzBjdHF1cGI3MA==" className='hover:text-black-500'><FaInstagram className='text-2xl text-pink-600'/></a>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={loc}
              alt="https://www.google.com/maps/dir//vasundhara+dental+home/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390ce56728aaf793:0xa7ebca477d53b386?sa=X&ved=1t:3061&ictx=111"
              className="max-w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </div>
      <div className='text-center bg-red-200'><h4 className='text-2xl'>*<u>NOTE</u>*</h4>
      <p className='text-xl'>Bookings are done mainly through WhatsApp. It can also be done by calling on the phone number or visiting the clinic.</p>
      </div>
      <WhatsappBooking />
    </div>
  )
}

export default ContactUs