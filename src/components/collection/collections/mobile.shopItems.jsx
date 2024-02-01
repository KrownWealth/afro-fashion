/* This is a Mobile first Component. Designed to render on mobile devices and smaller screen sizes */

import { useContext } from 'react';
import CollectionPreview from './mobile.preview';
import { CategoriesContext } from '../../../contexts/categories.context';

// collections mapped to shop route
const Collections = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  let hasProducts = false;

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        if (products && products.length > 0) {
          hasProducts = true;
          
          return (
            <CollectionPreview key={title} title={title} products={products} />
          );
        }

        return null;
      })}

      {!hasProducts && (
        <div className="mt-2 card container bg-ws">
          <hr className='-mt'/>
          <p className='mx-auto'>No product is available now... Please try again later</p>
        </div>
      )}
    </>
  );
}

export default Collections