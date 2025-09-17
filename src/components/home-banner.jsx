import { useState } from 'react'
import './home-banner.css'
// const PUBLIC_URL = './../../public/assets/';
export function HomeBanner() {

  return (
    <div className="bg-white pt-10">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#2d5a27ab] to-[#f0f4cd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="xl:col-span-8 pb-32 lg:col-span-8 not-xl:col-span-12">
            <div className="">
              <h1 className="pt-32 font-semibold tracking-tight text-balance text-gray-900 xl:text-6xl lg:text-5xl md:text-5xl not-sm:text-4xl">
                Hi, I am <span className='name-heading'>Waqas Salman</span>
                <br></br>
                Frontend Web Developer
              </h1>
              <p className="mt-8 font-medium text-pretty text-gray-500 not-lg:mt-2 lg:text-xl md:text-lg sm:text-xl">
                My expertise lies in designing and implementing responsive and user-friendly applications utilizing modern frameworks, including React, Angular, React Native, Shopify, and WordPress
              </p>
              {/* <div className="mt-10 flex items-center gap-x-6">
              <a
                  href="#"
                  className="rounded-full bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>  
              </div> */}
              <div className='mt-10 flex items-center gap-x-6 not-lg:mt-0.5'> 
                <a href='https://github.com/waqassalman' target='_blank'>
                <img className=''
                src="./Portfolio_website/public/assets/linkedin.png"
                width={32} height={32}
                alt="#"
                ></img>
                </a>
                <a href='https://www.linkedin.com/in/waqas-salman' target='_blank'>
                 <img 
                src="./Portfolio_website/public/assets/github.png"
                width={32} height={32}
                alt="#"
                ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className='home-image-col'>
              <img
                className="home-image xl:block not-lg:hidden"
                src='./Portfolio_website/public/assets/myimage.png'
                alt='#'>
              </img>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeBanner;
