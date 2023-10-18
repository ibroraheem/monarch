import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white py-6 flex justify-between px-10 items-center my-8">
      <div className="h-max flex items-center ">
        <img src="logo.png" className="w-auto" />
        <h1 className="flex flex-col">
          <div className="uppercase text-4xl font-bold">Monarchs</div>
          <div className="uppercase flex items-start">
            <span className="text-xl py-2">Luxury palace</span>{' '}
            <span className="uppercase text-4xl font-bold leading-normal">
              Hotel
            </span>
          </div>
        </h1>
      </div>
      <nav>
        <ul className="flex gap-20">
          <li>
            <a
              href="#"
              className="p-2.5 flex items-center  text-2xl hover:text-amber-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2.5 flex items-center hover:underline      text-2xl hover:text-amber-600"
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2.5 flex items-center hover:underline      text-2xl hover:text-amber-600"
            >
              Hall Booking
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2.5 flex items-center hover:underline      text-2xl hover:text-amber-600"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2.5 flex items-center hover:underline text-2xl hover:text-amber-600"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-amber-600 px-10 py-4 rounded-md text-white hover:bg-white hover:text-amber-600 hover: border-2 hover:border-amber-600">
        Book Now
      </button>
    </header>
  )
}

export default Navbar
