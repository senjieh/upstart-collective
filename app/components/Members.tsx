function Members() {
    return <div className="border-gray-400 mt-28">
          <div className="flex place-content-center algin w-full">
            <div className="w-4/5 mr-20">
              <div className="flex flex-row h-3/5 items-center h-full">
                <div className="flex flex-col mx-2.5 w-1/4">
                  <div>
                    <img src="/images/olymp-mills/2.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
                  </div>
                </div>
                <div className="flex flex-col mx-2.5 w-1/4">
                  <div className="pb-5">
                    <img src="/images/olymp-mills/3.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
                  </div>
                </div>
                <div className="flex flex-col mx-2.5 w-1/4">
                  <div>
                    <img src="/images/olymp-mills/6.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
                  </div>
                </div>
                <div className="flex flex-col mx-2.5 w-1/4">
                  <div>
                    <img src="/images/olymp-mills/8.jpg" alt="View from Upstart" className="w-full h-full rounded-3xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-2/5 ">
              <div className="flex flex-col justify-between">
                <h2 className="members-h2 text-4xl lg:text-5xl xl:text-6xl my-5">Some of our members !</h2>
                <p className="text-black text-2xl leading-7 my-5">Our community is awesome. Check out the list. Maybe you’ll be on it soon!</p>
                <div className="flex my-5">
                  <button className="button-large">See our Members List</button>
                </div>              
              </div>

            </div>
          </div>
        </div>
}
  
export default Members;