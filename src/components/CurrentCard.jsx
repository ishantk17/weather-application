import React, { useEffect } from 'react'
function CurrentCard({current,location,time}) {
  return (
    <div className='text-white border-2 border-gray-500 p-5'>
        {(current!=undefined)?
        <div className='  p-5 flex flex-col gap-3'>
        <div className='flex items-center gap-5  h-[10%]'>
            <div className='text-5xl font-extrabold'>{current.feelslike_c}&deg; C</div>
            <img src={current.condition.icon} className='w-50 h-50'/>
        </div>
        <div>
          
          <p className='text-4xl font-semibold'>{current.condition.text}</p>
        </div>
        <div className='flex items-center gap-5 text-center'>
            <h1 className='text-2xl '>{location.name}</h1>
            <h1>{time}</h1>
        </div>
        </div>
        : <h1>Page is Loading</h1>
     }
    </div>
  )
}

export default CurrentCard