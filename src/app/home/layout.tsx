
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
        <main className='min-h-screen flex flex-col items-center justify-between pl-40 pr-48 bg-home bg-cover text-white'>
          {children}
        </main>
        </>
  )
}
