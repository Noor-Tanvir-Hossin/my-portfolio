"use client";
import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef=useRef();
    const openMenu=()=>{
        sideMenuRef.current.style.transform="translateX(-16rem)"
    }
    const closeMenu=()=>{
        sideMenuRef.current.style.transform="translateX(16rem)"
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY >50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]" >
        <Image
          src={assets.header_bg_color}
          alt="bg-image"
          width={20}
          height={30}
          className="w-full"
        />
      </div>
      <nav className= {`w-full fixed px-5 lg:px-8 xl:px[8%]  py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white-500/50  backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image
            src={assets.logo}
            alt="image"
            width={112}
            height={40}
            className="cursor-pointer mr-14"
          />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" :"bg-white-500/50 shadow-sm"}`} >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
        <button>
            <Image src={assets.moon_icon} alt="moon" width={24} height={24} />
        </button>

          <a
            href="#Contact"
            className="hidden lg:flex items-center gap-3 px-10 py2.5 border border-gray-500 rounded-full ml-4"
          >
            {" "}
            Contact{" "}
            <Image src={assets.arrow_icon} alt="icon" width={12} height={5} />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="hamburger menu" width={24} height={24} />
        </button>

        </div>
        {/*------- mobile menu ------ */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
            <div className="absolute right-6 top-6 " onClick={closeMenu}>
                <Image src={assets.close_black} alt="" width={20} height={20}/>
            </div>
        <li>
            <a href="#top"  onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About me</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>My Work</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact Me</a>
          </li> 
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
