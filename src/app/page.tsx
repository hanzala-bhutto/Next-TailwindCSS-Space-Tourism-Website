
export default function Home() {
  return (
        <div className="min-h-screen w-full flex items-end">
          <section className="w-full flex flex-row justify-between mb-32">
            <article className="w-[440px]">
              <h1 className="uppercase text-lg font-thin text-slate-100">so, you want to travel to</h1>
              <h1 className="uppercase font-thin text-[9.5rem] leading-[10rem] mb-8">Space</h1>
              <p className="text-slate-300">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <article className="flex items-end">
              <button className="text-slate-800 text-3xl uppercase py-28 p-[4.5rem] rounded-full bg-white hover:animate-pulse focus:animate-pulse">Explore</button>
            </article>
          </section>
        </div>
  )
}
