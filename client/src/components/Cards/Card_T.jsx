/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

import cardStyle from './CardStyle'


const Card_T = ({item}) => {
  return (
    <Link to={`/categories/${item.id}`}>
      <div className={cardStyle.cardT}>
        <img
          src={
            'http://localhost:1338' +
            // eslint-disable-next-line react/prop-types
            item?.attributes?.image?.data?.attributes?.url
          }
          className={cardStyle.img}
        />
        <div className={cardStyle.bg}>
          <h1 className={cardStyle.h1}>
            {item?.attributes?.title.replace(/_/g, ' ')}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Card_T
