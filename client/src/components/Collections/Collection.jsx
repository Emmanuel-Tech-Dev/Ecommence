import React from 'react'
import Card from '../Cards/Card_T'

import collStyle from './CollectionStyle'

const data = [

  {

    id: 1,
    img: "../images/spray.png",
    title: 'Personal Care',

  },
  {

    id: 2,
    img: "../images/creative.png",
    title: 'Handbags',

  },
  {

    id: 3,
    img: "../images/watch.png",
    title: 'Wrist Watches',

  },
  {

    id: 4,
    img: "../images/shades.png",
    title: 'Sun Glasses',

  },


]


const Collection = () => {

  return (
    <div className={collStyle.container}>
      <div className={collStyle.content}>
        <h1 className={collStyle.h1}>Handpicked Collections</h1>
  <div className="card-section flex justify-between px-8 py-6">
{data.map((item) => (
  
  <div key={item.id}>
     <Card item={item}/>
   </div>

))}
    </div>
     </div>
    </div>
  )
}

export default Collection
