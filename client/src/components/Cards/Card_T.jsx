import React from 'react'

import cardStyle from './CardStyle'


const Card_T = ({item}) => {
  return (
    <div className={cardStyle.cardT}>
        <img src={item.img} className={cardStyle.img}/>
         <div className={cardStyle.bg}>
          <h1 className={cardStyle.h1}>{item.title}</h1>
        </div>
   </div>
  )
}

export default Card_T
