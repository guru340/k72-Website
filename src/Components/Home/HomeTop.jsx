import React from 'react'
import Video from './Video'

const HomeTop = () => {
  return (
    <div className='font-[font1] mt-0 pt-5 text-center text-white'>
      <div className='lg:text-[9.5vw] text-[13vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[11vw]'>
        the spark for
      </div>
      <div className='lg:text-[9.5vw] text-[13vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[11vw]'>
        all
        <div className='lg:h-[7vw] h-[10vw] lg:w-[16vw] w-[20vw] rounded-full -mt-1 lg:-mt-3 overflow-hidden'>
          <Video />
        </div>
        things
      </div>
      <div className='lg:text-[9.5vw] text-[13vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[11vw]'>
        creative
      </div>
    </div>
  )
}

export default HomeTop