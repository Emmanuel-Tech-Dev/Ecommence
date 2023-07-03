
import Card from '../Cards/Card';
import useFetch from '../../hooks/usefetch';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';
import catStyle from '../../Pages/Categories/CategoriesStyle';
import { CgMenuGridR } from 'react-icons/cg';


// eslint-disable-next-line react/prop-types
const List = ({ cateId  }) => {

  const [page , setPage] = useState(1)

   

  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${cateId}&pagination[page]=${page}&pagination[pageSize]=9`
  );

  console.log(data?.meta)


  return (
    <>
      <div className={catStyle.tabs}>
        <div className={catStyle.leftSm}>
          <div className="icon bg-[#1B4B66]">
            <CgMenuGridR size={24} color="#fefe" />
          </div>
          <span>
            Showing 1 - {page} of{' '}
           25
          </span>
        </div>

        <div className={catStyle.rightSm}>
          <div className="count flex items-center gap-x-3">
            <h1>To show:</h1>
            <span className="bg-[#F1F1F1] px-4 py-2 rounded">
              {data.length}
            </span>
          </div>
          <div className="sort flex items-center gap-x-3">
            <label htmlFor="sort">Sort By:</label>
            <select
              name=""
              id="sort"
              className={catStyle.select}
              
            >
              <option value="handbags">handbags</option>

              <option value="personalCare">Personal Care</option>
              <option value="watches">Watches</option>
              <option value="glasses">Glasses</option>
            </select>
          </div>
        </div>
      </div>

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
      <div className="pagination mt-20">
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default List;
