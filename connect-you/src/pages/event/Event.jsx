import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa"

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
                //console.log(data)
                setEvent(data);
                setFilteredEvents(data);

            } catch(error){
                console.log("Error fetching data", error);
            }
        };

        //call the function
        fetchData();
    }, [])




    //Filteering data based on category
    const filterEvents = (category) => {
        const filtered =category === "all" 
          ? event 
          : event.filter((ev1) => ev1.category === category);

      setFilteredEvents(filtered);
      setSelectedCategory(category);

    };


// Show all data
  const showAll = () => {
    setFilteredEvents(event);
    setSelectedCategory("all");

  }

  // Sorting based on A-Z, Z-A Low - High pricing

  const handleSortChange= (option) => {
    setSortOption(option);

    let sortedEvents = [...filteredEvents];

    // logic
    switch(option){
      case "A-Z":
        sortedEvents.sort((a,b) => a.title.localeCompare(b.title))
        break;
      case "Z-A":
        sortedEvents.sort((a,b) => b.title.localeCompare(a.title))
        break;
      case "low-high":
        sortedEvents.sort((a,b) => a.price-b.price)
        break;
      case "hight-low":
        sortedEvents.sort((a,b) => b.price-a.price)
        break;
      case "default": // Added sorting for default
      sortedEvents.sort((a, b) => {
          if (a.featured === b.featured) {
              return 0; // No change in order
          }
          return a.featured ? -1 : 1; // featured events come first
      });
      break;
      default:
        break;
    }

    setFilteredEvents(sortedEvents);
  }


  return (
    <div>
      {/* Event Page Banner */}

      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from0% to-[#FCFCFC] to-100% ">
        {/* Text Part*/}
        <div className="py-48 md:flex flex-col  justify-center items-center gap-8">
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
        <div className="section-container">
          {/* filtering & sorting */}
          <div className="flex flex-col md:flex-row flex-warp md:justify-between items-center space-y-3 mb-8">
            {/* all category btns */}
            <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
              <button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => filterEvents("Reunion")}
                className={selectedCategory === "Reunion" ? "active" : ""}
              >
                Reunion
              </button>
              <button
                onClick={() => filterEvents("Music")}
                className={selectedCategory === "Music" ? "active" : ""}
              >
                Music
              </button>
              <button
                onClick={() => filterEvents("Skill Development")}
                className={
                  selectedCategory === "Skill Development" ? "active" : ""
                }
              >
                Skill Development
              </button>
              <button
                onClick={() => filterEvents("Expo")}
                className={selectedCategory === "Expo" ? "active" : ""}
              >
                Expo
              </button>
              <button
                onClick={() => filterEvents("Seminar")}
                className={selectedCategory === "Seminar" ? "active" : ""}
              >
                Seminar
              </button>
              <button
                onClick={() => filterEvents("Fest")}
                className={selectedCategory === "Fest" ? "active" : ""}
              >
                Fest
              </button>
            </div>
            {/* sorting based filtering */}
            <div className="flex justify-end mb-4 rounded-sm">
              <div className="bg-orange p-2">
                <FaFilter className="h-4 w-4 text-white " />
              </div>

              {/* sorting options */}
              <select
                name="sort"
                idd="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-white text-black border-black border-2 px-2 py-1 rounded-sm"
              >
                <option value="default">Default</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
                <option value="low-high">Low - High</option>
                <option value="high-low">High - Low</option>
              </select>
            </div>
          </div>
          {/* <div className="flex h-3">

          </div> */}
          {/* Event Cards */}
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
            {filteredEvents.map((ev) => (
              <Cards key={ev._id} ev={ev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
