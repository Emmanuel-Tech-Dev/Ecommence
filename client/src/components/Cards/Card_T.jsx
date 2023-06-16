import {Link} from 'react-router-dom'

import cardStyle from './CardStyle'


const Card_T = ({item}) => {
  return (
    <Link to={'/categories/1'}>
    <div className={cardStyle.cardT}>
        <img src={item.img} className={cardStyle.img}/>
         <div className={cardStyle.bg}>
          <h1 className={cardStyle.h1}>{item.title}</h1>
        </div>
   </div>
    </Link>
    
  )
}

export default Card_T
