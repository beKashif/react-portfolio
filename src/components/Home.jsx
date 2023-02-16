import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <>
    <div id='home' className='text-center bg-slate-800 text-slate-50 min-h-screen'>
        <div className='overflow-auto pt-40 sm:pt-40 md:pt-32 lg:pt-40 xl:pt-60'>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600'>
                <h1 className='lg:text-8xl md:text-6xl m-2 font-semibold'>
                    Hi, I am Kashif Shehzad
                </h1>
                <p className='text-lg md:text-2xl m-2 font-semibold'>
                   &lt; I am full stack web developer, who loves to build amazing things &gt;
                </p>
                <p className='text-lg md:text-2xl m-2 font-semibold'>
                    <TypeAnimation 
                    sequence={[
                        'I am experienced Full-Stack Web Developer',
                        1000,
                        'I am experienced DataBase Administrater',
                        1000,
                        'I am experienced WordPress Developer',
                        1000,
                        'I am experienced Mobile App Developer',
                        1000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    />
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home