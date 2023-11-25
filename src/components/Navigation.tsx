"use client";
import { usePathname } from 'next/navigation';
import { barlowCond } from '@/fonts/fonts';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {

    const currentRoute = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className='hidden lg:block'>
        <section className={`fixed top-10 pl-14 w-full flex flex-row justify-between items-center text-white text-xl ${barlowCond.className}`}>
        {/* <div className=""> */}
            <Image src="./assets/shared/logo.svg" alt="logo" width={80} height={40} />
        {/* </div> */}
        {/* <div className=" border-b-2 border-white"> */}
            <hr className="relative ml-4 left-10 z-10 w-[50%]" />
        {/* </div> */}
        <div className=" bg-slate-700/20 backdrop-blur-xl  w-[85%]">
            <ul className="flex flex-row justify-evenly pl-12 pr-32">
                <Link href="/home" 
                    className={`py-8 uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/home" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>00</span> Home
                </Link>

                <Link href="/destination" 
                    className={`py-8 font-light uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/destination" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>01</span> Destination
                </Link>

                <Link href="/crew" 
                    className={`py-8 font-light uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/crew" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>02</span> Crew
                </Link>

                <Link href="/technology" 
                    className={`py-8 font-light uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/technology" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>03</span> Technology
                </Link>
            </ul>
        </div>
        </section>        
        </div>
        
        <div className='lg:hidden'>
        <section className={`pl-2 pr-2 fixed top-4 w-full flex flex-row justify-between items-center text-white text-md ${barlowCond.className}`}>
        {/* <div className=""> */}
            <Image src="./assets/shared/logo.svg" alt="logo" width={40} height={40} />

        <button onClick={() => {setIsOpen(!isOpen)}}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256"
            color="fill:#000000;">
            <g fill="#d1dee8" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" className="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g>
            </svg>
        </button>

        <div className={`fixed top-0 -right-[100%] py-8 pl-10 pr-6 bg-slate-700/20 backdrop-blur-xl h-full w-[70%] transform transition-all ${
        isOpen ? 'right-[0%] duration-500' : 'duration-500 -right-[100%]'
      }`}>
            <button onClick={()=> {setIsOpen(false);console.log(isOpen)}} className='float-right text-2xl font-bold mb-10'>X</button>
            <ul className=" clear-right flex flex-col gap-10 tracking-widest">
                <Link href="/home" 
                    className={`uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/home" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>00</span> Home
                </Link>

                <Link href="/destination" 
                    className={`font-light uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/destination" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>01</span> Destination
                </Link>

                <Link href="/crew" 
                    className={`font-light uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/crew" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>02</span> Crew
                </Link>

                <Link href="/technology" 
                    className={`font-light uppercase hover:border-b-4 hover:border-slate-400 ${currentRoute === "/technology" 
                    ? "border-b-4" 
                    : ""}`}>
                    <span className='font-bold mr-[6px]'>03</span> Technology
                </Link>
            </ul>
        </div>
        </section>
        </div>
        </>

    )
}

export default Navigation;