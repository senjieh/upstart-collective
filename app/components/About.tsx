function About() {
    return <div className="border-gray-400 mt-28">
          <div className="flex place-content-center w-full">
            <div className="flex flex-col items-center justify-between">
              <div className="flex flex-col lg:flex-row w-4/5 m-2.5 items-center justify-between">
                <div className="flex flex-col justify-right">
                  <h2 className="about-h2-upper text-black text-xl w-full mx-5 lg:w-full text-center text-3xl lg:text-4xl xl:text-5xl">What exactly is</h2>
                  <h2 className="about-h2-bottom text-black text-3xl w-full mx-5 lg:w-full text-center text-5xl lg:text-6xl xl:text-7xl">Upstart?</h2>
                </div>
                <p className="w-full lg:w-1/2 text-2xl leading-7">Much more than a space, it is also both a new experiment and a collaboration years in the making. Through the continued efforts of startup leaders in our city (and a generous contribution from our partner, GRAYBOX), UpStart Collective is now a highly subsidized creative space open to founders, funders, tinkerers, creators, doers, and idealists.  </p>
              </div>

              <div className="flex flex-row w-full lg:w-1/2 my-2.5 items-center">
                <div className="flex w-full mx-10 lg:w-1/2 justify-center">
                  <img src="/images/assets/arrow right.png" alt="View from Upstart" className="w-3/5 mt-10" />
                </div>


                <div className="flex w-1/2">
                  <button className="button-large">Join Now</button>
                </div>
                
              </div>

            </div>
          </div>
        </div>
}
  
export default About;