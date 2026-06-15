import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[#EDEDED] h-[calc(70vh-72px)]'>
      <div className='container mx-auto py-5 flex flex-col justify-between h-full'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-black font-cursive'>Dipesh</h2>
          <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"/></svg></span>
        </div>
        <div className='flex  justify-between h-90'>
          <div className='flex flex-1 flex-col gap-4'>
            <h3 className='text-3xl uppercase '>Hey, There</h3>
            <h1 className='text-4xl font-bold'>I AM Dipesh </h1>
            <p className='text-lg'>I am a web depeloper / designer</p>
            <Button classes="border border-2 uppercase  py-2 px-4 w-32 rounded text-stone-900">Hire Me</Button>
          </div>
          <div className='h-full flex-1 '>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero