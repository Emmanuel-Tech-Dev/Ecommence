
import useFetch from '../../hooks/usefetch';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';
import catStyle from '../../Pages/Categories/CategoriesStyle';
import { CgMenuGridR } from 'react-icons/cg';
import ListCard from '../Cards/ListCard';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const List = ({ cateId , handleClick , openFilter}) => {

  const [sort , setSort] = useState()

  const id = parseInt(useParams().id);

  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${
      cateId || sort
    }&pagination[page]=${page}&pagination[pageSize]=9`
  );

  const {newData} = useFetch(`categories/${sort}?populate=*`)

  console.log(sort);

  return (
    <>
      <div className={catStyle.tabs}>
        <div className={catStyle.leftSm}>
          <div
            className="icon bg-[#1B4B66] cursor-pointer"
            onClick={handleClick}
          >
            <CgMenuGridR size={24} color="#fefe" />
          </div>
          <span>
            Showing {id} - {page} of 25
          </span>
        </div>

        <div
          className={
            !openFilter
              ? catStyle.rightSm
              : 'hidden  md:flex md:gap-x-56 items-center flex-wrap justify-center '
          }
        >
          <div className="count flex items-center gap-x-2 md:gap-x-3">
            <h1>To show:</h1>
            <span className="bg-[#F1F1F1] px-4 py-2 rounded">
              {data.length}
            </span>
          </div>
          <div className="sort hidden   md:items-center gap-x-3 md:block ">
            <label htmlFor="sort" className="mr-3">
              Sort By:
            </label>
            <select
              name=""
              id="sort"
              className={catStyle.select}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="1">handbags</option>
              <option value="2">Personal Care</option>
              <option value="3">Watches</option>
              <option value="4">Glasses</option>
              <option value="6">Aparels</option>
              <option value="7">Jewellery</option>
              <option value="5">Skincare</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-y-10 justify-between md:gap-y-20">
        {error
          ? 'Something went wrong '
          : loading
          ? 'Loading Data...'
          : data?.map((item) => (
              <ListCard item={item} key={item.id} openFilter={openFilter} />
            ))}
      </div>
      <div className="pagination mt-20 flex justify-center md:justify-start">
        <Pagination page={page} setPage={setPage} openFilter={openFilter} />
      </div>
    </>
  );
};

export default List;
