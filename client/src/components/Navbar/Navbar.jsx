import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import navStyle from './NavbarStyle';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useState } from 'react';
import useFetch from '../../hooks/usefetch';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleCartOpen = () => {
    setOpen(!open);
  };

  const [openWishList, setOpenWishlist] = useState(false);
  const handleWishOpen = () => {
    setOpenWishlist(!openWishList);
  };

  const { data, loading, error } = useFetch(`/categories?field=title`);

  // Replacing - with empy spaces

  
  return (
    <>
      <div className={navStyle.nav}>
        <div className={navStyle.left}>
          <Link to={'/'}>
            <label className={navStyle.logo}>
              <img src="../images/logo.png" />
            </label>
          </Link>

          <div className={navStyle.navlinks}>
            {/* Mapping over link items */}
            {error
              ? 'Something went wrong'
              : loading
              ? 'Loading Data...'
              : data.map((item) => (
                  <div key={item.name}>
                    <Link to={`/categories/${item.id}`}>
                      <li className={navStyle.li}>{item?.attributes?.title.replace(/_/g , " ")}</li>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
        <div className={navStyle.right}>
          <div className={navStyle.inputField}>
            <AiOutlineSearch size={24} color="#13101E" />
            <input
              className={navStyle.input}
              type="text"
              placeholder="Search for products or brands..."
            />
          </div>
          <div className={navStyle.icons}>
            <AiOutlineHeart
              size={24}
              color="#13101E"
              onClick={handleWishOpen}
            />
            <AiOutlineUser size={24} color="#13101E" />
            <div className={navStyle.cart}>
              <AiOutlineShopping
                size={24}
                color="#13101E"
                className={navStyle.cartIcon}
                onClick={handleCartOpen}
              />
              <span className={navStyle.count}>0</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
      {openWishList && <Wishlist />}
    </>
  );
};

export default Navbar;
