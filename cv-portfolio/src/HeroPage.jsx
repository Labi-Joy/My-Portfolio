const HeroPage = () => {
  return (
      <div className="mt-20 flex items-center justify-center">
      <div>
        <h1 className="text-5xl py-5">Hi, I'm Joy </h1>
        <p className="w-[60%] text-gray-500">With my <span className="text-gray-300">1 year</span> of experience as an experienced <span className="text-gray-300">Front-End Software Engineer</span>. I have been able to bring to life a lot of projects because of my get-it-done attitude to work.</p>
        <div className="py-5 flex items-center gap-5">
          <button className="bg-white text-black py-3 px-4 rounded-full text-sm font-semibold ">Download CV</button>
           <button className="text-sm text-gray-400 font-semibold hover:bg-gray-700 py-3 px-4 rounded-full hover:text-white">See experiences</button>
        </div>
      </div>

        <img src="https://i.ibb.co/xqVJfTn/IMG-20240629-WA0051.jpg" alt="my profile picture" className=" rounded-full w-80 h-[300px] px-4" />
    
      </div>
  )
}

export default HeroPage