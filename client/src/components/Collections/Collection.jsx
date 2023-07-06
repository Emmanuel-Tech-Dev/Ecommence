import Card from '../Cards/Card_T';

import collStyle from './CollectionStyle';
import useFetch from '../../hooks/usefetch';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Collection = () => {
  const { data, loading, error } = useFetch(`/categories?_limit=4&populate=*`);

  const filterProducts = data.slice(0, 4);

  const settings = {
   
    className: 'center' ,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: null, // Hide next arrow
    prevArrow: null, // Hide prev arrow

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1.57 ,
          slidesToScroll: 1,
         
        },
      },
    ],
  };

  return (
    <div className={collStyle.container}>
      <div className={collStyle.content}>
        <h1 className={collStyle.h1}>Handpicked Collections</h1>
        <div className="px-2 md:px-8 py-6">
          {loading ? (
          'Loading Data...'
        ) : error ? (
          'Something went wrong'
        ) : (
          <Slider {...settings}>
          {filterProducts.map((item) => (
             
                  <Card item={item} key={item.id}/>
                
              ))}
              </Slider>
              )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
