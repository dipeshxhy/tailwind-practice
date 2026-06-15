import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Work from './Work';

const works =[
  {
    id:1,
    image:"https://preview.hasthemes.com/smarto/img/portfolio/p1.jpg"
  },
  {
    id:2,
    image:"https://preview.hasthemes.com/smarto/img/portfolio/p2.jpg"
  },
  {
    id:3,
    image:"https://preview.hasthemes.com/smarto/img/portfolio/p3.jpg"
  },
  {
    id:4,
    image:"https://preview.hasthemes.com/smarto/img/portfolio/p4.jpg"
  },
  {
    id:5,
    image:"https://preview.hasthemes.com/smarto/img/portfolio/p5.jpg"
  }
]

const Works = () => {
  const showWork = works.map(w=> <Work key={w.id} image={w.image} />)
  return (
    <div className="container mx-auto">
      <div className='py-30'>
        <div className='w-1/2'>
          <h2 className="text-2xl font-bold mb-4">CHECK LATEST WORK</h2>
          <p className="mb-4 text-slate-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the monen vai kemon asen{' '}
          </p>
        </div>
        <div>
          {/* tabs */}
          <div className='flex gap-5 mb-8'>
            <button>All</button>
            <button>UI&UX</button>
            <button>Web Design</button>
            <button>App Design</button>
            <button>Sketch design</button>
          </div>
          {/* end tabs */}
          {/* works */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 img-box grid-rows-[1fr_auto] '>

        {showWork}
          </div>
          {/*end  works */}
        </div>
      </div>
    </div>
  );
};

export default Works;
