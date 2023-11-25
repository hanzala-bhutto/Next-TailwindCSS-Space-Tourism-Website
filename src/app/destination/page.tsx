'use client';

import {barlowCond, bellefair} from "@/fonts/fonts";
import { useState } from "react";
import {PlanetDescription} from "@/components";

interface Planet {
    index: number;
    name: string;
    description: string;
    distance: string;
    travelTime: string;
    image: string;
}


export default function Destination() {

    const [tab,setTab] = useState(0);

    const planet = [
        {
            index: 0,
            name: "Moon",
            description: "cras aliquet varius magna, non porta ligula feugiat eget. fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",
            distance: "384,400 KM",
            travelTime: "3 DAYS",
            image: "/assets/destination/image-moon.png"
        },
        // mars description
        {
            index : 1,
            name: "Mars",
            description: "cras aliquet varius magna, non porta ligula feugiat eget. fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",
            distance: "225,300,000 KM",
            travelTime: "9 MONTHS",
            image: "/assets/destination/image-mars.png"
        },
        // Europa Object
        {
            index: 2,
            name: "Europa",
            description: "cras aliquet varius magna, non porta ligula feugiat eget. fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",
            distance: "628,300,000 KM",
            travelTime: "3 YEARS",
            image: "/assets/destination/image-europa.png"
        },
        // Titan Object
        {
            index: 3,
            name: "Titan",
            description: "cras aliquet varius magna, non porta ligula feugiat eget. fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",
            distance: "1,200,000,000 KM",
            travelTime: "7 YEARS",
            image: "/assets/destination/image-titan.png"
        },
      ]

        const changeTab = (index: number) => {
          setTab(index);
        } 

    return (
        <div className="min-h-screen w-full flex flex-col justify-end gap-8">
          <h1 className={`uppercase text-center lg:text-left text-xl lg:text-3xl tracking-widest ${barlowCond.className}`}><span className="font-bold text-gray-600 mr-4">01</span> pick your destination</h1>
          <section className="w-full flex flex-col lg:flex-row lg:pl-20 justify-between gap-8 items-center mb-14">
            <PlanetDescription planet={planet[tab]} changeTab={changeTab}/>
          </section>
        </div>
    )
  }
  