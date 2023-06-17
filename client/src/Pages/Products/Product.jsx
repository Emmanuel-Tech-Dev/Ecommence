import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import productStyle from './ProductStyle'
import {IoIosArrowForward} from 'react-icons/io'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import Card from '../../components/Cards/Card'

const data = [
   {img2 :'../../images/brownBag.png' },
   {img2 :'../../images/duffle.png' },
   {img2:'../../images/pink-bag.png' },
   {img2 :'../../images/brownBag.png' },

]

 const data2 = [

    {
      id: 1,
      img: "../../images/pink-bag.png",
      brand: "Grande",
      title: 'Blossom Pouch',
      ratings: 43,
      price: 57.00,
      oldPrice: 78.66,
      discount: '50'

    },
    {

      id: 2,
      img: "../../images/duffle.png",
      brand: "Coach",
      title: 'Leather Coach Bag',
      ratings: 43,
      price: 57.00,
      oldPrice: 78.66,
      discount: '30'

    },
    {
      id: 3,
      img: "../../images/brownBag.png",
      brand: "Remus",
      title: 'Brown Strap Bag',
      ratings: 43,
      price: 57.00,
      oldPrice: 78.66,
      discount: '20'
    },
    {
      id: 4,
      img: "../../images/black-bag.png",
      brand: "Boujee",
      title: 'Black Bag',
      ratings: 43,
      price: 57.00,
      oldPrice: 78.66,
      discount: '40'
    },



  ]

const Product = () => {


  const [selectedImg , setSelectedImg] = useState(0)

   const [quantity, setQuantity] = useState(1)


   const [activeButton, setActiveButton] = useState('description');

const handleSetActiveButton = (button) => {
  setActiveButton(button);
};


  console.log(selectedImg)

  return (
    <div className={productStyle.container}> 
    <div className="heading mt-10 -mb-10">
            <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
               <Link to={'/'}> 
               <h1 className='opacity-[.4]'>Home</h1>
               </Link>
               
               <IoIosArrowForward/>
               <Link to={'/categories/1'}>
                <h1 className='opacity-[.4] text-[#1B4B66]'>HandBags</h1>
               </Link>
               
                <IoIosArrowForward/>
                <h1 className='opacity-[1] text-[#1B4B66]'>Label</h1>
               </div>

              <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
                <h1 >HandBags</h1>
              </div>
          </div>

          <div className={productStyle.content}>
            <div className={productStyle.left}>
              <img className='w-[100%] h-[600px] rounded-[16px]' src={data[selectedImg].img2}/>
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
           <div className="raitngs flex items-center gap-x-5 my-3">
            <img src='../../images/star.png'/>
            <span className='text-[#B6B6B6]'>(250) Ratings</span>
           </div>

            <div className={productStyle.price}>
            <span className={productStyle.newPrice}>$54.56</span>
            <span className={productStyle.oldPrice}>$78.66</span>
            <span className={productStyle.discount}>50% OFF</span>
           </div>
           <hr/>

           <div className="details mt-6 flex items-center gap-x-10">
             <div className="content flex-[1]">
              <h1 className='text-[20px] font-semibold mb-2'>Delivery Details</h1>
              <p>Check estimated delivery date/pickup option.</p>
             </div>
             <div className="coupon bg-[#F1F1F1] flex justify-between py-3 px-6 flex-[2] rounded-md">
              <input type='text' placeholder='Apply Valid Pincode' className='bg-transparent  focus:outline-none'/>
              <button className='text-[#1B4B66] font-semibold uppercase'>Check</button>
             </div>
           </div>

           <div className="quantity my-10 flex items-center gap-x-4">
            <h1 className='text-[20px] font-semibold '>Quantity:</h1>
            <div className="counter border border-[#1B4B66] rounded-md flex items-center gap-x-5">
            <button className='px-2 text-[24px]' onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
            <span>{quantity}</span>
            <button className='px-2 text-[24px]' onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
           </div>

           <div className="discount border   border-[#1B4B66] py-2 px-4 w-[60%] flex items-center gap-x-5 rounded-md">
            <div className="content mb-2">
              <h1 className='font-semibold mb-2'>Get upto 30% Off on order value above $100</h1>
              <span className='text-[#1B4B66] text-[14px] font-medium'>Terms & Conditions</span>
            </div>
            <div className="code bg-[#f1f1f1] px-3 text-center py-5 rounded-sm">
              <span className='text-[14px] text-[#626262]'>Use Code</span>
              <h1 className='font-semibold'>ORDER100</h1>
            </div>
           </div>

<div className="buttons mt-10 flex items-center gap-x-5 ">
  <button className='flex items-center gap-x-5 px-20 py-2 bg-[#1B4B66] text-[#fff] rounded-md'>
  <AiOutlineShopping/>  Add To Bag
    </button>
  <button className='flex items-center gap-x-5 px-10 py-2 border-2 border-[#1B4B66] text-[#1B4B66] rounded-md'>
  <AiOutlineHeart/>  Add To Wishlist
    </button>
</div>

            </div>
          </div>
     
  <div className="desc my-16">
        <div className="container">
             <div className="buttons w-full bg-[#f1f1f1] py-2 px-5 rounded-[12px] flex items-center gap-x-10">
      <button
        className={`${activeButton === 'description' ? 'bg-[#1B4B66] text-white px-4 py-1 rounded-[6px]' : ''}`}
        onClick={() => handleSetActiveButton('description')}
      >
        Product Description
      </button>
      <button
        className={` ${activeButton === 'relatedProducts' ? 'bg-[#1B4B66] text-white px-4 py-1 rounded-[6px]' : ''}`}
        onClick={() => handleSetActiveButton('relatedProducts')}
      >
        Related Products
      </button>
      <button
        className={` ${activeButton === 'ratings' ? 'bg-[#1B4B66] text-white px-4 py-1 rounded-[6px]' : ''}`}
        onClick={() => handleSetActiveButton('ratings')}
      >
        Ratings
      </button>
    </div>
{activeButton === 'description' && (

   <div className="content my-10 text-[#626262]">
              <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim alias quis. Ullam, sed ipsum ea, error earum nobis necessitatibus alias harum eum impedit, ducimus minima possimus eos mollitia ut consequatur fuga? Iure, iste. Aspernatur facere nulla ducimus sapiente nisi excepturi in itaque! Et nesciunt corrupti iste quidem delectus assumenda dolore eaque? Modi quam similique libero necessitatibus labore sapiente rem?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim alias quis. Ullam, sed ipsum ea, error earum nobis necessitatibus alias harum eum impedit, ducimus minima possimus eos mollitia ut consequatur fuga? Iure, iste. Aspernatur facere nulla ducimus sapiente nisi excepturi in itaque! Et nesciunt corrupti iste quidem delectus assumenda dolore eaque? Modi quam similique libero necessitatibus labore sapiente rem?</p>
              <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim alias quis. Ullam, sed ipsum ea, error earum nobis necessitatibus alias harum eum impedit, ducimus minima possimus eos mollitia ut consequatur fuga? Iure, iste. Aspernatur facere nulla ducimus sapiente nisi excepturi in itaque! Et nesciunt corrupti iste quidem delectus assumenda dolore eaque? Modi quam similique libero necessitatibus labore sapiente rem?</p>
            </div>
)}


{activeButton === 'relatedProducts' && (

              <div className="content my-10 text-[#626262] flex flex-wrap justify-between gap-x-20">
{data2.map((item) => (
<div className="div" key={item.id}>
  <Card item={item}/>
</div>

))}
            </div>
)}
           
            

        </div>

  </div>

    </div>
  )
}

export default Product
