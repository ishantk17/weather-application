import React, { useEffect } from 'react'
import bg from "../Resources/beach.jpg"

function ForecastCard({ forecast }) {

  return (
    <div className='flex p-5 justify-around w-[60vw] text-white gap-2 border-4 border-gray-500'>
      {(forecast!=undefined)?forecast.map((item, index) => (
        <div key={index} className='flex flex-col'>
            <div className='flex items-center'>
               <h1 className='text-3xl font-extrabold'>{item.day.avgtemp_c}&deg; C  </h1>
               <img src={item.day.condition.icon}/>
            </div>
            <div className='flex flex-col gap-1'>
               <h1 className='text-xl font-semibold'>{item.day.condition.text}</h1>
               <h1 className='text-lg '>{item.date}</h1> 
            </div>
            <div className='flex gap-3'>
               <h1>{item.day.maxtemp_c}&deg; C  </h1>
               <p>|</p>
               <h1>{item.day.mintemp_c}&deg; C</h1>
            </div>
            
        </div>
      )):<h1>Please wait while the page is Loading</h1>}
    </div>
  )
}

export default ForecastCard;
