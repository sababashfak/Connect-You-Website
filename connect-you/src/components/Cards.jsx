import React, {useState} from 'react'
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import {FaHeart} from "react-icons/fa"

const Cards = ({event}) => {
    const [isFavorite, setFavorite] = useState(false);

    const handleFavClick = () => {
        //e.stopPropagation();
        setFavorite(!isFavorite);
        //console.log("Checking Onclick");
    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl relative">

        {/** Use backtic(`) instead of single quote(') and the ifFavorite is working now */}
        <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-orange ${isFavorite ? "text-rose-500" : "text-white"}`}
        onClick = {handleFavClick}
        //style={{ cursor: 'pointer' }}
        >
            <FaHeart className= 'h-5 w-5 cursor-pointer '/>
        </div>
        
        <figure>
            <img
            src={event.image}
            alt={event.title} 
            className='hover:scale-105 transition-all duration-200 md:h-72'
            />
        </figure>

        <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <div className='flex space-x-2'>
                <a><MdDateRange/></a><a>{event.date}</a>
            </div> 
            <div className='flex space-x-2'>
                <a><IoLocationOutline/></a><a>{event.location}</a>
            </div>
            <div className='flex space-x-2'>
                <a><GrOrganization/></a><a>{event.company}</a>
            </div>
            <div className="card-actions justify-between items-center mt-2">
                <h5 className='font-semibold'>Starting From <span className='font-semibold'>BDT</span> {event.price}.00</h5>
                <button className="btn bg-orange text-white">Registration</button>
            </div>
        </div>
    </div>
  )
}

export default Cards