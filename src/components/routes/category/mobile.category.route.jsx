/* This is a Mobile first Component. Designed to render on mobile devices and smaller screen sizes */

import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './category.styles.scss';

import { Container } from 'react-bootstrap';
import ProductCard from '../../products/product-card';
import { CategoriesContext } from '../../../contexts/categories.context';


// category route is rendered when users click on a category from the index page
const Category = () => {

  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <section id={category.toLowerCase()} className='mt-1 lr-margin'>
        <Container className="card bg-ws lr-padding">
          <h1 className='category-title y-p'>
            <span className='bg-gw p-2'>{category.toUpperCase()}</span>
          </h1>
          { !products ? (
            <>
              <hr className='-mt'/>
              <p className='mx-auto'>No {category} items are available at the moment...</p>
            </>
          ) : (
          <div>
            {
              products && products.map(
              (product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
          )}
       </Container>
      
      </section>
    </>
  )
}

export default Category;