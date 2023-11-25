'use client';

import {barlowCond, bellefair} from "@/fonts/fonts";
import { useState } from "react";
import {TechDescription} from "@/components";

interface Tech {
  index : number;
  name: string;
  description: string;
  image: string;
}


export default function Technology() {

    const [tab,setTab] = useState(0);

    const technology = [
        // Launch Vehicle
        {
          index: 0,
          name: "Launch Vehicle",
          description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          image: "/assets/technology/image-launch-vehicle-landscape.jpg"          
        },
        // Spaceport
        {
          index: 1,
          name: "Spaceport",
          description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          image: "/assets/technology/image-spaceport-landscape.jpg"          
        },
        // Space Capsule
        {
          index: 2,
          name: "Space Capsule",
          description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          image: "/assets/technology/image-space-capsule-landscape.jpg"          
        }
      ]

        const changeTab = (index: number) => {
          setTab(index);
        } 

    return (
        <div className="lg:min-h-screen w-full flex flex-col justify-end gap-8">
          <h1 className={`uppercase text-xl text-center md:text-3xl lg:text-left tracking-widest ${barlowCond.className}`}><span className="font-bold text-gray-600 mr-4">03</span> Space Launch 101</h1>
          <section className="w-full flex flex-col-reverse lg:flex-row lg:pl-20 justify-between items-center mb-14">
            <TechDescription technology={technology[tab]} changeTab={changeTab}/>
          </section>
        </div>
    )
  }
  