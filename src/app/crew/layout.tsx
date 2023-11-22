
export default function CrewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
        <main className='min-h-screen flex flex-col items-center justify-between pl-40 pr-48 bg-crew bg-cover text-white overflow-y-hidden'>
          {children}
        </main>
        </>
  )
}
