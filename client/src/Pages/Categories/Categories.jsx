import Accordion from '../../components/Accordion/Accordion';

import { IoIosArrowForward } from 'react-icons/io';
import catStyle from './CategoriesStyle';
import accordStyle from '../../components/Accordion/AccordStyle';
import List from '../../components/List/LIst';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';
import { useState } from 'react';


const Categories = () => {
  const cateId = parseInt(useParams().id);

  const { data } = useFetch(`/categories/${cateId}?populate=*`);

  const [openFilter , setOpenFilter] = useState(false)

  const handleClick = () => {
    setOpenFilter(!openFilter)
  }

   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
// }

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
      <div className="heading mt-16 -mb-5">
        <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
          <Link to={'/'}>
            <h1 className="opacity-[.4]">Home</h1>
          </Link>

          <IoIosArrowForward />
          <h1 className="opacity-[1] text-[#1B4B66]">
            {data?.attributes?.title}
          </h1>
        </div>

        <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
          <h1>{data?.attributes?.title}</h1>
        </div>
      </div>
      <div className={catStyle.bottom}>
        <div
          className={
            !openFilter
              ? catStyle.left
              : 'flex-[3] sticky top-5 h-[100%] md:flex-[1]'
          }
        >
          
           <Accordion title="Color" label="color" id="2" />
          <Accordion title="Brand" label="Brand" id="3" />
          <Accordion title="Price Range" label="price" id="4" />
          <Accordion title="Discount" label="discount" id="5" />
          <Accordion title="Availability" label="available" id="6" /> 
        </div>
        <div className={catStyle.right}>
          <List
            cateId={cateId}
            openFilter={openFilter}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
