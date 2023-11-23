import { bellefair } from "@/fonts/fonts"
import Link from "next/link"

export default function Home() {
  return (
        <div className="min-h-screen w-full flex items-end">
          <section className="w-full flex flex-col gap-8 items-center justify-center mb-10 md:flex-row md:gap-2 md:justify-between md:mb-32">
            <article className="w-full text-center md:w-[390px] md:text-left">
              <h1 className="uppercase text-lg tracking-widest md:tracking-wider text-spaceBlue">so, you want to travel to</h1>
              <h1 className={`uppercase font-thin text-8xl md:text-[8.3rem] md:leading-[10rem] xl:mb-8 ${bellefair.className}`}>Space</h1>
              <p className=" text-spaceBlue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <article className="flex items-end">
              <Link href="/destination"><button className={`text-slate-800 font-bellefair text-3xl uppercase p-[4.2rem] py-28 rounded-full bg-white hover:animate-pulse focus:animate-pulse ${bellefair.className}`}>Explore</button></Link>
            </article>
          </section>
        </div>
  )
}
