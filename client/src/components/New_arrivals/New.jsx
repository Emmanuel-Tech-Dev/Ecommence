import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';

//importing styles
import newStyle from './NewStyle';
import useFetch from '../../hooks/usefetch';

const New = () => {
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

      <div className="card-section flex justify-between items-center px-8 py-6">
        {error
          ? 'Something went wrong '
          : loading
          ? 'Loading Data...'
          : filterProducts.map((item) => (
              <div key={item.id}>
                <Card item={item}  />
              </div>
            ))}
      </div>
    </div>
  );
};

export default New;
