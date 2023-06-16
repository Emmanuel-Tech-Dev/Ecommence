
import { AiOutlineHeart, AiOutlineShopping, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import navStyle from './NavbarStyle'

const Navbar = () => {

  const links = [

    { name: "Handbags" },
    { name: "Watches" },
    { name: "Skincare" },
    { name: "Jewellery" },
    { name: "Apparels" },

  ]


  return (
    <>
      <div className={navStyle.nav}>
        <div className={navStyle.left}>
          <Link to={'/'}>
          <label className={navStyle.logo}>
            <img src='../images/logo.png' />
          </label>
          </Link>
          
          <div className={navStyle.navlinks}>
            {/* Mapping over link items */}
            {links.map((item) => (
              <div key={item.name}>
                <li className={navStyle.li} >{item.name}</li>
              </div>
            ))}

          </div>
        </div>
        <div className={navStyle.right}>
          <div className={navStyle.inputField}>
            <AiOutlineSearch size={24} color='#13101E' />
            <input className={navStyle.input} type='text' placeholder='Search for products or brands...' />
          </div>
          <div className={navStyle.icons}>
            <AiOutlineHeart size={24} color='#13101E' />
            <AiOutlineUser size={24} color='#13101E' />
            <div className={navStyle.cart}>
              <AiOutlineShopping size={24} color='#13101E' className={navStyle.cartIcon} />
              <span className={navStyle.count}>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={navStyle.bottom}>
        <h1>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <Link to='/' className='text-blue-700 underline'>here</Link> </h1>
      </div>
    </>

  )
}

export default Navbar
