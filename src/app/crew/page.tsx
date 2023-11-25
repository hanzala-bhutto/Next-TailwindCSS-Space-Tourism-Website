'use client';

import {barlowCond, bellefair} from "@/fonts/fonts";
import { useState } from "react";
import {CrewDescription} from "@/components";

export default function Crew() {

    const [tab,setTab] = useState(0);

    const crew = [
        {
          index: 0,
          designation: "COMMANDER",
          name:"DOUGLAS HURLEY",
          description:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          image:"/assets/crew/image-douglas-hurley.png",
        },
        {
          index: 1,
          designation: "MISSION SPECIALIST",
          name:"MARK SHUTTLEWORTH",
          description:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          image:"/assets/crew/image-mark-shuttleworth.png",
        },
        {
          index: 2,
          designation: "Pilot",
          name:"VICTOR GLOVER",
          description:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
          image:"/assets/crew/image-victor-glover.png",
        }
      ]

        const changeTab = (index: number) => {
          setTab(index);
        } 

    return (
        <div className="lg:min-h-screen w-full flex flex-col justify-end gap-8">
          <h1 className={`uppercase text-xl text-center md:text-3xl lg:text-left tracking-widest ${barlowCond.className}`}><span className="font-bold text-gray-600 mr-4">02</span> meet your crew</h1>
          <section className="w-full flex flex-col-reverse lg:flex-row justify-between items-center mb-14">
            <CrewDescription crew={crew[tab]} changeTab={changeTab}/>
          </section>
        </div>
    )
  }
  