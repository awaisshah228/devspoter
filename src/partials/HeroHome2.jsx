import React, { useState } from "react"
import { Link } from "react-router-dom"



function HeroHome2({title,desc}) {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <section className="dark:banner-bg dark:banner-area ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h1 lg:text-4xl mb-4 font-red-hat-display font-extrabold"
                data-aos="fade-down"
              >
               {title}
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
               {desc}
              </p>
              <div>
              <Link
                  to="/contact"
                  className="btn-sm text-white bg-teal-500 hover:bg-teal-400 mt-6"
                >
                  Get Started
                </Link>
              </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome2
