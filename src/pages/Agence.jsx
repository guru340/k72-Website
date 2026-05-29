import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
]

const Agence = () => {
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: 'top 28%',
                end: 'top -70%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const imageIndex = self.progress < 1
                        ? Math.floor(self.progress * imageArray.length)
                        : imageArray.length - 1
                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })

    return (
        <div>
            {/* Page 1 */}
            <div id='page1' className='relative py-1 min-h-screen'>

                {/* Floating team image — z-0 so text renders on top */}
                <div
                    ref={imageDivRef}
                    className='absolute overflow-hidden lg:h-[20vw] h-[35vw] lg:rounded-3xl rounded-2xl lg:w-[15vw] w-[26vw] lg:top-96 top-24 lg:left-[30vw] left-[37vw] z-0'
                >
                    <img
                        ref={imageRef}
                        className='h-full object-cover w-full'
                        src={imageArray[0]}
                        alt="Team member"
                    />
                </div>

                {/* Big title — z-10 renders above the image */}
                <div className='relative z-10 font-[font2]'>
                    <div className='lg:mt-[55vh] mt-[40vw]'>
                        <h1 className='lg:text-[20vw] text-[22vw] text-center uppercase lg:leading-[18vw] leading-[20vw]'>
                            Soixan7e <br />Douze
                        </h1>
                    </div>

                    {/* Description text */}
                    <div className='lg:pl-[40%] lg:mt-20 mt-6 px-4 lg:px-3 pb-16'>
                        <p className='lg:text-5xl text-base leading-snug lg:leading-tight'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Page 2 — spacer for scroll pin */}
            <div id='page2' className='h-screen' />
        </div>
    )
}

export default Agence