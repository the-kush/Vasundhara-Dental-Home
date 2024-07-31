import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.png";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";


const Navbar = () => {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: color,
                height: 2,
                padding: 0,
                marginRight: 220,
                marginLeft: 220

            }}
        />
    );

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/facilities", link: "Facilities"},
        {path: "/timing", link: "Timing"},
        {path: "/contactus", link: "ContactUs"},
        {path: "/blog", link: "Blog"},
    ]
  return (
    <header className='bg-gray-200 text-black'>
    <nav className='font-serif'>
    <div className='flex justify-center items-start p-4'>
      <div className='flex flex-row items-start'>
        <img className='object-cover h-48 mr-16' src={Logo} alt='Logo' />
        <div className='ml-8'>
          <strong className='font-sans text-6xl font-bold'>Vasundhara Dental Home</strong>
          <br />
          <span className='italic flex justify-center text-1xl'>for Family & Kids</span>
          <div className='flex mt-6 justify-center space-x-5'>
            <div className='mr-8 '>
              <div className='flex items-center'>
                <FaPhoneAlt className='m-4 ' />
                <span>+91 9990277066</span>
              </div>
              <div className='flex items-center mt-1'>
                <MdMail className='mr-2' />
                <span>dr.kopalsingh21@gmail.com</span>
              </div>
            </div>
            <div>
              <div className='flex items-start'>
                <FaMapMarkedAlt className='mr-2 mt-1' />
                <div>
                  <p>E-333/4, Khosla Market,</p>
                  <p>Opp Mahesh Apt,</p>
                  <p>New Ashok Nagar, Delhi - 110096</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
     <ColoredLine color="black" />
    </div>

    <div className='px-12 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <ul className='md:flex gap-12 text-lg flex-1 justify-center hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-black' key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>
    </nav>
    </header>
  )
}

export default Navbar