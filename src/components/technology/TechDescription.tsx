import Image from "next/image";
import {barlowCond, bellefair} from "@/fonts/fonts";
import { TechProps } from "@/types";

export const TechDescription : React.FC<TechProps> = ({technology, changeTab}) => {

    return (
        <>
            <article className="lg:w-[700px] lg:h-[350px] flex flex-col gap-10 lg:flex-row justify-center items-center lg:gap-20">

              <ul className={`flex flex-row mt-10 lg:mt-0 lg:flex-col gap-8 uppercase tracking-widest ${barlowCond.className} text-lg`}>
                <li onClick={()=>changeTab(0)} className={`px-5 md:px-7 py-2 md:py-4 md:text-4xl text-center rounded-full cursor-pointer border-2 border-spaceBlue hover:border-white ${technology.index==0?'bg-white text-black':'text-spaceBlue'}`}>1</li>
                <li onClick={()=>changeTab(1)} className={`px-5 md:px-7 py-2 md:py-4 md:text-4xl text-center rounded-full cursor-pointer border-2 border-spaceBlue hover:border-white ${technology.index==1?'bg-white text-black':'text-spaceBlue'}`}>2</li>
                <li onClick={()=>changeTab(2)} className={`px-5 md:px-7 py-2 md:py-4 md:text-4xl text-center rounded-full cursor-pointer border-2 border-spaceBlue hover:border-white ${technology.index==2?'bg-white text-black':'text-spaceBlue'}`}>3</li>
              </ul>

              <div className="text-center lg:text-left">
                <h1 className="uppercase text-spaceBlue tracking-wide">The terminology...</h1>
                <h2 className={`mb-4 lg:mb-0 text-2xl md:text-6xl uppercase font-bold ${bellefair.className}`}>{technology.name}</h2>
                <p className="text-spaceBlue mb-4">{technology.description}</p>
              </div>
            </article>
            <article className="lg:w-[500px] lg:h-[400px] flex items-center justify-center">
              <Image className="w-full lg:object-fill lg:h-full lg:w-full" src={technology.image} alt="destination" width={500} height={500} />
            </article>        
          </>
    )

}
