
"use client"
import React from 'react'
import { useState } from 'react';


function Faq() {


    const [openAccordion, setOpenAccordion] = useState(1);

    const accordionData = [
        {
            id: 1,
            title: "What is Flowbite?",
            content: `Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.`,
            linkText: "get started",
            linkUrl: "/docs/getting-started/introduction/",
        },
        {
            id: 2,
            title: "Is there a Figma file available?",
            content: `Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.`,
            linkText: "Figma design system",
            linkUrl: "https://flowbite.com/figma/",
        },
        {
            id: 3,
            title: "What are the differences between Flowbite and Tailwind UI?",
            content: `The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.`,
            linkText: "Flowbite Pro",
            linkUrl: "https://flowbite.com/pro/",
        },
    ];

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };
    return (
        <>
            <section className='my-10 mt-20'>
                <h1 className="heading mb-15">
                    Frequently <span className="text-purple">Asked Questions</span>
                </h1>

                <div id="accordion-collapse" data-accordion="collapse" className="mt-10 mb-20">
                    {accordionData.map((item) => (
                        <div key={item.id}>
                            <h2 id={`accordion-collapse-heading-${item.id}`}>
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={openAccordion === item.id}
                                    aria-controls={`accordion-collapse-body-${item.id}`}
                                >
                                    <span>{item.title}</span>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 ${openAccordion === item.id ? 'rotate-180' : ''} shrink-0`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-collapse-body-${item.id}`}
                                className={`${openAccordion === item.id ? '' : 'hidden'}`}
                                aria-labelledby={`accordion-collapse-heading-${item.id}`}
                            >
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content}</p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out the{' '}
                                        <a
                                            href={item.linkUrl}
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {item.linkText}
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>

    )
}

export default Faq
