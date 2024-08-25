const HeroPage = () => {
  return (
      <div className="mt-20 flex items-center justify-center bg-white space-x-0">
      <div>
        <h1 className="text-5xl py-5">Hi, I'm Joy </h1>
        <h2 className="text-6xl mb-3">Front<span className="text-[#9f53fe]">-end</span> <span className="bg-gradient-to-r from-[#9f53fe] to-">Developer</span> </h2>
        <p className="w-[60%] text-gray-500">With my <span className="text-gray-300">1 year</span> of experience as an experienced <span className="text-gray-300">Front-End Software Engineer</span>. I have been able to bring to life a lot of projects because of my get-it-done attitude to work.</p>
        <div className="py-5 flex items-center gap-5">
          <button className="bg-white text-black py-3 px-4 rounded-full text-sm font-semibold ">Download CV</button>
           <button className="text-sm text-gray-400 font-semibold hover:bg-gray-700 py-3 px-4 rounded-full hover:text-white">See experiences</button>
        </div>
      </div>

        <div className="rounded-full bg-"><img src="https://i.ibb.co/V2qYrxR/My-Image2.jpg" alt="my profile picture" className=" px-4 h-50 w-50" /></div>
    
      </div>
  )
}

export default HeroPage