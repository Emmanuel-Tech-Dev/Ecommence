import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShopping,
  AiFillShopping,
  AiOutlineUser,
  AiOutlineSearch,
 
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import navStyle from './NavbarStyle';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useState } from 'react';
import useFetch from '../../hooks/usefetch';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleCartOpen = () => {
    setOpen(!open);
    setOpenWishlist(false)
  };

  const [openNav , setOpenNav] = useState(false)

  const handleNav = () =>{
    setOpenNav(!openNav)

    console.log('click')
  }


  const [openWishList, setOpenWishlist] = useState(false);
  const handleWishOpen = () => {
    setOpenWishlist(!openWishList);
    setOpen(false)
    
  };
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpen = () => {
    setOpenSearch(true);
 setOpenWishlist(false);
  setOpen(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setOpenSearch(false);
      setSearch('');
    }, 200);
  };

 const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };




  const { data, loading, error } = useFetch(`/categories?field=title`);

  // Replacing - with empy spaces
  const products = useSelector((state) => state.cart.products);
  const wish = useSelector((state) => state.wishlist.products);

  //Creating a state for the search input
 
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
          <form>
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
              {!openWishList ? (
                <AiOutlineHeart
                  size={24}
                  color="#13101E"
                  onClick={handleWishOpen}
                  className="cursor-pointer"
                />
              ) : (
                <AiFillHeart
                  size={24}
                  color="#13101E"
                  onClick={handleWishOpen}
                  className="cursor-pointer"
                />
              )}
              <span className={navStyle.count}>{wish.length}</span>
            </div>

            <AiOutlineUser
              size={24}
              color="#13101E"
              className="cursor-pointer"
            />
            <div className={navStyle.cart}>
              {!open ? (
                <AiOutlineShopping
                  size={24}
                  color="#13101E"
                  className="cursor-pointer"
                  onClick={handleCartOpen}
                />
              ) : (
                <AiFillShopping
                  size={24}
                  color="#13101E"
                  className="cursor-pointer"
                  onClick={handleCartOpen}
                />
              )}
              <span className={navStyle.count}>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className={navStyle.navM}>
        <div className={navStyle.leftM}>
          <div className="top flex justify-between items-center">
            <Link to={'/'}>
              <label className={navStyle.logo}>
                <img src="../images/logo.png" />
              </label>
            </Link>
            <button
              onClick={handleNav}
              className="transition-transform duration-300 ease-in-out  "
            >
              {!openNav ? (
                <AiOutlineMenu size={24} />
              ) : (
                <AiOutlineClose size={24} />
              )}
            </button>
          </div>

          <div
            className={!openNav ? navStyle.navlinksM : navStyle.navlinksOpen}
          >
            {/* Mapping over link items */}
            {error
              ? 'Something went wrong'
              : loading
              ? 'Loading Data...'
              : data.map((item) => (
                  <div key={item.id}>
                    <Link to={`/categories/${item.id}`}>
                      <li className={navStyle.liM}>
                        {item?.attributes?.title.replace(/_/g, ' ')}
                      </li>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
        <div className={navStyle.rightM}>
          <form>
            <div className={navStyle.inputFieldM}>
              <AiOutlineSearch
                size={24}
                color="#13101E"
                className="cursor-pointer"
              />
              <input
                className={navStyle.inputM}
                type="text"
                placeholder="Search for products or brands..."
                value={search}
                name="search"
                onChange={handleChange}
                autoComplete="off"
                onFocus={handleOpen}
               
              />
            </div>
          </form>

          <div className={navStyle.iconsM}>
            <div className={navStyle.cartM}>
              {!openWishList ? (
                <AiOutlineHeart
                  size={24}
                  color="#13101E"
                  onClick={handleWishOpen}
                  className="cursor-pointer"
                />
              ) : (
                <AiFillHeart
                  size={24}
                  color="#13101E"
                  onClick={handleWishOpen}
                  className="cursor-pointer"
                />
              )}
              <span className={navStyle.count}>{wish.length}</span>
            </div>

            <AiOutlineUser
              size={24}
              color="#13101E"
              className="cursor-pointer"
            />
            <div className={navStyle.cartM}>
              {!open ? (
                <AiOutlineShopping
                  size={24}
                  color="#13101E"
                  className="cursor-pointer"
                  onClick={handleCartOpen}
                />
              ) : (
                <AiFillShopping
                  size={24}
                  color="#13101E"
                  className="cursor-pointer"
                  onClick={handleCartOpen}
                />
              )}
              <span className={navStyle.countM}>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart open={open} setOpen={setOpen} />}
      {openWishList && (
        <Wishlist
          openWishlist={openWishList}
          setOpenWishlist={setOpenWishlist}
        />
      )}

      {openSearch && <Search search={search} setSearch={setSearch} setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default Navbar;
