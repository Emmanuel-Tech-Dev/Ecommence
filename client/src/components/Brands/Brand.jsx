import React from 'react'
import BrandCard from '../BrandCard/BrandCard'
import brandStyle from '../Brands/BrandStyle'


const data = [

  {
    id: 1,
    img: '../images/block.png',
  } ,{
    id: 2,
    img: '../images/block-1.png',
  } ,{
    id: 3,
    img: '../images/block-2.png',
  } ,{
    id: 4,
    img: '../images/block-3.png',
  } ,{
    id: 5,
    img: '../images/block-4.png',
  } ,{
    id: 6,
    img: '../images/block-5.png',
  }
 
]

const Brand = () => {
  return (
    <div className='py-12'>
        <h1 className={brandStyle.h1}>Shop By Brands</h1>
    
      <div className="wrapper flex justify-between items-center">
        {data.map((item) => (
        <div key={item.id}>
           <BrandCard item={item}/>
        </div>
       
      ))}
      </div>
      
      
    </div>
  )
}

export default Brand
