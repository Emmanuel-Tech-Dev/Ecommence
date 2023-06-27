

import Accordion from '../../components/Accordion/Accordion'
import Card from '../../components/Cards/Card'
import { CgMenuGridR } from 'react-icons/cg'
import { IoIosArrowForward } from 'react-icons/io'
import catStyle from './CategoriesStyle'
import Pagination from '../../components/Pagination/Pagination'
import List from '../../components/List/LIst'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/usefetch'

const Categories = () => {

  const cateId = parseInt(useParams().id);

  console.log(cateId)

  const { data, loading, error } = useFetch(
    `/categories/${cateId}?populate=products`
  ); 
  
  const { newData } = useFetch(
    `products?populate=*&_limit=4`
  );

  console.log(data);
  

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
         <Link to={'/'}>
           <h1 className='opacity-[.4]'>Home</h1>
         </Link>
        
          <IoIosArrowForward />
          <h1 className='opacity-[1] text-[#1B4B66]'>{data?.attributes?.title}</h1>
        </div>

        <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
          <h1 >{data?.attributes?.title}</h1>
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
              <span>Showing 1 - {newData.length} of {newData.length}</span>
            </div>

            <div className={catStyle.rightSm}>
              <div className="count flex items-center gap-x-3">
                <h1>To show:</h1>
                <span className='bg-[#F1F1F1] px-4 py-2 rounded'>{newData.length}</span>
              </div>
              <div className="sort flex items-center gap-x-3">
                <label htmlFor='sort'>Sort By:</label>
                <select name="" id="sort" className={catStyle.select}>
                  <option value="handbags">Handbags</option>
                  <option value="personalCare">Personal Care</option>
                  <option value="watches">Watches</option> 
                  <option value="glasses">Glasses</option>
                  
                </select>
              </div>
            </div>
          </div>
          <div className="">
           
                <List cateId={cateId} />
            
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
