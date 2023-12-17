function About() {
    return <div className="hero-div border-b border-gray-400 mt-28">
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full space-y-10 m-2.5 items-center">
              <h2 className="hero-h2 text-black text-3xl text-center lg:text-4xl xl:text-7xl">What is <br/>Upstart Collective?</h2>
              <p className="text-center text-black text-2xl leading-10 w-1/3">Much more than a space, it is also both a new experiment and a collaboration years in the making. Through the continued efforts of startup leaders in our city (and a generous contribution from our partner, GRAYBOX), UpStart Collective is now a highly subsidized creative space open to founders, funders, tinkerers, creators, doers, and idealists.  </p>
              <button className="button-large">Join Now</button>
            </div>
          </div>
        </div>
}
  
export default About;