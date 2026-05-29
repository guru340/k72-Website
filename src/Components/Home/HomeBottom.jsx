import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-end justify-center gap-2 pb-8 lg:pb-0 relative'>
      {/* Description text — desktop: absolute right; mobile: hidden or below buttons */}
      <p className='hidden lg:block absolute lg:w-[17vw] w-52 lg:right-20 right-2 lg:bottom-24 bottom-20 font-[font1] lg:text-base text-xs lg:leading-relaxed leading-tight text-white'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l'étincelle pour générer de l'émotion.
      </p>

      {/* Projects button */}
      <div className='border-2 lg:border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300 lg:h-44 h-16 flex items-center px-4 lg:px-14 border-white rounded-full uppercase'>
        <Link className='lg:text-[3.5vw] text-[6vw] lg:mt-4 mt-1 leading-[18vw]' to='/project'>
          Projets
        </Link>
      </div>

      {/* Agence button */}
      <div className='border-2 lg:border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300 lg:h-44 h-16 flex items-center px-4 lg:px-14 border-white rounded-full uppercase'>
        <Link className='lg:text-[3.5vw] text-[6vw] lg:mt-4 mt-1 leading-[18vw]' to='/agence'>
          Agence
        </Link>
      </div>
    </div>
  )
}

export default HomeBottom