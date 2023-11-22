import Image from "next/image";
import {barlowCond, bellefair} from "@/fonts/fonts";
import { TechProps } from "@/types";

export const TechDescription : React.FC<TechProps> = ({technology, changeTab}) => {

    return (
        <>
            <article className="w-[700px] h-[350px] flex flex-row justify-center items-center gap-20">

              <ul className={`flex flex-col gap-8 uppercase tracking-widest ${barlowCond.className} text-lg`}>
                <li onClick={()=>changeTab(0)} className={`px-7 py-4 text-4xl text-center rounded-full cursor-pointer border-2 border-spaceBlue hover:border-white ${technology.index==0?'bg-white text-black':'text-spaceBlue'}`}>1</li>
                <li onClick={()=>changeTab(1)} className={`px-7 py-4 text-4xl text-center rounded-full cursor-pointer border-2 border-spaceBlue hover:border-white ${technology.index==1?'bg-white text-black':'text-spaceBlue'}`}>2</li>
                <li onClick={()=>changeTab(2)} className={`px-7 py-4 text-4xl text-center rounded-full cursor-pointer border-2 border-spaceBlue hover:border-white ${technology.index==2?'bg-white text-black':'text-spaceBlue'}`}>3</li>
              </ul>

              <div className="">
                <h1 className="uppercase text-spaceBlue tracking-wide">The terminology...</h1>
                <h2 className={`text-6xl uppercase font-bold ${bellefair.className}`}>{technology.name}</h2>
                <p className="text-spaceBlue mb-4">{technology.description}</p>
              </div>
            </article>
            <article className="w-[500px] h-[400px] flex items-center justify-center">
              <Image className="object-fill h-full w-full" src={technology.image} alt="destination" width={500} height={500} />
            </article>        
          </>
    )

}
