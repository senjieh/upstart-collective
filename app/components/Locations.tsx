function Locations() {
    return <div className="location-div bg-gray-100 rounded-3xl mt-28 flex flex-col p-5">
      <div className="flex flex-row border-b-2 border-white justify-between h-auto my-5">
          <div className="flex flex-row items-end mb-5 ml-5">
              <h3 className="text-4xl lg:text-5xl text-black">Locations</h3>
              <p className="text-2xl text-black">/Portland</p>

              
          </div>
      </div>
      <div className="flex flex-row h-4/5">
        <div className="flex flex-col mx-2.5 w-1/4">
          <div className="h-3/5 pb-5">
            <img src="/images/olymp-mills/1.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
          <div className="h-2/5">
            <img src="/images/olymp-mills/2.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col mx-2.5 w-1/4">
          <div className="h-2/5 pb-5">
            <img src="/images/olymp-mills/3.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
          <div className="h-3/5">
            <img src="/images/olymp-mills/4.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col mx-2.5 w-1/4">
          <div className="h-3/5 pb-5">
            <img src="/images/olymp-mills/5.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
          <div className="h-2/5">
            <img src="/images/olymp-mills/6.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col mx-2.5 w-1/4">
          <div className="h-2/5 pb-5">
            <img src="/images/olymp-mills/7.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
          <div className="h-3/5">
            <img src="/images/olymp-mills/8.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
}
  
export default Locations;