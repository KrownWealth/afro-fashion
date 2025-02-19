import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from '../../products/product-card';
import { useContext, useState, useEffect } from 'react';
import { getSellerInfo } from '../../../utils/firebase.utils';
import { useLoading } from '../../../contexts/loading.context';
import { BrandContext } from '../../../contexts/brand.context';

const BrandCollection = () => {
  const { seller } = useParams();
  const { brandsMap } = useContext(BrandContext);
  const { showLoading, hideLoading } = useLoading();
  const [ sellerInfo, setSellerInfo ] = useState([]);
  const [ brands, setBrands ] = useState(brandsMap[seller]);
  

  useEffect(() => {
    showLoading();
    
    if (brandsMap[seller] !== brands) setBrands(brandsMap[seller]);
  
    const fetchData = async () => {
      const info = await getSellerInfo(seller);
      setSellerInfo(info);
    }

    fetchData();
    hideLoading();
  }, [showLoading, seller, brandsMap, hideLoading, brands]);

  return (
    // section id issues a brand with a dynamic link to target
    <section id={seller?.toLowerCase()} className='mt-1'>
      <Container className="card container bg-ws mx-auto">
        <h1 className='mt-2 bg-gw p-2 mx-auto'>
          <span>{seller?.toUpperCase()}</span>
        </h1>

        {brands && Object.keys(brands).length > 0 ? (
          <>
            <div className='mt-3 mx-auto bg-white p-2'>
              <span className='block'><b>Bio: &nbsp;</b> {sellerInfo?.bio || "Not available"}</span>
              <span className='block'><b>Phone: &nbsp;</b> {sellerInfo?.phone || "Not available"}</span>
              <span className='block'><b>Location: &nbsp;</b> {sellerInfo?.address || "Not available"}</span>
            </div>

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
        </>
        ) : (
        <>
          <hr className='-mt' />
          <p className='mx-auto'>No {seller} items are available at the moment...</p>
        </>
        )}
      </Container>
      <div className='lg-div'></div>
    </section>
  );
};

export default BrandCollection;