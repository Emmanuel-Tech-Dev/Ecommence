
import Card from '../Cards/Card_T'

import collStyle from './CollectionStyle'
import useFetch from '../../hooks/usefetch'



const Collection = () => {

  const {data , loading , error } = useFetch(`/categories?_limit=4&populate=*`)


  const filterProducts = data.slice(0, 4)



console.log(data)


  return (
    <div className={collStyle.container}>
      <div className={collStyle.content}>
        <h1 className={collStyle.h1}>Handpicked Collections</h1>
        <div className="card-section flex justify-between px-8 py-6">
          {error
            ? 'Something went wrong '
            : loading
            ? 'Loading Data...'
            : filterProducts.map((item) => (
                <div key={item.id}>
                  <Card item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Collection
