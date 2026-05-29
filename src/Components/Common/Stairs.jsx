import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()

        // Show container
        tl.to(stairParentRef.current, { display: 'flex' })

        // Stairs animate in (from 0 height)
        tl.from('.stair', {
            height: 0,
            stagger: { amount: -0.2 }
        })

        // Stairs exit downward
        tl.to('.stair', {
            y: '100%',
            stagger: { amount: -0.25 }
        })

        // Hide container
        tl.to(stairParentRef.current, { display: 'none' })

        // Reset stair positions for next use
        tl.set('.stair', { y: '0%' })

        // Page fade in
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.02,
            duration: 0.6,
        })
    }, [currentPath])

    return (
        <div>
            {/* Stair overlay — starts hidden */}
            <div
                ref={stairParentRef}
                className='h-screen w-full fixed z-[60] top-0 left-0 hidden'
            >
                <div className='h-full w-full flex'>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className='stair h-full w-1/5 bg-black' />
                    ))}
                </div>
            </div>

            {/* Page content */}
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs