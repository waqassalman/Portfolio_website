import { useState } from 'react'
export function Education() {
    const job_details =
    {
        education: [
            {
                id: 1,
                education_from: "Middlesex University",
                country: "London, UK",
                education_year_start: "2022",
                education_year_end: "2023",
                program: "Master of Science- Computer Science"
            },
            {
                id: 2,
                education_from: "Bahria University",
                country: "Karachi, Pakistan",
                education_year_start: "2015",
                education_year_end: "2019",
                program: "Bachelor of Science- Computer Science"
            }
        ],

        experience: [
            {
                id: 1,
                company: "Self-Employed",
                year_start: "2023",
                year_end: "2025",
                ocupation: "Front-end Developer"
            },
            {
                id: 2,
                company: "Digital Graphiks",
                year_start: "2021",
                year_end: "2022",
                ocupation: "Senior Web Developer"
            },
            {
                id: 3,
                company: "Tafsol Technologies",
                year_start: "2019",
                year_end: "2021",
                ocupation: "Junior Developer"
            }
        ],
        certification: [
            {
                id: 1,
                company: "IBM",
                month: "September",
                year: "2025",
                title: "Developing Front-End Apps with React"
            },
        ]
    }


    return (
        <div id="education" className="bg-white">
            <div className="tools-sec py-24">
                <h1 className="text-4xl text-center font-light italic tracking-tight text-balance sm:text4xl">
                    My Academic &
                </h1>
                <h2 className="pt-1 text-4xl text-center font-semibold tracking-tight text-balance text-amber-500 sm:text4xl">Professional Journey</h2>
                <div className="grid grid-cols-12 gap-10 sm:px-10 xl:px-48 not-lg:px-10 pt-10 not-lg:gap-4">
                    <div className="col-span-6 not-lg:col-span-12">
                        <div className="card">
                            <div className="card-heading text-2xl font-semibold border-b border-gray-300 pb-5 mb-5 flex gap-4 not-lg:text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fe9a00" className="size-8 educ-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                Education
                            </div>
                            {job_details.education.map((post) => (
                                <div className="card-details">
                                    <div className="card-labels">
                                        <p className="year">{post.education_year_start} - {post.education_year_end}</p>
                                        <h1 className='university font-semibold text-xl'>{post.education_from}</h1>
                                        <p className="year text-sm italic">{post.country}</p>
                                        <p className="program">{post.program}</p>
                                    </div>
                                </div>

                            ))
                            }
                            <div className="card-heading text-2xl font-semibold border-b border-gray-300 pb-5 mb-5 flex gap-4 not-lg:text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fe9a00" className="size-8 educ-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>

                                Certification
                            </div>
                            {job_details.certification.map((post) => (
                                <div className="card-details">
                                    <div className="card-labels">
                                        <p className="year">{post.month} - {post.year}</p>
                                        <h1 className='university font-semibold text-xl'>{post.title}</h1>
                                        <p className="year text-sm italic">{post.company}</p>
                                    </div>
                                </div>

                            ))
                            }
                        </div>
                    </div>
                    <div className="col-span-6 not-lg:col-span-12">
                        <div className="card">
                            <div className="card-heading text-2xl font-semibold border-b border-gray-300 pb-5 mb-5 flex gap-4 not-lg:text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fe9a00" className="size-8 educ-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>

                                Work Experience
                            </div>
                            {job_details.experience.map((post) => (
                                <div className="card-details">
                                    <div className="card-labels">
                                        <p className="year">{post.year_start} - {post.year_end}</p>
                                        <h1 className='university font-semibold text-xl'>{post.company}</h1>
                                        <p className="program">{post.ocupation}</p>
                                    </div>
                                </div>

                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;