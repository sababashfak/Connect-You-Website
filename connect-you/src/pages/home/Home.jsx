import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import FeaturedEvents from './FeaturedEvents'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <FeaturedEvents/>
    </div>
  )
}

export default Home