function Pricing() {
    return <div className="location-div bg-gray-100 rounded-3xl mt-28 flex flex-col p-5">
      <div className="flex flex-row justify-between h-1/5 my-5">
          <div className="flex flex-row items-end mb-5 ml-5 justify-between">
            <div className="w-2/5 mx-10 my-5">
              <h3 className="text-4xl lg:text-5xl text-black">Unlike growing a business, pricing for <span className="text-green-400">Upstart </span>is simple</h3>

            </div>
            <div className="w-1/4 mx-10 my-5">
              <p className="text-lg lg:text-xl text-gray-400">We understand that growing a business is hard so we made our process as simple as possible. No hassle, no lock in, no bullshit.</p>
            </div>
              
          </div>
      </div>
      <div className="flex flex-row h-4/5">
        <div className="flex flex-col mx-2.5 w-5/12">
          <div className="flex flex-col h-full bg-white p-10 rounded-3xl p-15 justify-between">
            <div>
              <div className="border-b-2">
                <h3 className="text-black text-3xl mb-5">Dedicated Desk</h3>
              </div>
              <p className="text-black text-2xl">If you just want someplace to land on occasion then you probably want a hot desk. Stop by, find an available desk, and work from there for the day. </p>
              
            </div>
            <h2 className="text-black text-4xl">100$/month</h2>
          </div>
        </div>
        <div className="flex flex-col mx-2.5 w-5/12">
          <div className="flex flex-col h-full bg-black p-10 rounded-3xl p-15 justify-between">
            <div>
              <div className="border-b-2">
                <h3 className="text-white text-3xl mb-5">Dedicated Desk</h3>
              </div>
              <p className="text-white text-2xl">If you just want someplace to land on occasion then you probably want a hot desk. Stop by, find an available desk, and work from there for the day. </p>
              
            </div>
            <h2 className="text-4xl">150$/month</h2>
          </div>

        </div>
        <div className="flex flex-col justify-end align-center w-3/12">
          <div className="h-2/5 pb-5 -my-10">
            <img src="/images/assets/plant.png" alt="View from Upstart" className="w-min rounded-3xl" />
          </div>
          <div className="h-3/5 -my-10">
            <img src="/images/assets/desk.png" alt="View from Upstart" className="w-min rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
}
  
export default Pricing;