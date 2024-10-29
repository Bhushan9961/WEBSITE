import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Transform = () => {
  return (
    <div className="flex flex-col items-center my-10 mt-0">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Transform</span> Your Online Vision
          <span className="text-purple ms-3">Into Reality</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect today and explore how We can empower your digital success!
        </p>
        <a href="mailto:bhushan776767@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
  )
}

export default Transform
