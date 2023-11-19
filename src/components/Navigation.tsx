"use client";
import { usePathname } from 'next/navigation';
import { barlowCond } from '@/fonts/fonts';
import Image from "next/image";
import Link from 'next/link';

const Navigation = () => {

    const currentRoute = usePathname();

    return (
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
    )
}

export default Navigation;