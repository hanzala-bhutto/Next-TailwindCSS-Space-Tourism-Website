
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
        <main className='min-h-screen flex flex-col items-center justify-between bg-homeMobile pl-2 pr-2 md:px-10 lg:pl-40 lg:pr-48 md:bg-home bg-cover text-white'>
          {children}
        </main>
        </>
  )
}
