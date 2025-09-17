import React, { useCallback, useState } from 'react'

import './projects.css'
export function Projects() {
    const portfolio = [
        {
            id: '1',
            portfolio_img: './assets/portfolio/Courses.png',
            link: 'https://forex-students.surge.sh/',
            title: 'Pak Forex - LMS ( Learning Management System)',
            techs: ['React', 'Redux', 'Ant Design', 'GraphQL']
        },
        {
            id: '2',
            portfolio_img: './assets/portfolio/fisheye-video.png',
            link: 'https://fisheye-demo.netlify.app',
            title: 'Fisheye ( Video Selling Website )',
            techs: ['Angular', 'Ngx-plyr', 'TypeScript', 'Paypal']
        },
        {
            id: '3',
            portfolio_img: './assets/portfolio/wr-pro-league.png',
            link: 'https://wrproleague.thebackendprojects.com/',
            title: 'WP Pro League ( Branding Website )',
            techs: ['HTML', 'CSS', 'Bootstrap', 'Animations']
        },
        {
            id: '4',
            portfolio_img: './assets/portfolio/sss-home.png',
            link: 'https://sheikhskilledsolutions.com/',
            title: 'Sheikh Skilled Solutions ( Branding Website )',
            techs: ['Wordpress', 'Contact form', 'WP theme']
        },
        {
            id: '5',
            portfolio_img: './assets/portfolio/ganeshspace-lms.png',
            link: '#',
            title: 'Ganesh (Online Yoga Website)',
            techs: ['PHP', 'SQL', 'HTML', 'CSS']
        }
        ,
        {
            id: '6',
            portfolio_img: './assets/portfolio/next-dashboard.png',
            link: 'https://next-js-dashboard-mockup.vercel.app/login',
            title: 'Next Dashboard Mockup ( ERP Dashboard Mockup ) Email: user@nextmail.com , password: 123456',
            techs: ['Next.js', 'Postgresql', 'Tailwind.css']
        }
    ]


    return (
        <div id="projects" className="bg-gray-100 px-20 not-md:px-10">
            <div className="tools-sec py-14 not-md:py-4">
                <h1 className="pb-10 text-4xl text-center font-light italic tracking-tight text-balance sm:text4xl">
                    My Latest <span className="text-4xl font-semibold tracking-tight text-balance text-amber-500 sm:text4xl">Projects</span>
                </h1>

                <div class="grid xl:grid-cols-3 gap-6 not-md:grid-cols-1">
                    {
                        portfolio.map((item, itemIndex) => (
                            <div className="portfolio-card" key={itemIndex}>
                                <div className="portfolio-img">
                                    <img
                                        className='rounded-lg'
                                        src={item.portfolio_img}
                                        // width={600}
                                        alt="#"
                                    >
                                    </img>
                                </div>
                                <div className='portfolio-techs flex gap-4 pt-5 pb-5'>
                                    {item.techs.map((techs) => (
                                        <div className='rounded-full bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 not-lg:px-1 not-lg:py-2 not-lg:text-xs/2'>{techs}</div>
                                    ))
                                    }

                                </div>
                                <div className="portfolio-title flex" style={{ alignItems: 'center' }}>

                                    <h1 className='text-xl font-semibold not-md:text-sm'>{item.title}</h1>
                                    <a href={item.link} target="_blank" class="ml-10 text-xl font-black text-center text-amber-400 bg-teal-900 px-3 py-2 rounded-full"> <span aria-hidden="true">&rarr;</span></a>
                                </div>

                            </div>
                        ))

                    }
                
                </div>
            </div>

        </div>


    )
}

export default Projects;