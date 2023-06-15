import React from 'react'

import catStyle from './CategoriesStyle'

const Categories = () => {
  return (
    <div className={catStyle.container}>
    <div className={catStyle.top}>
       <div className={catStyle.cardImg}>
          <img className={catStyle.img} src="../images/cat_hero.png" alt="" />
       </div>
         <div className={catStyle.text}>
            <h1 className={catStyle.h1}>UPTO 70% OFF</h1>
             <h4 className={catStyle.h4}>BLACK FRIDAY</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Categories
