
export default function TechnologyLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <>
          <main className='min-h-screen flex flex-col items-center justify-between pt-20 pl-10 pr-10 lg:pt-0 lg:pl-40 bg-technologyMobile md:bg-technology bg-cover text-white overflow-y-hidden'>
            {children}
          </main>
          </>
    )
  }
  