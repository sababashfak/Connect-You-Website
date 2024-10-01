import React from 'react'

const serviceLists = [
    {id: 1, title: "Event Registration", des: "We offer even registration for your event" , image: "/images/home/service/1.png"},
    {id: 2, title: "Event Ticketing", des: "We offer even ticketing for your event" , image: "/images/home/service/2.png"},
    {id: 3, title: "Event Promotion", des: "We offer even promotion for your event" , image: "/images/home/service/3.png"},
    {id: 4, title: "Event Management", des: "We offer even management for your event" , image: "/images/home/service/4.png"}
]


const Service = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/** Text  */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Services</p>
            <h2 className="title">Get More Info About Our Services</h2>
            <p className="my-5 text-secondary leadind-[30px]">
            Our platform offers seamless online event registration, event ticketing, promotion, and 
            management services, making it easy to organize and host successful events 
            </p>

            <button className='btn bg-orange text-white px-8 py-3 rounded-full'>Explore</button>
          </div>
        </div>

        {/* Cards */}
        <div className="md:w-1/2">
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-orange cursor-pointer hover:border-indigo-600 duration-200 hover:border'>
                            <img src = {service.image} alt ="" className='mx-auto ' />
                            <h5 className='pt-3 font-semibold'>{service.title}</h5>
                            <p className='text-[#bda490]'>{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Service