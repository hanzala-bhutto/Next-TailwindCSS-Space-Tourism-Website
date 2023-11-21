
export default function TechnologyLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <>
          <main className='min-h-screen flex flex-col items-center justify-between pl-40 bg-technology bg-cover text-white overflow-y-hidden'>
            {children}
          </main>
          </>
    )
  }
  