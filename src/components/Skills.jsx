import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { TbBrandJavascript, TbBrandBootstrap, TbBrandTailwind, TbBrandNextjs } from 'react-icons/tb'
import { RiReactjsLine } from 'react-icons/ri'
import { GrNode } from 'react-icons/gr'
import { SiExpress, SiMongodb, SiMysql, SiRedux } from 'react-icons/si'


const Skills = () => {
  return (
    <>
    <div id='skills' className='text-center bg-slate-800 text-slate-50'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-20 p-10 pt-20 pb-40 items-center w-full'>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <AiOutlineHtml5 className="h-20 w-20"/>
            </div>
            
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <IoLogoCss3 className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <TbBrandJavascript className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <TbBrandBootstrap className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <TbBrandTailwind className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <RiReactjsLine className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <TbBrandNextjs className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <GrNode className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <SiExpress className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <SiMongodb className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <SiMysql className="h-20 w-20"/>
            </div>
            <div className='bg-slate-600 h-28 w-28 pl-4 pt-4 md:h-40 md:w-40 sm:h-28 sm:w-28 rounded-2xl sm:pt-4 sm:pl-4 md:pt-10  md:pl-10 hover:animate-pulse hover:bg-slate-700 transition-all duration-300 shadow-2xl shadow-slate-900 '>
                <SiRedux className="h-20 w-20"/>
            </div>

        </div>
    </div>
    </>
  )
}

export default Skills