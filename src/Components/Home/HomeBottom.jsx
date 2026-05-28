import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottom = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-5'>
        <div className='border-3  items-center hover:border-[#D3FD50]  pt-5 px-4   border-white rounded-full uppercase'>
             <Link className='text-[6vw] text-white hover:text-[#D3FD50]' to='/Project'>Work</Link>
        </div>
       
         <div className='border-3  items-center hover:border-[#D3FD50]  pt-5 px-4   border-white rounded-full uppercase'>
             <Link className='text-[6vw] text-white hover:text-[#D3FD50]' to='/Agence'>Agence</Link>
        </div>
       
    </div>
  )
}

export default HomeBottom
