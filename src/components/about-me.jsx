import { useState } from 'react'
import './home-banner.css'
import ExampleDoc from './assets/Waqas_Salman_Resume.pdf'
export function AboutMe() {

    return (
        <div id="about-me" className="bg-amber-500 pb-10">
            <svg id="visual" viewBox="0 0 1200 220" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 168L20 168C40 168 80 168 120 170.2C160 172.3 200 176.7 240 179.3C280 182 320 183 360 182.3C400 181.7 440 179.3 480 169.8C520 160.3 560 143.7 600 135.8C640 128 680 129 720 135.5C760 142 800 154 840 166.2C880 178.3 920 190.7 960 198.8C1000 207 1040 211 1080 212C1120 213 1160 211 1180 210L1200 209L1200 0L1180 0C1160 0 1120 0 1080 0C1040 0 1000 0 960 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z" fill="#fcaf3c"></path><path d="M0 167L20 159.2C40 151.3 80 135.7 120 134C160 132.3 200 144.7 240 139C280 133.3 320 109.7 360 112.2C400 114.7 440 143.3 480 143.8C520 144.3 560 116.7 600 110.2C640 103.7 680 118.3 720 125.3C760 132.3 800 131.7 840 130.7C880 129.7 920 128.3 960 131.7C1000 135 1040 143 1080 146.3C1120 149.7 1160 148.3 1180 147.7L1200 147L1200 0L1180 0C1160 0 1120 0 1080 0C1040 0 1000 0 960 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z" fill="#acb039"></path><path d="M0 51L20 54.8C40 58.7 80 66.3 120 68.3C160 70.3 200 66.7 240 63.3C280 60 320 57 360 65C400 73 440 92 480 95.7C520 99.3 560 87.7 600 84.8C640 82 680 88 720 85.5C760 83 800 72 840 77.3C880 82.7 920 104.3 960 109.3C1000 114.3 1040 102.7 1080 99C1120 95.3 1160 99.7 1180 101.8L1200 104L1200 0L1180 0C1160 0 1120 0 1080 0C1040 0 1000 0 960 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z" fill="#61a656"></path><path d="M0 33L20 33.2C40 33.3 80 33.7 120 37.3C160 41 200 48 240 47.3C280 46.7 320 38.3 360 40.2C400 42 440 54 480 62C520 70 560 74 600 70.2C640 66.3 680 54.7 720 53.3C760 52 800 61 840 60.5C880 60 920 50 960 45.3C1000 40.7 1040 41.3 1080 44.8C1120 48.3 1160 54.7 1180 57.8L1200 61L1200 0L1180 0C1160 0 1120 0 1080 0C1040 0 1000 0 960 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z" fill="#009473"></path></svg>
            <div className="relative isolate px-6 lg:px-8">
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
                    <div className="col-span-6 not-md:hidden">
                        <div className='flex justify-center'>
                            <img
                                className=""
                                src='./assets/about-me-bg.png'
                                width={400}
                                alt=''>
                            </img>
                        </div>
                    </div>
                    <div className="col-span-6 not-md:col-span-12">
                        <div className="">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white not-md:text-3xl">
                                Who is <span className='text-teal-700 font-normal italic'>Waqas Salman?</span>
                            </h1>
                            <p className="mt-8 font-medium text-pretty text-lg text-black mb-8 not-md:mt-4 not-md:mb-4 not-md:text-sm">
                                I am a proficient frontend developer with over four years of extensive professional experience and a Master's degree in Computer Science from Middlesex University, London. My expertise lies in designing and implementing responsive and user-friendly applications utilizing modern frameworks, including React, Angular, React Native, Shopify, and WordPress. Additionally, my academic curriculum included a significant graduate project focused on Artificial Intelligence, during which I applied Python programming to develop advanced machine learning models and intelligent systems.
                            </p>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="not-md:text-sm">
                                    <h1 className='text-3xl text-teal-700 font-semibold not-md:text-xl'>30+</h1>
                                    Projects Completed
                                </div>
                                <div class="not-md:text-sm">
                                    <h1 className='text-3xl text-teal-700 font-semibold not-md:text-xl'>4+</h1>
                                    Years of Experience
                                </div>
                                {/* <div class="...">05</div> */}
                            </div>
                            <div className="mt-8">
                                <a
                                    href={ExampleDoc}
                                    download="Waqas_Salman_CV" 
                                    target='_blank'
                                    className="rounded-full bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutMe;