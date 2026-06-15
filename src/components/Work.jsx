import React from 'react'

const Work = ({ image }) => {
  return (
                <div className='w-full h-full relative'>
              <img className='w-full h-full object-cover' src={image} alt="Project Imaage" />
              {/* overlay */}
              <div className='absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4'>
                <a href="/work/1" className='flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md'>
                  <span className='text-white text-lg'>View Details</span>
                  <span className='text-white text-lg'><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 5c-7.633 0-12 7-12 7s4.367 7 12 7 12-7 12-7-4.367-7-12-7zm0 12a5 5 0 1 1 .001-10.001A5 5 0 0 1 12 17zm0-8a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9z"/></svg></span>
                </a>
              </div>
            </div>
  )
}

export default Work