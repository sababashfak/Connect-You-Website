import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from0% to-[#FCFCFC] to-100%'>
        <div className='py-24 md:flex felx-col md:flex-row-reverse justify-between items-center gap-8'>
            
            {/* Image Part */}
            <div className='md:w-1/2'>
                <img src="/images/home/banner.png" alt="" />
                
            </div>
            
            {/* Text Part*/}
            <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='primary md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
                Let’s Enjoy Your <span className='text-orange'>Event</span>
                <br></br>
                Together Hassle-Free!
            </h2>
            
            <p className='primary text-xl text-[#4A4A4A]'>
                Sit back and relax while we handle all the details for you!
            </p>
            <div className='flex space-x-1'>
                <button className='btn flex-auto md:flex-initial bg-orange px-8 py-3 font-semibold text-white rounded-full'>
                    Create Event
                </button>
                <button className='btn flex-auto md:flex-initial bg-transparent px-8 py-3 font-semibold text-black rounded-full'>
                    Find Event
                </button>
            </div>
            </div>

            
        </div>
        
    </div>
  )
}

export default Banner