import React from 'react'

import brandStyle from './BrandCardStyle'

const BrandCard = ({item}) => {
  return (
   
     <div className={brandStyle.card}>
         <img src={item.img}/>
     </div>
       
   
  )
}

export default BrandCard
