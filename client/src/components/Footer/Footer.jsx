import { FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'

import footerStyle from './FooterStyle'

const links = [

  { name: "Skincare" },
  { name: "Personal Care" },
  { name: "Handbags" },
  { name: "Apparel" },
  { name: "Watches" },
  { name: "Eye Wear" },
  { name: "Jewellery" },

]

const linksA = [

  { name: "Contact Us" },
  { name: "About Us" },
  { name: "Careers" },
  { name: "Press" },

]

const linksP = [

  { name: "Return Policy" },
  { name: "Terms of Use" },
  { name: "Sitemap" },
  { name: "Security" },
  { name: "Privacy" },
  { name: "EPR Compliance" },

]




const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.left}>
        <div className="item">
          <h1 className={footerStyle.h1}>Shop by Category</h1>
          <div className="links">

            {links.map((item) => (

              <div key={item.name}>
                <li className={footerStyle.links}>{item.name}</li>
              </div>

            ))}

          </div>
        </div>
        <div className="item">
          <h1 className={footerStyle.h1}>About</h1>
          <div className="links">

            {linksA.map((item) => (

              <div key={item.name}>
                <li className={footerStyle.links}>{item.name}</li>
              </div>

            ))}

          </div>
        </div>
        <div className="item">
          <h1 className={footerStyle.h1}>Policy</h1>
          <div className="links">

            {linksP.map((item) => (

              <div key={item.name}>
                <li className={footerStyle.links}>{item.name}</li>
              </div>

            ))}

          </div>
        </div>


      </div>
      <div className={footerStyle.right}>
        <div className={footerStyle.socials}>
          <div className={footerStyle.icon}>
            <FaFacebookF size={24} color='#1B4B66' />
          </div>
          <div className={footerStyle.icon}>
            <FaTwitter size={24} color='#1B4B66' />
          </div>
          <div className={footerStyle.icon}>
            <RiInstagramFill size={24} color='#1B4B66' />
          </div>
          <div className={footerStyle.icon}>
            <FaYoutube size={24} color='#1B4B66' />
          </div>
        </div>
        <div className={footerStyle.location}>
          <IoLocation size={24} /> united States
        </div>
        <div className={footerStyle.copyright}>
          © 2021 | Cora Leviene All Rights Reserved
        </div>
      </div>

    </div>
  )
}

export default Footer
