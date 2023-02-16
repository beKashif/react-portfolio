import React from 'react'

const Projects = () => {
  return (
    <>
    <div id='projects' className='text-center bg-slate-800 text-slate-50 min-h-screen'>
        <div className='justify-center text-center grid lg:grid-cols-2 grid-cols-1 gap-2'>
            <a href='https://www.convertingapp.com' target="_blank">
                <div className='bg-cover bg-center h-64 rounded-xl bg-img1 m-20 md:m-12 p-24 shadow-2xl shadow-slate-900'>
                    <h2 className='text-left text-slate-200 rounded-lg bg-slate-800 p-4 text-lg md:text-2xl'>
                        ConvertingApp
                    </h2>
                    <p className='text-left text-slate-200 rounded-lg bg-slate-800 p-4'>
                    that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .
                    </p>
                </div>
            </a>
            <a href='https://softokit.com' target="_blank">
                <div className='bg-cover bg-center h-64 rounded-xl bg-img2 m-20 md:m-12 p-24 shadow-2xl shadow-slate-900'>
                    <h2 className='text-left text-slate-200 rounded-lg bg-slate-800 p-4 text-lg md:text-2xl'>
                        SoftoKit
                    </h2>
                    <p className='text-left text-slate-200 rounded-lg bg-slate-800 p-4'>
                    that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .
                    </p>
                </div>
            </a>

        </div>
    </div>
    </>
  )
}

export default Projects