
import { IoIosArrowForward } from 'react-icons/io'
import {Link} from 'react-router-dom'
import Card from '../Cards/Card'

//importing styles
import newStyle from './NewStyle'

const data = [
    
 {
    id: 1,
    img: "../images/pink-bag.png",
    brand: "Grande",
    title: 'Blossom Pouch',
    ratings : 43,
    price : 57.00,
    oldPrice : 78.66,
    discount : '50'

 } , 
 {

    id: 2,
    img: "../images/duffle.png",
    brand: "Coach",
    title: 'Leather Coach Bag',
    ratings : 43,
    price : 57.00,
     oldPrice : 78.66,
     discount : '30'

 } , 
 {
    id: 3,
    img: "../images/brownBag.png",
    brand: "Remus",
    title: 'Brown Strap Bag',
    ratings : 43,
    price : 57.00,
     oldPrice : 78.66,
     discount : '20'
 } , 
 {
    id: 4,
    img: "../images/black-bag.png",
    brand: "Boujee",
    title: 'Black Bag',
    ratings : 43,
    price : 57.00,
     oldPrice : 78.66,
     discount : '40'
 } , 
  

]

const New = () => {
  return (
    <div className='py-12'>
    <div className={newStyle.heading}>
        <h1 className={newStyle.title}>New Arrivals</h1>
      <Link to={'/categories/1'}>
        <button className={newStyle.button}>
           View All
<IoIosArrowForward size={24}/>
        </button>
      </Link>
      
       
    </div>

<div className="card-section flex justify-between px-8 py-6">
{data.map((item) => (
  
  <div key={item.id}>
     <Card item={item}/>
   </div>

))}
    </div> 
    </div>
  )
}

export default New
