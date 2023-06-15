import React from 'react'

// import components
import Hero from '../../components/Hero/Hero'
import New from '../../components/New_arrivals/New'
import Collection from '../../components/Collections/Collection'
import Brands from '../../components/Brands/Brand'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <New/>
      <Collection/>
      <Brands/>
      <Banner/>
    </div>
  )
}

export default Home
