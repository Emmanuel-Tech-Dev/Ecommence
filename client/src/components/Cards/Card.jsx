/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

import {AiOutlineHeart} from 'react-icons/ai'
//importing Card style
import cardStyle from './CardStyle'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/wishlistReducer';



const Card = ({item}) => {

    // eslint-disable-next-line react/prop-types
    const oldPrice = item?.attributes?.price;
    const discount = item?.attributes?.discount;

    const discountPrice = Math.round(oldPrice * (discount / 100)); 
    
    const dispatch = useDispatch()

  return (
    
      <div className={cardStyle.card}>
      <Link to={`/product/${item.id}`}> 
       <img
          src={
            'http://localhost:1338' +
            item?.attributes?.image?.data[0]?.attributes?.url
          }
          className={cardStyle.img}
        /> 
        </Link>
        <div className={cardStyle.desc}>
          <div className={cardStyle.title}>
            <h1 className="font-medium text-[18px]">
              {item?.attributes?.name}
            </h1>
            <AiOutlineHeart className='cursor-pointer' size={24} onClick={()=>dispatch(addToWishlist({
                id: item.id,
                    name: item.attributes.name,
                    subDescription: item.attributes.subDescription,
                    image: item.attributes.image.data[0].attributes.url,
                    price: discountPrice,

            }))} />
          </div>
          <p></p>
          <div className={cardStyle.ratings}>
            <img
              className="w-[100px] h-[20px]"
              src="../images/star.png"
              alt=""
            />
            <span className="font-semibold">54 ratings</span>
          </div>
          <div className={cardStyle.price}>
            <span className={cardStyle.newPrice}>${discountPrice}</span>{' '}
            <span className={cardStyle.oldPrice}>${oldPrice}</span>
            <span className={cardStyle.discount}>
              {item?.attributes?.discount}% OFF
            </span>
          </div>
        </div>
      </div>
   
  );
}

export default Card
