import React from 'react'
import Video from '../Components/Home/Video'
import HomeTop from '../Components/Home/HomeTop'
import HomeBottom from '../Components/Home/HomeBottom'

const Home = () => {
  return (
    <div className='text-white'>
      {/* Background video — fixed behind everything */}
      <div className='h-screen w-screen fixed top-0 left-0'>
        <Video />
      </div>

      {/* Overlay content */}
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeTop />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home