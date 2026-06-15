import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div>
      <div className='py-10 container mx-auto'>
        <div className='text-center mb-10 '>
          <h2 className='text-3xl font-bold mb-4'>SOME WORD’S ABUOT ME</h2>
          <p className='w-1/2 mx-auto text-center'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
        </div>

        <div className='flex gap-5'>
          <div className='flex-1'>
            <p className='first-letter:text-5xl first-letter:font-bold first-letter:uppercase mb-8'>sabuj must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
            <p className='mb-8'>Imust explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder</p>

            <Button>Download CV</Button>
          </div>
          <div className='flex-1  flex flex-col items-center gap-4'>
            <h2 className='w-full text-3xl text-center'>Skiils</h2>
            <ul className='list-disc list-inside'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About