import {Link} from 'react-router-dom'

import {AiOutlineHeart} from 'react-icons/ai'
//importing Card style
import cardStyle from './CardStyle'




const Card = ({item}) => {


  return (
   <Link to={'/product/1'}>
     <div className={cardStyle.card}>
        <img src={item.img} className={cardStyle.img}/>
        <div className={cardStyle.desc}>
            <div className={cardStyle.title}>
               
                <h1 className='font-medium text-[18px]'>{item.brand}</h1>
                <AiOutlineHeart size={24}/>
            </div>
            <p></p>
            <div className={cardStyle.ratings}>
                   <img className='w-[100px] h-[20px]' src="../images/star.png" alt="" />
                   <span className='font-semibold'>{item.ratings} ratings</span>
            </div>
           <div className={cardStyle.price}>
            <span className={cardStyle.newPrice}>${item.price}</span>
            <span className={cardStyle.oldPrice}>${item.oldPrice}</span>
            <span className={cardStyle.discount}>{item.discount}% OFF</span>
           </div>
        </div>
       </div>
   </Link>
      
   
  )
}

export default Card
