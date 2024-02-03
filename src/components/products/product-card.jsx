import './product-card.styles.scss';
import { useState, useContext } from 'react';
import Button from '../buttons/button.component';
import { CartContext } from '../../contexts/cart.context';
import 
  { FaCircleChevronRight, 
    FaCircleChevronLeft,
    FaCircleInfo,
  } from "react-icons/fa6";
  
const ProductCard = ({ product }) => {
  const { addItemtoCart } = useContext(CartContext);
  const [productInfo, setProductInfo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const setPrice = (price) => {
    const numericPrice = parseFloat(price);

    const roundedPrice = numericPrice.toFixed(2);
    return roundedPrice.includes('.') ? roundedPrice : `${roundedPrice}.00`;
  };
  const { name, price, info, seller, imageUrls, imageUrl } = product;

  const toggleProductInfo = () => setProductInfo(!productInfo);

  const hasMultipleImages = (imageUrls) => Array.isArray(imageUrls) && imageUrls.length > 1;
  const multipleImages = hasMultipleImages(imageUrls);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const productIn = () => addItemtoCart(product);

  return (
    <div className='product-card-container'>
      <div className='image-container'>
        {imageUrls ? (
         <img loading="lazy" src={Array.isArray(imageUrls) ? imageUrls[currentImageIndex] : imageUrls} alt={name} />
        ) : (
          <img loading="lazy" src={imageUrl} alt={name} />
        )}

        {multipleImages && (
          <>
            <div className='chevron-left' onClick={prevImage}><FaCircleChevronLeft /></div>
            <div className='chevron-right' onClick={nextImage}><FaCircleChevronRight /></div>
          </>
        )}
      </div>

      <Button buttonType={'inverted'} onClick={productIn}>
        Add to Cart
      </Button>

      <div className='footer'>
        <div className='info-container'>
          <span className='info-button' onClick={toggleProductInfo}><FaCircleInfo /></span>
        </div>
        <span className='product-name'>{name}</span>
        <span className='product-price'>${setPrice(price)}</span>
      </div>

      {productInfo && (
        <div className='info-content'>
          <div className='product-info'>
            <span>Description</span>: {info}
          </div>
          <div className='product-brand'>
            <span>Seller name</span>: {seller}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;