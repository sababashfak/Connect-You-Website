import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import FeaturedEvents from './FeaturedEvents'
import Feedback from './Feedback'
import Service from './Service'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <FeaturedEvents/>
      <Feedback/>
      <Service/>    
    </div>
  )
}

export default Home