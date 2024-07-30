import React from 'react'
import { useState } from 'react';

const Reviews = () => {

    const reviews = [
        {
          title: 'Sudhanshu Singh',
          text: 'The consultation was thorough and informative. Dr. Kopal patiently addressed all my concerns and provided valuable tips on maintaining my child’s oral health. Her expertise and gentle approach made the entire experience positive for both of us. I highly recommend Dr. Kopal Singh to any parent looking for a skilled and compassionate pediatric dentist. Her dedication to her patients and her expertise in pediatric dentistry are evident in the quality of care she provides. We will definitely be returning for future check-ups and treatments.',
          backgroundColor: 'bg-blue-100',
        },
        {
          title: 'Shikha Jha',
          text: 'Dr Kopal recommended the best course of treatment for me and my sister and was very professional through out. She made sure we are comfortable throughout the course of the treatment and also gave great recommendations to keep your teeth safe in future :)',
          backgroundColor: 'bg-green-100',
        },
        {
          title: 'Nancy Saharia',
          text: 'I recently underwent dental treatment with Dr. Kopal Singh and had an exceptional experience. The process was virtually painless, and both the doctor and the staff were incredibly friendly. I highly recommend their services to anyone in need of dental care.',
          backgroundColor: 'bg-red-100',
        },
        {
          title: 'Adil Khan',
          text: 'Visited this clinic when I had a sudden pain in my tooth, truly thank full to Dr. Kopal with the way she handled the entire procedure and guided me throughout to feel comfortable. Truly recommending this for all your dental solutions!',
          backgroundColor: 'bg-yellow-100',
        },
        {
          title: 'Neha',
          text: 'Very professional behaviour and treatment provided with utmost care. Dr. Kopal explained different procedures very patiently. Highly recommended dental clinic in Delhi!',
          backgroundColor: 'bg-purple-100',
        },
        {
          title: 'Shravan Nair',
          text: 'Vasundhara Dental Home is just fantastic with Friendly staff and a really good Doctor. I felt super comfortable throughout my visit. Highly recommend for any dental needs!',
          backgroundColor: 'bg-pink-100',
        },
        {
          title: 'Dipankar Baluni',
          text: 'Best place to go Incase you’re scared of dentists and dental procedures. She is very patient when it comes to annoying patients like self who are supremely scared of dental procedures. The process was painless and she’s perfect at what she does. At the end she also gave me a toy duck.',
          backgroundColor: 'bg-indigo-100',
        },
        {
          title: 'Manish Adsul',
          text: ' would highly recommend Dr. Kopal’s Vasundhara Dental Home to anyone looking for professional and compassionate dentalcare. Thank you for providing such excellent care!”',
          backgroundColor: 'bg-teal-100',
        },
      ];

      const ReviewCard = ({ review }) => {
        const [isExpanded, setIsExpanded] = useState(false);
      
        return (
          <div
          className={`p-8 rounded-lg shadow-lg text-black ${review.backgroundColor}`}
          >
            <h3 className="text-xl font-bold mb-4 text-center">{review.title}</h3>
            <p className={`mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>
              {review.text}
            </p>
            <button
              className="underline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        );
      };
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-6xl font-semibold text-center mb-8 font-serif text-amber-600 p-10">Our patients say...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>

  )
}

export default Reviews