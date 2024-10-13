import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className='py-20 pt-13 pb-0' id="#projects">
      <h1 className='heading'>
        Our  {''}
        <span className='text-purple'>Prestigious projects</span>
      </h1>

      {/* <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10 '> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16  p-4 pt-0 '>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={title} href={link} >
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 '>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                  <image src="./bg.png" alt="bgpng" />
                </div>
                <image src={img} alt={title} className='z-10 absolute bottom-0 w-full h-full object-cover' />
              </div>

              <div className='px-4'>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>
                  {title}
                </h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 '>
                  {des}
                </p>
                <div className='flex items-center justify-between mt-7 mb-3 '>
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) => (
                      <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center '
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                        <image src={icon} alt={icon} className='p-2 ' />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex mb-2'>
                  <Link href={link} target="_blank" className='flex items-center text-blue-500 hover:underline'>
                    <p>Check live</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </Link>
                </div>
              </div>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects