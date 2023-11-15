import Image from "next/image";

const Navigation = () => {
    return (
        <section className="fixed top-10 pl-14 w-full flex flex-row justify-between items-center text-white">
        {/* <div className=""> */}
            <Image src="./assets/shared/logo.svg" alt="logo" width={80} height={40} />
        {/* </div> */}
        {/* <div className=" border-b-2 border-white"> */}
            <hr className="relative ml-4 left-10 z-10 w-[50%]" />
        {/* </div> */}
        <div className=" bg-slate-700/20 backdrop-blur-xl py-8 w-[85%]">
            <ul className="flex flex-row justify-evenly pl-12 pr-32">
                <li><span>00</span> Home</li>
                <li><span>01</span> Destination</li>
                <li><span>02</span> Crew</li>
                <li><span>03</span> Technology</li>
            </ul>
        </div>
        </section>
    )
}

export default Navigation;