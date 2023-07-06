import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//importing styles
import newStyle from './NewStyle';
import useFetch from '../../hooks/usefetch';

const New = () => {
  const settings = {
  
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          slidesToShow: 1.57,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data, loading, error } = useFetch(`/products?_limit=4&populate=*`);

  const filterProducts = data
    .slice()
    .reverse()
    .slice(0, 4)
    .sort(
      (a, b) =>
        new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
    );

  return (
    <div className="py-12">
      <div className={newStyle.heading}>
        <h1 className={newStyle.title}>New Arrivals</h1>
        <Link to={'/categories/1'}>
          <button className={newStyle.button}>
            View All
            <IoIosArrowForward size={24} />
          </button>
        </Link>
      </div>

      <div className="px-2 md:px-8">
        {loading ? (
          'Loading Data...'
        ) : error ? (
          'Something went wrong'
        ) : (
          <Slider {...settings}>
            {filterProducts.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default New;
