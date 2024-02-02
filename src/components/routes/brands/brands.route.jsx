import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from '../../products/product-card';
import { useContext, useState, useEffect } from 'react';
import { useLoading } from '../../../contexts/loading.context';
import { BrandContext } from '../../../contexts/brand.context';

const BrandCollection = () => {
  const { seller } = useParams();
  const { brandsMap } = useContext(BrandContext);
  const { showLoading, hideLoading } = useLoading(); 
  const [brands, setBrands] = useState(brandsMap[seller])
  
  useEffect(() => {
    showLoading();
    if (brandsMap[seller] !== brands) setBrands(brandsMap[seller])
    hideLoading();
  }, [showLoading, seller, brandsMap, hideLoading, brands]);

  return (
    // section id issues a brand with a dynamic link to target
    <section id={seller?.toLowerCase()} className='mt-1'>
      <Container className="card container bg-ws">
        <h1 className='mt-2 bg-gw p-2 mx-auto'>
          <span>{seller?.toUpperCase()}</span>
        </h1>
        <h6 className='mx-auto'>

        </h6>
        <h6>{seller?.contactInfo}</h6>
        {brands && Object.keys(brands).length > 0 ? (
          <div className='col-md-3 mb-2'>
            {Object.entries(brands).map(([category, categoryProducts]) => (
              <div key={category}>
                <h6 className='flex-just-center mt-2 -mb bl-ordered font-awesome'>
                  {category.toUpperCase()}
                </h6>
                {categoryProducts.map((brand) => (
                  <ProductCard key={brand.id} product={brand} />
                ))}
                <br/>
              </div>
            ))}
          </div>
          ) : (
          <>
            <hr className='-mt' />
            <p className='mx-auto'>No {seller} items are available at the moment...</p>
          </>
        )}
      </Container>
    </section>
  );
};

export default BrandCollection;