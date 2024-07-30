import React, { useRef, useEffect } from 'react'
import pic1  from "../assets/1.jpeg";
import pic2 from "../assets/2.jpeg";
import pic3 from "../assets/3.jpeg";
import pic4 from "../assets/4.jpeg";
import pic5 from "../assets/5.jpeg";
import pic6 from "../assets/6.jpeg";
import pic7 from "../assets/7.jpeg";
import pic8 from "../assets/8.jpeg";
const ImageSlidder = () => {

    const images = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8
    ]
        const sliderRef = useRef(null);
      
        const scrollLeft = () => {
          if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
          }
        };
      
        const scrollRight = () => {
          if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
          }
        };

        useEffect(() => {
            const interval = setInterval(() => {
              scrollRight();
            }, 7000); 
        
            return () => clearInterval(interval);
          }, []);

  return (
    <div className='relative w-full'>
      <button 
        onClick={scrollLeft} 
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>
        &lt;
      </button>
      <div ref={sliderRef} className='w-full overflow-x-scroll hide-scrollbar scroll-smooth'>
        <div className='flex space-x-4' style={{ minWidth: '200%' }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className='w-1/2' 
            />
          ))}
        </div>
      </div>
      <button 
        onClick={scrollRight} 
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>
        &gt;
      </button>
    </div>
  );
}

export default ImageSlidder