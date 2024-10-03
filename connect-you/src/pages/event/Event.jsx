import React from "react";

const Event = () => {
  return (
    <div>
      {/* Event Page Banner */}

      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from0% to-[#FCFCFC] to-100%">
        
        <div className="py-48 md:flex felx-col  justify-center items-center gap-8">
          
          
          {/* Text Part*/}
          <div className="text-center space-y-7 px-4">
            <h2 className="primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Find from your interest <span className="text-orange">Event </span>
            </h2>

            <p className="primary text-xl text-[#4A4A4A]">
              Sit back and relax while we handle all the details for you!
            </p>
            <div className="flex space-x-1">
              <button className="btn flex-auto md:flex-initial bg-orange px-8 py-3 font-semibold text-white rounded-full">
                Create Event
              </button>
              <button className="btn flex-auto md:flex-initial bg-transparent px-8 py-3 font-semibold text-black rounded-full">
                Find Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
