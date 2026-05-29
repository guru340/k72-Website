import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const navItems = [
    {
        label: 'Projets',
        to: '/project',
        img1: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
        img2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    },
    {
        label: 'Agence',
        to: '/agence',
        img1: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
        img2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    },
    {
        label: 'Contact',
        to: '/',
        img1: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
        img2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    },
    {
        label: 'Blogs',
        to: '/',
        img1: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
        img2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    },
]

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', { display: 'block' })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: { amount: -0.3 }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: { amount: 0.3 }
        })
        tl.to('.navlink', { opacity: 1 })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: 0.1 }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: { amount: 0.1 }
        })
        tl.to('.navlink', { opacity: 0 })
        tl.to('.fullscreennav', { display: 'none' })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0'>
            {/* Stair background */}
            <div className='h-screen w-full fixed top-0 left-0'>
                <div className='h-full w-full flex'>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className='stairing h-0 w-1/5 bg-black' />
                    ))}
                </div>
            </div>

            {/* Nav content */}
            <div ref={fullNavLinksRef} className='relative h-full flex flex-col'>
                {/* Top bar */}
                <div className="navlink opacity-0 flex w-full justify-between lg:p-5 p-3 items-start flex-shrink-0">
                    <Link to='/' onClick={() => setNavOpen(false)} className='lg:w-36 w-20 block'>
                        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z" />
                        </svg>
                    </Link>
                    {/* Close button */}
                    <div
                        onClick={() => setNavOpen(false)}
                        className='lg:h-16 h-12 lg:w-16 w-12 relative cursor-pointer flex items-center justify-center'
                    >
                        <div className='lg:h-10 h-7 lg:w-0.5 w-0.5 -rotate-45 absolute bg-[#D3FD50]' />
                        <div className='lg:h-10 h-7 lg:w-0.5 w-0.5 rotate-45 absolute bg-[#D3FD50]' />
                    </div>
                </div>

                {/* Nav links */}
                <div className='flex-1 flex flex-col justify-center lg:py-8 py-4'>
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            to={item.to}
                            onClick={() => setNavOpen(false)}
                            className={`link opacity-0 origin-top relative border-t border-white block ${i === navItems.length - 1 ? 'border-b' : ''}`}
                        >
                            <h1 className='font-[font2] lg:text-[8vw] text-[11vw] text-center lg:leading-[0.85] leading-[0.9] lg:py-6 py-3 uppercase'>
                                {item.label}
                            </h1>
                            {/* Hover overlay */}
                            <div className='moveLink absolute inset-0 text-black flex overflow-hidden bg-[#D3FD50]'>
                                {[0, 1].map((_, j) => (
                                    <div key={j} className='moveX flex items-center flex-shrink-0'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[11vw] text-center lg:leading-[0.85] leading-[0.9] lg:py-6 py-3 uppercase'>
                                            Pour Tout voir
                                        </h2>
                                        <img
                                            className='lg:h-28 h-12 rounded-full flex-shrink-0 lg:w-80 w-24 object-cover mx-4'
                                            src={item.img1}
                                            alt=""
                                        />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-[11vw] text-center lg:leading-[0.85] leading-[0.9] lg:py-6 py-3 uppercase'>
                                            Pour Tout voir
                                        </h2>
                                        <img
                                            className='lg:h-28 h-12 rounded-full flex-shrink-0 lg:w-80 w-24 object-cover mx-4'
                                            src={item.img2}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav