/* eslint-disable @next/next/no-img-element */
"use client"
import { workExperience } from '@/data'
import React, { useState } from 'react'
import { Button } from './ui/MovingBorders'
import { MultiStepLoader as Loader } from "./ui/Multi-step-Loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const Experience = () => {
  const [loading, setLoading] = useState(false);


  const loadingStates = [
    {
      text: "E-commerce Platforms",
    },
    {
      text: "Customer Relationship Management (CRM) Systems",
    },
    {
      text: "Enterprise Resource Planning (ERP) Systems",
    },
    {
      text: "Content Management Systems (CMS)",
    },
    {
      text: "SaaS (Software as a Service) Applications",
    },
    {
      text: "Learning Management Systems (LMS)",
    },
    {
      text: "Real-time Collaboration Tools",
    },
    {
      text: "Booking and Reservation Systems",
    },
    {
      text: "Marketplace Platforms",
    },
    {
      text: "Financial & Banking Apps",
    },
    {
      text: "Job Portals & Recruitment Platforms",
    },
    {
      text: "Data Dashboards & Analytics Tools",
    },
    {
      text: "Community Forums & Discussion Boards",
    },
    {
      text: "Community Forums & Discussion Boards",
    },
    {
      text: "Health & Fitness Apps",
    },
    {
      text: "Event Management Systems",
    },
  ];



  return (


    <div className='py-20'>
      <h1 className='heading text-center mb-15'>
        Our
        <span className='text-purple ms-3'>Proven Expertise</span>
      </h1>

      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800 relative'
          >
            <div className='flex lg:flex-row flex-col lg:items-start items-center p-6 gap-4'>
              <img src={card.thumbnail} alt={card.title} className='lg:w-32 md:w-20 w-16' />
              <div className='flex-1'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>
                <p className='text-start text-white-100 mt-2 font-semibold'>
                  {card.desc}
                </p>
                {card.id === 4 && (
                  <div className="absolute p-1 -mb-3 ">
                    {loading && (
                      <button
                        className="fixed top-4 right-4 text-black dark:text-white z-[150]"
                        onClick={() => setLoading(false)}
                      >
                        <IconSquareRoundedX className="h-10 w-10" />
                      </button>
                    )}
                    <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
                    <div
                      onClick={() => setLoading(true)}
                      className="bg-black-100 hover:bg-[purple]/50 mx-auto text-sm md:text-base transition font-medium duration-200 h-7 rounded-lg px-8 flex items-center justify-center text-white"
                      style={{
                        boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                      }}
                    >
                      View
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>

  )
}

export default Experience




