import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

import cardStyle from './BannerCardStyle'


const BannerCard = () => {
  return (
    <div className='py-6'>
      <div className={cardStyle.top}>
       <div className={cardStyle.cardImg}>
          <img className={cardStyle.img} src="../images/banner.png" alt="" />
       </div>
         <div className={cardStyle.text}>
            <h4 className={cardStyle.h4}>LIFESTYLE</h4>
            <h1 className={cardStyle.h1}>Makeup Accessories From Top Brands</h1>
            <Link to={'/categories/6'}>
       <button className={cardStyle.button}>
        <BsArrowRight size={24}/> 
       </button>
      </Link>
        </div>
      </div>
      <div className={cardStyle.bottom}>
        <div className={cardStyle.left}>
     <div className={cardStyle.cardImg}>
          <img className={cardStyle.img2} src="../images/banner-1.png" alt="" />
       </div>
        <div className={cardStyle.text2}>
               <h1 className={cardStyle.h1l}>Skincare Essentials</h1>
            <Link to={'/categories/5'}>
       <button className={cardStyle.buttonr}>
        <BsArrowRight size={24}/> 
       </button>
      </Link>
        </div>
        </div>
      
        <div className={cardStyle.right}>
       <div className={cardStyle.cardImg}>
          <img className={cardStyle.img2} src="../images/banner-2.png" alt="" />
       </div>
        <div className={cardStyle.text2}>
              <h1 className={cardStyle.h1r}>Facepacks & Peels</h1>
            <Link to={'/categories/5'}>
       <button className={cardStyle.buttonl}>
        <BsArrowRight size={24}/> 
       </button>
      </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BannerCard
