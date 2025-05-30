import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from "next/image";



const About = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 '>
            <div className='w-64 sm:w-80 rounded-3xl max-w-2xl '>
                <Image src={assets.user_image} alt='user_image'  className='w-full rounded-3xl object-cover  ' />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-ovo'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex assumenda suscipit quisquam aliquid laudantium iusto vel minus adipisci, perspiciatis veniam aperiam accusantium sed necessitatibus corporis soluta repudiandae incidunt eum delectus.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    {infoList.map(({icon, iconDark,title, description},idx)=>(
                        <li key={idx} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                            <Image src={icon} alt='icon' className='w-7 mt-3'/>
                            <h3>{title}</h3>
                            <p> {description} </p>
                            
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gray-700 font-ovo'>Tools I Use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {
                        toolsData.map((tool,idx)=>(
                            <li key={idx} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool}  alt='tools' className='w-5 sm:w-7'/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About