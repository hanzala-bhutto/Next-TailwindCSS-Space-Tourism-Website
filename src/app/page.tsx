import { bellefair } from "@/fonts/fonts"

export default function Home() {
  return (
        <div className="min-h-screen w-full flex items-end">
          <section className="w-full flex flex-row justify-between mb-32">
            <article className="w-[390px]">
              <h1 className="uppercase text-2xl tracking-wider text-slate-100 text-spaceBlue">so, you want to travel to</h1>
              <h1 className={`uppercase font-thin text-[8.3rem] leading-[10rem] mb-8 ${bellefair.className}`}>Space</h1>
              <p className=" text-spaceBlue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <article className="flex items-end">
              <button className={`text-slate-800 font-bellefair text-3xl uppercase p-[4.2rem] py-28 rounded-full bg-white hover:animate-pulse focus:animate-pulse ${bellefair.className}`}>Explore</button>
            </article>
          </section>
        </div>
  )
}
