/* This is a Mobile first Component. Designed to render on mobile devices and smaller screen sizes */

import './preview.styles.scss';

import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductCard from '../../products/product-card'

// collection preview usually seen on the shop page
const CollectionPreview = ({ title, products }) => {
  return (
    <>
      { products.length !== 0 ? <section id={title.toLowerCase()} className='mt-1 lr-margin'>
        <Container className='card bg-ws lr-padding'>
          <h2 className='title mx-auto y-p'>
            <Link to={title}>
              <span className='bg-gw p-2'>
                {title.toUpperCase()}
              </span>
            </Link>
          </h2>
          <div className='preview'>
          {
            products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
          }
          <br/>
          </div>
        </Container>
      </section>
      : (<></>)}
    </>
  )
}

export default CollectionPreview;