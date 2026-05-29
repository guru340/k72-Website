import React from 'react'
import videoSrc from '../../Components/Home/Video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
    </div>
  )
}

export default Video