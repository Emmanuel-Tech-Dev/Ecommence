import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

//import style (tailwind)
import heroStyle from './HeroStyle';

const Hero = () => {
  return (
    <div className={heroStyle.hero}>
      <div className={heroStyle.content}>
        <div className={heroStyle.item}>
          <h1 className={heroStyle.h1}>Carry your Funk</h1>
          <p className={heroStyle.p}>
            Trendy handbags collection for your party animal
          </p>
          <Link to={'/categories/1'}>
            <button className={heroStyle.button}>
              <BsArrowRight size={24} /> See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
