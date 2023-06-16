import React, { useState } from 'react'

import productStyle from './ProductStyle'
import {IoIosArrowForward} from 'react-icons/io'


const data = [
   {img :'../../images/brownBag.png' },
   {img :'../../images/duffle.png' },
   {img :'../../images/pink-bag.png' },
   {img :'../../images/brownBag.png' },

]


const Product = () => {


  const [selectedImg , setSelectedImg] = useState(0)

  console.log(selectedImg)

  return (
    <div className={productStyle.container}> 
    <div className="heading mt-10 -mb-10">
            <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
                <h1 className='opacity-[.4]'>Home</h1>
               <IoIosArrowForward/>
                <h1 className='opacity-[.4] text-[#1B4B66]'>HandBags</h1>
                <IoIosArrowForward/>
                <h1 className='opacity-[1] text-[#1B4B66]'>Label</h1>
               </div>

              <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
                <h1 >HandBags</h1>
              </div>
          </div>

          <div className={productStyle.content}>
            <div className={productStyle.left}>
              <img className='w-[100%] h-[600px] rounded-[16px]' src={data[selectedImg].img}/>
              <div className={productStyle.thumnails}>
                 <img className='w-[80px] rounded-md' src='../../images/brownBag.png' onClick={() => setSelectedImg(0)} />
                 <img className='w-[80px] rounded-md' src='../../images/duffle.png' onClick={() => setSelectedImg(1)} />
                 <img className='w-[80px] rounded-md' src='../../images/pink-bag.png' onClick={() => setSelectedImg(2)} />
                 <img className='w-[80px] rounded-md' src='../../images/brownBag.png'  onClick={() => setSelectedImg(3)}/>
              </div>
            </div>
            <div className={productStyle.right}>
              <h1 className='text-[34px] text-[#13101E] font-semibold'>Couch</h1>
              <h5 className='text-[20px] text-[#626262] font-semibold py-3'>Leather Coach Bag with adjustable starps.</h5>
           <div className="raitngs flex items-center gap-x-5 my-5">
            <img src='../../images/star.png'/>
            <span className='text-[#B6B6B6]'>(250) Ratings</span>
           </div>

            <div className={productStyle.price}>
            <span className={productStyle.newPrice}>$54.56</span>
            <span className={productStyle.oldPrice}>$78.66</span>
            <span className={productStyle.discount}>50% OFF</span>
           </div>
           <hr/>
            </div>
          </div>
     
    </div>
  )
}

export default Product
