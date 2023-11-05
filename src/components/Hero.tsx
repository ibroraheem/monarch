import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-0 my-0">
      <div className="absolute inset-0 z-0">
        <div className="h-full">
          <img
            src="HeroBg2.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative z-10 p-10 sm:p-16 md:p-20 lg:p-24 xl:p-32">
        <h1 className="text-4xl sm:text-5xl text-center md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4">
          WELCOME TO MONARCHS LUXURY PALACE HOTEL
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white text-center py-8">
          A Haven of Exquisite Comfort and Style. Experience Hospitality at its
          Finest
        </h3>
      </div>
    </div>
  )
}

export default Hero
