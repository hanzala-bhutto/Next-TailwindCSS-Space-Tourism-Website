
export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
        <main className='min-h-screen flex flex-col items-center justify-between pl-40 pr-48 bg-destination bg-cover text-white overflow-y-hidden'>
          {children}
        </main>
        </>
  )
}
