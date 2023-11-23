
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
        <main className='min-h-screen flex flex-col items-center justify-between bg-homeMobile pl-2 pr-2 md:pl-40 md:pr-48 md:bg-home bg-cover text-white'>
          {children}
        </main>
        </>
  )
}
