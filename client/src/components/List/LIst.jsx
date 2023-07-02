
import Card from '../Cards/Card';
import useFetch from '../../hooks/usefetch';

// eslint-disable-next-line react/prop-types
const List = ({ cateId , sort }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${cateId}`
  );

  return (
    <div className="flex flex-wrap justify-between gap-y-20">
      {error
        ? 'Something went wrong '
        : loading
        ? 'Loading Data...'
        : data?.map((item) => (
            <div key={item.id}>
              <Card item={item} />
            </div>
          ))}
    </div>
  );
};

export default List;
