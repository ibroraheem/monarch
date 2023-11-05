import React from "react";

const Form = () => {
  return (
    <div className="relative w-full md:w-[996px] bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 absolute top-5 md:top-32 left-5 md:left-82">
        <div className="self-stretch max-w-xs flex flex-col items-start gap-4 md:flex-[0_0_auto]">
          <div className="font-medium-text-regular text-primary-color text-sm md:text-lg text-center">
            Check-In:
          </div>
          <div className="relative w-[226px] h-16 bg-[#f0f0f0] rounded-lg border border-solid border-[#f1f1f1] overflow-hidden flex items-center">
            <div className="text-[#afafaf] text-sm md:text-lg ml-3">
              Check-In Date
            </div>
            <img className="w-6 h-6 absolute top-3 right-3" alt="Calendar" src="calendar.svg" />
          </div>
          <input
            type="date"
            className="w-[226px] h-10 mt-3 text-sm md:text-lg border border-solid border-[#f1f1f1] rounded-lg"
            placeholder="Select Check-In Date"
          />
        </div>
        <div className="self-stretch max-w-xs flex flex-col items-start gap-4 md:flex-[0_0_auto]">
          <div className="font-medium-text-regular text-primary-color text-sm md:text-lg text-center">
            Check-Out:
          </div>
          <div className="relative w-[226px] h-16 bg-[#f0f0f0] rounded-lg border border-solid border-[#f1f1f1] overflow-hidden flex items-center">
            <div className="text-[#afafaf] text-sm md:text-lg ml-3">
              Check-Out Date
            </div>
            <img className="w-6 h-6 absolute top-3 right-3" alt="Calendar" src="image.svg" />
          </div>
          <input
            type="date"
            className="w-[226px] h-10 mt-3 text-sm md:text-lg border border-solid border-[#f1f1f1] rounded-lg"
            placeholder="Select Check-Out Date"
          />
        </div>
        <div className="self-stretch max-w-xs flex flex-col items-start gap-4 md:flex-[0_0_auto]">
          <div className="font-medium-text-regular text-primary-color text-sm md:text-lg text-center">
            Number of Guests
          </div>
          <div className="relative w-[226px] h-16 bg-[#f0f0f0] rounded-lg border border-solid border-[#f1f1f1] overflow-hidden flex items-center">
            <div className="text-[#afafaf] text-sm md:text-lg ml-3">
              Number of Guests
            </div>
            <img className="w-6 h-6 absolute top-3 right-3" alt="Vuesax linear arrow" src="arrow-down.png" />
          </div>
          <input
            type="number"
            className="w-[226px] h-10 mt-3 text-sm md:text-lg border border-solid border-[#f1f1f1] rounded-lg"
            placeholder="Enter Number of Guests"
          />
        </div>
      </div>
      <div className="flex w-36 h-10 items-center justify-center gap-2 absolute top-40 md:top-141 left-28 md:left-390 bg-secondary-color rounded-lg">
        <div className="font-medium-text-medium text-white text-sm md:text-lg text-center">
          Check Availability
        </div>
      </div>
    </div>
  );
};

export default Form;
