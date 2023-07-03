/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
//importing Card style
import cardStyle from './CardStyle'
import { useDispatch } from 'react-redux';
import { addToWishlist, removeItem } from '../../redux/wishlistReducer';
import { toast } from 'react-toastify';



const Card = ({item}) => {

    // eslint-disable-next-line react/prop-types
    const oldPrice = item?.attributes?.price;
    const discount = item?.attributes?.discount;

    const discountPrice = Math.round(oldPrice * (discount / 100)); 
    
    const dispatch = useDispatch()


   const [click, setClicked] = useState(
     JSON.parse(localStorage.getItem(`click-${item.id}`)) || false
   );

   useEffect(() => {
   localStorage.setItem(`click-${item.id}`, JSON.stringify(click));
   } , [click , item.id])

     const handleDispatch = () => {
       if (!click) {
         dispatch(
           addToWishlist({
             id: item.id,
             name: item.attributes.name,
             subDescription: item.attributes.subDescription,
             image: item.attributes.image.data[0].attributes.url,
             price: discountPrice,
           })
         );

         toast.success(`${item.attributes.name} added to your Wishlist`, {
           position: 'top-center',
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: 'light',
         });
       } else {
         dispatch(removeItem(item.id));
         toast.error(`${item.attributes.name} removed from your Wishlist`, {
           position: 'top-center',
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: 'light',
         });
           setClicked(false);
       }
 setClicked(!click);
       
     };

  

    

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
          <h1 className="font-medium text-[18px]">{item?.attributes?.name}</h1>
          {!click ? (
            <AiOutlineHeart
              className="cursor-pointer"
              size={24}
              onClick={handleDispatch}
            />
          ) : (
            <AiFillHeart
              className="cursor-pointer"
              size={24}
              onClick={handleDispatch}
              color='red'
            />
          )}
         
        </div>
        <p></p>
        <div className={cardStyle.ratings}>
          <img className="w-[100px] h-[20px]" src="../images/star.png" alt="" />
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
