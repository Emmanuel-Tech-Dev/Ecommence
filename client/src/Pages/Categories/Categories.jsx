

import Accordion from '../../components/Accordion/Accordion'
import Card from '../../components/Cards/Card'
import { CgMenuGridR } from 'react-icons/cg'
import { IoIosArrowForward } from 'react-icons/io'
import catStyle from './CategoriesStyle'
import Pagination from '../../components/Pagination/Pagination'

const Categories = () => {


  const data = [

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
    {
      id: 5,
      img: "../../images/black-bag.png",
      brand: "Boujee",
      title: 'Black Bag',
      ratings: 43,
      price: 57.00,
      oldPrice: 78.66,
      discount: '40'
    }, {
      id: 6,
      img: "../../images/black-bag.png",
      brand: "Boujee",
      title: 'Black Bag',
      ratings: 43,
      price: 57.00,
      oldPrice: 78.66,
      discount: '40'
    },


  ]


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
      <div className="heading mt-16 -mb-10">
        <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
          <h1 className='opacity-[.4]'>Home</h1>
          <IoIosArrowForward />
          <h1 className='opacity-[1] text-[#1B4B66]'>HandBags</h1>
        </div>

        <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
          <h1 >HandBags</h1>
        </div>
      </div>
      <div className={catStyle.bottom}>

        <div className={catStyle.left}>
          <Accordion title='Size' id='1' />
          <Accordion title='Color' id='2' />
          <Accordion title='Brand' id='3' />
          <Accordion title='Price Range' id='4' />
          <Accordion title='Discount' id='5' />
          <Accordion title='Availability' id='6' />
        </div>
        <div className={catStyle.right}>
          <div className={catStyle.tabs}>
            <div className={catStyle.leftSm}>
              <div className="icon bg-[#1B4B66]">
                <CgMenuGridR size={24} color='#fefe' />
              </div>
              <span>Showing 1 - {data.length} of {data.length}</span>
            </div>

            <div className={catStyle.rightSm}>
              <div className="count flex items-center gap-x-3">
                <h1>To show:</h1>
                <span className='bg-[#F1F1F1] px-4 py-2 rounded'>{data.length}</span>
              </div>
              <div className="sort flex items-center gap-x-3">
                <label htmlFor='sort'>Sort By:</label>
                <select name="" id="sort" className={catStyle.select}>
                  <option value="Size">Size</option>
                  <option value="Position">Position</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-y-20 flex-wrap ">
            {data.map((item) => (
              <div key={item.id}>
                <Card item={item} />
              </div>
            ))}


          </div>
          <div className="pagination mt-20">
            <Pagination />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Categories
