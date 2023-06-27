import {Link} from 'react-router-dom'

import {AiOutlineHeart} from 'react-icons/ai'
//importing Card style
import cardStyle from './CardStyle'




const Card = ({item}) => {

    const oldPrice = item?.attributes?.price;
    const discount = item?.attributes?.discount;

    const discountPrice = Math.round(oldPrice * (discount / 100)); 

  return (
    <Link to={`/product/${item.id}`}>
      <div className={cardStyle.card}>
        <img
          src={
            'http://localhost:1338' +
            item?.attributes?.image?.data[0]?.attributes?.url
          }
          className={cardStyle.img}
        />
        <div className={cardStyle.desc}>
          <div className={cardStyle.title}>
            <h1 className="font-medium text-[18px]">
              {item?.attributes?.name}
            </h1>
            <AiOutlineHeart size={24} />
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
    </Link>
  );
}

export default Card
