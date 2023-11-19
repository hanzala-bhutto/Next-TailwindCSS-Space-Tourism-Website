import {barlowCond, bellefair} from "@/fonts/fonts";
import Image from "next/image";

export default function Destination() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-end gap-8">
          <h1 className={`uppercase text-3xl tracking-widest ${barlowCond.className}`}><span className="font-bold text-gray-600 mr-4">01</span> pick your destination</h1>
          <section className="w-full flex flex-row pl-20 justify-between items-center mb-14">
            <article className="w-[400px] h-[300px] mb-10">
              <Image src="/assets/destination/image-europa.png" alt="destination" width={400} height={300} />
            </article>
            <article className="w-[500px] flex flex-col gap-4">

              <ul className={`flex flex-row gap-8 uppercase tracking-widest ${barlowCond.className} text-lg`}>
                <li className="py-1  text-white border-b-4">Moon</li>
                <li className="py-1  text-spaceBlue ">Mars</li>
                <li className="py-1  text-spaceBlue ">Europa</li>
                <li className="py-1  text-spaceBlue ">Titan</li>
              </ul>

              <h2 className={`text-8xl uppercase font-bold ${bellefair.className}`}>Moon</h2>
              <p className="text-spaceBlue mb-4">cras aliquet varius magna, non porta ligula feugiat eget. fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. </p>
              <hr className=" border-gray-600 mb-4"/>
              <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                    <h3 className="text-spaceBlue uppercase text-sm">AVG. DISTANCE</h3>
                    <p className="text-3xl">384,400 KM</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-spaceBlue uppercase text-sm">EST. TRAVEL TIME</h3>
                    <p className="text-3xl">3 DAYS</p>
                </div>

              </div>
            </article>
          </section>
        </div>
    )
  }
  