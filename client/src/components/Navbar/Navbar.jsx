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
import { useState  } from 'react';
import useFetch from '../../hooks/usefetch';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleCartOpen = () => {
    setOpen(!open);
  };

  const [openWishList, setOpenWishlist] = useState(false);
  const handleWishOpen = () => {
    setOpenWishlist(!openWishList);
  };
 const [openSearch, setOpenSearch] = useState(false);
 
 const handleOpen = () => {
   setOpenSearch(true)
 }

 const handleBlur = () => {
  setTimeout(() => {
     setOpenSearch(false)
     setSearch('')
  } , 200)
 
 }

  const { data, loading, error } = useFetch(`/categories?field=title`);

  // Replacing - with empy spaces
  const products = useSelector((state) => state.cart.products);
  const wish = useSelector((state) => state.wishlist.products);

  //Creating a state for the search input
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value)
    
  }



  console.log(search)
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
                  <div key={item.id}>
                    <Link to={`/categories/${item.id}`}>
                      <li className={navStyle.li}>
                        {item?.attributes?.title.replace(/_/g, ' ')}
                      </li>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
        <div className={navStyle.right}>
          <form >
            <div className={navStyle.inputField}>
              <AiOutlineSearch
                size={24}
                color="#13101E"
                className="cursor-pointer"
              />
              <input
                className={navStyle.input}
                type="text"
                placeholder="Search for products or brands..."
               value={search}
                name="search"
                onChange={handleChange}
                autoComplete="off"
                onFocus={handleOpen}
                onBlur={handleBlur}
              />
            </div>
          </form>

          <div className={navStyle.icons}>
            <div className={navStyle.cart}>
              <AiOutlineHeart
                size={24}
                color="#13101E"
                onClick={handleWishOpen}
                className="cursor-pointer"
              />
              <span className={navStyle.count}>{wish.length}</span>
            </div>

            <AiOutlineUser
              size={24}
              color="#13101E"
              className="cursor-pointer"
            />
            <div className={navStyle.cart}>
              <AiOutlineShopping
                size={24}
                color="#13101E"
                className="cursor-pointer"
                onClick={handleCartOpen}
              />
              <span className={navStyle.count}>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
      {openWishList && <Wishlist />}

      {openSearch && (
        <Search
          search={search}
          setSearch={setSearch}
          
        />
      )}
    </>
  );
};

export default Navbar;
