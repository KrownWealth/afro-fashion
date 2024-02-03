import { useContext } from 'react';
import CollectionPreview from './preview';
import { CategoriesContext } from '../../../contexts/categories.context';

// collections as categories mapped to shop route
const Collections = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  let hasProducts = false;

  return (
    <>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          if (products && products.length > 0) {
            hasProducts = true;
            
            return (
              <CollectionPreview key={title} title={title} products={products} />
            )
          }

          return null;
      })}

      { hasProducts && <div className='lg-div'></div> }

      {
        !hasProducts && (
        <div className="mt-1 p-2 card container bg-ws lg-div">
          <hr className='-mt'/>
          <p className='mx-auto fs-large'>No product available now... Try again later</p>
        </div>
      )}
    </>
  )
}

export default Collections;