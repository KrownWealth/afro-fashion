/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import { CategoriesContext } from '../../../contexts/categories.context';
import { useLoading } from '../../../contexts/loading.context';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../products/product-card';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './category.styles.scss';

// category route is rendered when users click on a category from the index page
const Category = () => {
  const { category } = useParams(); 
  const { showLoading, hideLoading } = useLoading(); 
  const { categoriesMap } = useContext(CategoriesContext);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    showLoading();
    setProducts(categoriesMap[category]);
    hideLoading();
  }, [category, showLoading, hideLoading, categoriesMap])

  return (
    // section id issues a category with a dynamic link to target
    <section id={category.toLowerCase()} className='y-m lr-margin y-mb'>
      <Container className="card container bg-ws">
        <h1 className='category-title y-m'>
          <span className='bg-gw p-2'>{category.toUpperCase()}</span>
        </h1>
        { !products ? (
          <>
            <hr className='-mt'/>
            <p className='mx-auto'>No {category} items are available at the moment...</p>
          </>
        ) : (
        <div className='category-route-container -lg'>
          {
            products && products.map(
              (product) => (
                <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
        )}
      </Container>
      <div className='lg-div'></div>
    </section>
  )
}

export default Category;