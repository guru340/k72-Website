import React from 'react'
import Video from '../Home/Video'
const HomeTop = () => {
  return (
    <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center text-white'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                  the spark for
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                all
                <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden '>
                    <Video />
                </div>
                things
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
            
              creative            
                        
            </div>
        </div>
  )
}

export default HomeTop
