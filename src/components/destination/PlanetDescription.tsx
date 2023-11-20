import Image from "next/image";
import {barlowCond, bellefair} from "@/fonts/fonts";
import { PlanetProps } from "@/types";

export const PlanetDescription : React.FC<PlanetProps> = ({planet, changeTab}) => {

    return (
        <>
            <article className="w-[400px] h-[300px] mb-10">
              <Image src={planet.image} alt="destination" width={400} height={300} />
            </article>
            <article className="w-[500px] flex flex-col gap-4">

              <ul className={`flex flex-row gap-8 uppercase tracking-widest ${barlowCond.className} text-lg`}>
                <li onClick={()=>changeTab(0)} className={`py-1 cursor-pointer hover:border-b-4 ${planet.index==0?'text-white border-b-4':'text-spaceBlue'}`}>Moon</li>
                <li onClick={()=>changeTab(1)} className={`py-1 cursor-pointer hover:border-b-4 ${planet.index==1?'text-white border-b-4':'text-spaceBlue'}`}>Mars</li>
                <li onClick={()=>changeTab(2)} className={`py-1 cursor-pointer hover:border-b-4 ${planet.index==2?'text-white border-b-4':'text-spaceBlue'}`}>Europa</li>
                <li onClick={()=>changeTab(3)} className={`py-1 cursor-pointer hover:border-b-4 ${planet.index==3?'text-white border-b-4':'text-spaceBlue'}`}>Titan</li>
              </ul>

              <h2 className={`text-8xl uppercase font-bold ${bellefair.className}`}>{planet.name}</h2>
              <p className="text-spaceBlue mb-4">{planet.description}</p>
              <hr className=" border-gray-600 mb-4"/>
              <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                    <h3 className="text-spaceBlue uppercase text-sm">AVG. DISTANCE</h3>
                    <p className="text-3xl">{planet.distance}</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-spaceBlue uppercase text-sm">EST. TRAVEL TIME</h3>
                    <p className="text-3xl">{planet.travelTime}</p>
                </div>

              </div>
            </article>
        </>
    )

}
