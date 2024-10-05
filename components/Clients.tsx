import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-10'  id="testimonials">
            <h1 className='heading mb-10'>
                What clients
                <span className='text-purple'> say about Us</span>
            </h1>

            <div className='flex flex-col items-center max-lg:mt-10'>
                <div className='h-[30vh] md:h-[20rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden '>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                        className='text-white-100'
                    />

                </div>

            </div>
        </div>
    )
}

export default Clients