/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import './preview.styles.scss';

import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductCard from '../../products/product-card'

// collection preview usually seen on the shop page
const CollectionPreview = ({ title, products }) => {
  return (
    <> 
      { products.length !== 0 ?  
        <section id={title.toLowerCase()} className='mt-2 lr-margin'>
          <Container className='card category-preview bg-ws'>
            <h2 className='title'>
              <Link to={title}>
                <span className='bg-gw p-2'>
                  {title.toUpperCase()}
                </span>
              </Link>
            </h2>
            <div className='preview lg-mb'>
              {
                products
                  .filter((_, idx) => idx < 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </Container>
        </section>
      : (<></>)}
    </>
  )
}

export default CollectionPreview;