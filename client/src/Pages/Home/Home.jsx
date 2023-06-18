import React from 'react'

import homeStyle from './HomeStyle'
import { Link } from 'react-router-dom'
// import components
import Hero from '../../components/Hero/Hero'
import New from '../../components/New_arrivals/New'
import Collection from '../../components/Collections/Collection'
import Brands from '../../components/Brands/Brand'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div>
       <div className={homeStyle.bottom}>
        <h1>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <Link to='/' className='text-blue-700 underline'>here</Link> </h1>
      </div>
      <Hero/>
      <New/>
      <Collection/>
      <Brands/>
      <Banner/>
    </div>
  )
}

export default Home
