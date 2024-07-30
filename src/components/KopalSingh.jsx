import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import doctorImage from "../assets/linidi_pic.jpeg";

const KopalSingh = () => {
  return (
    <>
    <div className='bg-white'>
<div className="flex flex-col md:flex-row justify-between items-start px-16 py-16 space-y-8 md:space-y-0 md:space-x-8 bg-lime-100">
      <div className="md:w-2/3 space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-rose-950">Dr. Kopal Singh</h1>
          <h3 className="text-2xl font-semibold mt-2 text-gray-600">BDS, MDS, FIAPD</h3>
          <h6 className="text-lg font-medium mt-1 text-gray-600 italic">Pediatric and Preventive Dentistry <br /> Reg. No.: 15898</h6>
        </div>
        <a href="https://www.linkedin.com/in/dr-kopal-singh-04480610a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-600">
              <FaLinkedin size={24} />
        </a>
        <div>
          <p className="text-base leading-7 text-justify">
            Dr. Kopal Singh, a graduate of Bharati Vidyapeeth Dental College & Hospital, Mumbai (2019), completed her Master’s degree in Pediatric and Preventive Dentistry from ITS Dental College, Ghaziabad in 2023. In 2024, she founded Vasundhara Dental Home in Delhi, introducing a visionary approach that integrates cutting-edge technologies to provide precise and minimally invasive treatments. <br /><br />
            Specializing in Pediatric and Preventive Dentistry, Dr. Singh leads her field with expertise in dental treatments under Conscious Sedation and General Anesthesia, ensuring optimal comfort and safety for young patients. Her interests include minimally invasive dentistry, dental traumatology, care for children with disabilities, and the use of soft tissue lasers to offer the best possible treatments. <br /><br />
            Vasundhara Dental Home stands as a premier destination for comprehensive dental services in Delhi. We are committed to exceptional dental care, prioritizing oral health, comfort, and satisfaction. We aim to create healthy, radiant smiles that reflect overall well-being and confidence. Our dedicated team of experienced professionals provides exceptional dental care in a warm, welcoming environment. <br /><br />
            Our goal is to ensure that our patients receive age-appropriate, evidence-based quality care, fostering a healthy and positive attitude towards oral care and dental treatments. We measure our success by the smiles on the faces of our patients !!
          </p>
          <div className="flex justify-center mt-4">

          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex items-start justify-center">
        <img src={doctorImage} alt="Dr. Kopal Singh" className="w-full h-auto max-h-full object-cover rounded-lg shadow-lg" />
      </div>
      </div>
    </div>
    

    </>
  )
}

export default KopalSingh