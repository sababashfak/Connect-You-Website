import React from 'react'

const categoryItems = [
    /**
     * {id:1 , title:"Jashore Zilla School Reunion", des: "This is the 187th years of establishment of Jashore Zill School.", image: "/images/home/category/JZS.jpg"},
    {id:2 , title:"Cambrian College Reunion", des: "This is the 21th years of establishment of Cambrian College.", image: "/images/home/category/Cambrian.jpg"},
    {id:3 , title:"North South University 203 Batch Reunion", des: "This is the reunion of Noth South University's 203 batch student.", image: "/images/home/category/NSU.png"},
    {id:4 , title:"Music Fest", des: "Big Music Fest in Bashundhara Convension Centre", image: "/images/home/category/Music.png"}
     */

    /** 
     * Image resulation must be 200px*120px
     */

    {id:1 , title:"Reunion", des: "(8 Events)", image: "/images/home/category/img1.png"},
    {id:2 , title:"Skill Development", des: "(3 Events)", image: "/images/home/category/img2.png"},
    {id:3 , title:"Music", des: "(4 Events)", image: "/images/home/category/img3.png"},
    {id:4 , title:"Browse All", des: "(28 Events)", image: "/images/home/category/img4.png"}
]

const Categories = () => {
  return (
    <div className='section-container'>
        <div className='text-center'>
            <p className='subtitle'>
                Upcoming Events
            </p>
            <h2 className='title'>
                Event Categories
            </h2>
        </div>
        {/** category cards */}
        <div className='flex flex-col sm:flex-row flew-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div key={i}  className='shadow-lg rounded-md bg-light-orange py-6  w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='flex w-full mx-auto items-center justify-center'>
                            <img src={item.image} alt= "" className=' w-72 h-50'></img>
                        </div>
                        <div className='mt-5 space-y-5'>
                            <h5 className='font-semibold '>{item.title}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Categories