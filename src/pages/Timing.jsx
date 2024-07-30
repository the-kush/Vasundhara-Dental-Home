import React from 'react'

const Timing = () => {

  const timings = [
    { day: 'Monday', time: '5:00 PM - 8:30 PM' },
    { day: 'Tuesday', time: '5:00 PM - 8:30 PM' },
    { day: 'Wednesday', time: '5:00 PM - 8:30 PM' },
    { day: 'Thursday', time: '5:00 PM - 8:30 PM' },
    { day: 'Friday', time: '5:00 PM - 8:30 PM' },
    { day: 'Saturday', time: '5:00 PM - 8:30 PM' },
    { day: 'Sunday', time: '10:00 AM - 1:00 PM' },
    { day: 'Holidays', time: 'By Appointment Only'}
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-100 p-4 font-serif">
      <h1 className="text-6xl font-bold mb-16 text-center text-neutral-600">Timing</h1>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-2 border-b border-gray-200 pb-3 mb-3">
          <h2 className="text-3xl font-semibold">Day</h2>
          <h2 className="text-3xl font-semibold text-center">Time</h2>
        </div>
        {timings.map((timing, index) => (
          <div key={index} className="grid grid-cols-2 py-2">
            <div className="text-xl">{timing.day}</div>
            <div className="text-xl text-center">{timing.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timing