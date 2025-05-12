import React from 'react'
import Image from "next/image";
import { assets } from '@/assets/assets';


const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='profile_img' width={128} height={128} className='rounded-full'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'> Hi! I am Tanvir <Image src={assets.hand_icon} alt='hand_icon' width={24} height={24}/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            full stack developer
        </h1>
        <p className='max-w-2xl mx-auto font-ovo'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam omnis culpa accusantium? Corporis magnam ab cupiditate harum dolorem, sunt ullam laboriosam nemo! Id officiis cupiditate natus illum. Ut, neque dolor.
        </p>
        <div  className='flex  flex-col sm:flex-row items-center gap-4 mt-4 '>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                Contact me <Image src={assets.right_arrow_white} alt='profile_img' width={16} height={16} className='rounded-full'/>
            </a>
            <a href="/sample-resume.pdf" download className='px-10 py-3 border  rounded-full border-gray-500 flex items-center gap-2'>
                My resume <Image src={assets.download_icon} alt='profile_img' width={16} height={16} className='rounded-full'/>
            </a>
            
        </div>
    </div>
  )
}

export default Header