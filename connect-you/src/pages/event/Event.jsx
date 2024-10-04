import React, { useEffect, useState } from "react";

const Event = () => {
    const[event, setEvent] =useState([]);
    const[filteredEvents, setFilteredEvents] =useState([]);
    const[selectedCategory, setSelectedCategory] =useState("all");
    const[sortOption, setSortOption] =useState("default");


    //loading data
    useEffect(() => {
        //fetch data from the backened
        const fetchData = async () => {
            try {
                const response = await fetch('/events.json');
                const data = await response.json();
                console.log(data)
            } catch(error){
                console.log("Error fetching data", error);
            }
        };

        //call the function
        fetchData();
    }, [])










  return (
    <div>
      {/* Event Page Banner */}

      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from0% to-[#FCFCFC] to-100%">
        {/* Text Part*/}
        <div className="py-48 md:flex felx-col  justify-center items-center gap-8">
          <div className="text-center space-y-7 px-4">
            <h2 className="primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Discover Events That Inspire, Engage and{" "}
              <span className="text-orange">Connect You </span>
            </h2>

            <p className="primary text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Explore a diverse range of events across all categories. Whether
              you're looking for networking opportunities, learning experiences,
              or entertainment, find the perfect event for you!
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

        {/* Event Ticket Section */}
        <div className="section-container"></div>
      </div>
    </div>
  );
};

export default Event;
