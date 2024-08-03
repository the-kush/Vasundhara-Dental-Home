import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { FaMapMarkedAlt, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
    { path: "/", link: "Home" },
    { path: "/facilities", link: "Facilities" },
    { path: "/timing", link: "Timing" },
    { path: "/contactus", link: "ContactUs" },
    { path: "/blog", link: "Blog" },
  ];

  return (
    <header className="bg-gray-200 text-black">
      <nav className="font-serif">
      <div className="p-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <img className="object-cover h-24 md:h-48 mr-4 md:mr-16" src={Logo} alt="Logo" />
            <div className="flex flex-col items-center md:items-start">
              <strong className="font-sans text-3xl md:text-6xl font-bold text-center md:text-left">Vasundhara Dental Home</strong>
              <span className="italic text-sm md:text-xl text-center md:text-left">for Family & Kids</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col pl-24 md:flex-row justify-center items-start text-center md:text-left">
            <div className="md:mr-16">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <FaPhoneAlt className="mr-8" />
                <span>+91 9990277066</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <MdMail className="mr-8" />
                <span>dr.kopalsingh21@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaMapMarkedAlt className="mr-4" />
              <div>
                <p>E-333/4, Khosla Market,</p>
                <p>Opp Mahesh Apt,</p>
                <p>New Ashok Nagar, Delhi - 110096</p>
              </div>
            </div>
          </div>
          <div className="mt-4 md:hidden flex justify-center">
            <button onClick={handleToggle}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div>
          <ColoredLine color="black" />
        </div>
        <div className={`md:flex justify-center items-center px-4 py-2 md:py-4 max-w-7xl mx-auto ${isOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg">
            {navItems.map(({ path, link }) => (
              <li className="text-black" key={path}>
                <NavLink to={path} onClick={() => setIsOpen(false)}>{link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;