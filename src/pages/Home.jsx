import React from 'react'
import Video from '../Components/Home/Video'
import HomeTop from '../Components/Home/HomeTop'
import HomeButtom from '../Components/Home/HomeBottom'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
            <Video />
      </div>

      <div className='h-screen w-screen relative    flex flex-col justify-between'>
        <HomeTop />
        <HomeButtom/>
      </div>
    </div>
  )
}

export default Home
