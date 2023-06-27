import React from 'react'
import Card from '../Cards/Card'
import useFetch from '../../hooks/usefetch'


// eslint-disable-next-line react/prop-types
const List = ({ cateId }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${cateId}`
  );

  return (
    <div className="flex flex-wrap justify-between gap-y-20">
      {data?.map((item) => (
        <div key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default List

