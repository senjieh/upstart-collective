import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center">
        <div className="text-xl font-bold">Upstart Collective</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-700">about</a>
          <a href="#" className="text-gray-700">join</a>
        </nav>
      </header>
      <main className="mt-12">
        <div className="flex justify-between items-center">
          <div className="w-1/3 bg-white -mr-52 py-40 px-20 z-0">
            <h1 className="text-4xl mb-4">Much more than just a space.</h1>
            <p className="text-xl mb-4">A modern shared space for startup leaders and their teams.</p>
            <button className="bg-black text-white px-6 py-3">Apply</button>
          </div>
          <div className='w-4/5'>
            <img src="graybox-patio.jpg" alt="View from Upstart" className="w-full" />
          </div>
        </div>
        <section className="mt-12">
          <div className='flex justify-between items-center m-auto'>
            <div>
              <h2 className="text-3xl mb-6">Connect.</h2>
              <h2 className="text-3xl mb-6">Learn.</h2>
              <h2 className="text-3xl mb-6">Discover.</h2>
              <h2 className="text-3xl mb-6">Expand.</h2>
            </div>
            
            <p className="text-lg mb-6">Much more than a space, it is also both a new experiment and a collaboration years in the making...</p>
          </div>

          <div className="flex space-x-4">
            <img src="graybox-patio.jpg" alt="View from Upstart" className="w-1/3" />
            <img src="graybox-patio.jpg" alt="View from Upstart" className="w-1/3" />
            <img src="graybox-patio.jpg" alt="View from Upstart" className="w-1/3" />
          </div>
        </section>
      </main>
    </div>
  );
}
