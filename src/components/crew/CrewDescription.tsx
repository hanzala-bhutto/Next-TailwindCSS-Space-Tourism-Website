import Image from "next/image";
import {barlowCond, bellefair} from "@/fonts/fonts";
import { CrewProps } from "@/types";

export const CrewDescription : React.FC<CrewProps> = ({crew, changeTab}) => {

    return (
        <>
            <article className="lg:w-[600px] h-full flex flex-col justify-center items-center lg:items-start gap-4">

              <h2 className={`text-xl md:text-4xl uppercase font-bold text-spaceBlue ${bellefair.className}`}>{crew.designation}</h2>
              <h2 className={`text-2xl md:text-6xl uppercase font-bold ${bellefair.className}`}>{crew.name}</h2>
              <p className="text-spaceBlue mb-4">{crew.description}</p>

            <div className="mt-10 lg:mt-auto order-first lg:order-none">
              <ul className={`flex flex-row justify-center md:justify-start gap-8 uppercase tracking-widest ${barlowCond.className} text-lg`}>
                <li onClick={()=>changeTab(0)} className={`py-[8px] px-[10px] rounded-full cursor-pointer hover:bg-gray-400 ${crew.index==0?'bg-white border-b-4':'bg-gray-600'}`}></li>
                <li onClick={()=>changeTab(1)} className={`py-[8px] px-[10px] rounded-full cursor-pointer hover:bg-gray-400 ${crew.index==1?'bg-white border-b-4':'bg-gray-600'}`}></li>
                <li onClick={()=>changeTab(2)} className={`py-[8px] px-[10px] rounded-full cursor-pointer hover:bg-gray-400 ${crew.index==2?'bg-white border-b-4':'bg-gray-600'}`}></li>
              </ul>
            </div>
            </article>

            <article className="lg:w-[400px] lg:h-[400px]">
              <Image className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]" src={crew.image} alt="destination" width={400} height={300} />
            </article>

        </>
    )

}
