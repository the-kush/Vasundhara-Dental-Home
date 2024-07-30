import React from 'react'
import { useState } from 'react';

const HomeFacilities = () => {

    const [activeTab, setActiveTab] = useState('kids');
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const kidsContent = [
    {
      title: '1. First Dental Visit',
      content: `The American Academy of Pediatric Dentistry (AAPD) and the American Dental Association (ADA) recommend scheduling a child's first dental visit within 6 months of the eruption of their first primary tooth, but no later than 12 months of age. Initiating dental visits at an early age can significantly lower a child's future dental risks, build positive attitude and promote better oral health and reducing associated costs.`,
    },
    {
      title: '2. Preventive Treatment',
      content: `“Prevention is better cure” Children at high risk of dental decay are indicated for application of dental fluoride that not only helps to strengthen tooth enamel, making it more resistant to decay but also repairs early stages of tooth decay even before they become visible and inhibits the growth of harmful oral bacteria. This makes fluoride an essential part of maintaining good oral health and protecting against the common problem of tooth decay and is recommended to be applied biannualy.`,
    },
    {
      title: '3. Dental Caries Treatment*',
      content: `We address cavities in both milk teeth and permanent teeth using various methods such as Silver Diamine Fluoride (SDF) to arrest cavities, fillings with suitable materials, crowns (caps) for added protection, pulp therapy (root canal treatment), extractions, and space maintainers.`,
    },
    {
        title: '4. Tooth Fractures*',
        content: `If your child injures or fractures a front tooth, it's crucial to seek immediate dental care. For chipped permanent teeth, keep the broken piece in water and visit us promptly. If a permanent tooth is knocked out, it can often be replanted. Apply ice to reduce bleeding, find the tooth, and gently rinse it if soiled, holding it by the crown. Place the tooth back in its socket if possible, or keep it in your child's saliva, cold milk, or coconut water, and rush to us. For all other mouth injuries, ensure your child is otherwise well and hasn't vomited or fainted, then visit us immediately.`
    },
    {
        title: '5. Crooked Teeth*',
        content: `We prevent and correct malocclusions (crowding, buck teeth, etc.) in growing children. This includes helping children break habits like thumb or lip sucking. We use growth modification appliances for children with some permanent teeth, and sometimes in baby teeth. Fixed braces are used for older children and teenagers.`
    },
    {
        title: '6. Management of Pain and anxiety',
        content: `At our pediatric dental practice, we are dedicated to caring for children's oral health. Our team is specially trained to help anxious children feel secure during their dental visits. Our office is designed with children in mind, creating a welcoming environment where most children feel calm, comfortable, and confident. However, we understand that dental treatments can sometimes be unpleasant and require cooperation from the child. To facilitate this, we use Behavior Guidance Techniques to make the dental experience pleasant, often helping even the most fearful and reluctant children to cooperate. One such techniques includes Minimal Sedation - Happy Gas. `
    },
    {
        title: '7. Sports Dentistry',
        content: `Sports dentistry focuses on the dental health and safety of athletes. Our specialized care includes custom mouthguards to protect teeth during sports activities, as well as treatment and prevention of dental injuries related to sports. We aim to optimize oral health for athletes of all levels, ensuring they can perform at their best with a healthy and protected smile.`
    },
    // Add other kids sections here...
  ];

  const adultsContent = [
    {
        title: '1. Preserving Natural Teeth',
        content: `Preserving natural teeth is at the heart of our conservative dental philosophy. We emphasize regular preventive care, including dental cleanings and examinations, to detect and address dental issues as early as possible. When restorative treatment is needed, we focus on minimally invasive techniques.`,
      },
      {
        title: '2. Root Canal Therapy',
        content: `At Vasundhara Dental Home, we utilize state-of-the-art technology for root canal therapy, including rotary instruments to provide high-quality treatment for our patients. Root canal therapy is a specialized procedure that can save a severely damaged or infected tooth from extraction.`,
      },
      {
        title: '3. Tooth Extraction Care',
        content: `Ensuring a precise, comfortable, and painless tooth extraction is paramount to safeguarding surrounding healthy tissues and promoting optimal socket healing. At our practice, we utilize state-of-the-art technologies and precision techniques to elevate your dental experience.`,
      },
      {
        title: '4. IMPLANTS',
        content: `Dental implants are the premier solution for replacing missing teeth, offering a stable and durable foundation for crowns, bridges, or dentures. Our implant specialists are highly experienced in placing and restoring dental implants, utilizing the latest techniques and materials to ensure the best possible results for our patients.`,
      },
      {
        title: '5. Comprehensive Prosthodontic Care',
        content: `Our prosthodontic care includes a diverse array of treatments focused on restoring and replacing missing or damaged teeth. Whether you require a single crown, bridge, veneers, laminates, dentures, or comprehensive full-mouth reconstruction, our specialist team will design a personalized treatment plan tailored to your specific needs. Our goal is to restore your smile to its natural beauty and optimal function, ensuring lasting satisfaction and confidence in your dental health.`,
      },
      {
        title: '6. Aligning The Crooked Teeth',
        content: `Orthodontics is a specialized branch of dentistry focused on correcting misaligned teeth and jaws to improve both function and smile aesthetics. Orthodontists use braces, aligners, and retainers to gradually shift teeth into proper alignment. Beyond enhancing appearance, orthodontic treatment is crucial for promoting oral health by reducing the risk of dental issues like decay, gum disease, and TMJ disorders. Properly aligned teeth also contribute to better chewing, speech, and self-confidence. Treatment plans are personalized based on factors such as age, dental health, and patient preferences, aiming to achieve a balanced bite and a lasting, radiant smile. With digital orthodontic treatment, we can certainly resolve your problems in a much shorter duration. Orthodontic treatment can be done with the following:- 
                  » Metal Braces
                  » Ceramic Braces (Tooth Colored Braces)
                  » Lingual Braces (Invisible Braces)
                  » Damon Braces 
                  » Incognito Braces
                  » Invisalign or Clear Aligners.`,
      },
      {
        title: '7. Periodontal Care',
        content: `Healthy gums are vital for a strong foundation for your teeth. At our practice, our periodontal specialists focus on preventing, diagnosing, and treating gum disease. Additionally, they perform cosmetic gum procedures to enhance the aesthetics of your smile.`,
      },
      {
        title: '8. Laser Dentistry',
        content: `Laser technology has transformed modern dentistry, providing significant advantages for patients. LASER enables precise and minimally invasive procedures, leading to reduced discomfort, minimal bleeding, and accelerated healing times. Whether for gum contouring, cavity treatment, or soft tissue surgery, laser dentistry ensures outstanding outcomes with minimal impact on surrounding tissues.`,
      },
      {
        title: '9. Early Detection of Oral Cancer',
        content: `Detecting oral cancer early is critical for successful treatment outcomes. Our dedicated team of specialists utilizes advanced technology to conduct thorough screenings, enabling early intervention and comprehensive care. Our goal is to improve outcomes and enhance the quality of life for our patients through proactive oral cancer detection and treatment.`,
      },
      // Add other adults sections here...
    ];

    const renderContent = (content) => {
        return content.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg mb-4 bg-gray-50 shadow-md">
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-justify">
              {expanded[index] ? item.content : `${item.content.substring(0, 200)}...`}
            </p>
            <button onClick={() => toggleExpand(index)} className="underline text-blue-600">
              {expanded[index] ? 'Read less' : 'Read more'}
            </button>
          </div>
        ));
      };
    

  return (
    <>
<div className="max-w-4xl mx-auto py-10">
      <h1 className="text-center text-6xl font-bold mb-8 text-red-400 font-serif">Our Facilities</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 text-2xl font-sans rounded ${activeTab === 'kids' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('kids')}
        >
          Kids
        </button>
        <button
          className={`px-4 py-2 text-2xl font-sans rounded ${activeTab === 'adults' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('adults')}
        >
          Adults
        </button>
      </div>
      <div className="flex flex-col space-y-8">
        {activeTab === 'kids' ? renderContent(kidsContent) : renderContent(adultsContent)}
      </div>
    </div>
    </>
  )
}

export default HomeFacilities