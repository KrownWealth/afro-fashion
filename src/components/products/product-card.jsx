import { useState, useContext } from 'react';
import Button from '../buttons/button.component';
import { useAlert } from '../../contexts/alert.context';
import { addToSavedItems } from '../../utils/writeBatch';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import 
  { FaCircleChevronRight, 
    FaCircleChevronLeft,
    FaCircleInfo,
  } from "react-icons/fa6";

import './product-card.styles.scss';
 
const ProductCard = ({ product }) => {
  const { addAutoCloseAlert } = useAlert();
  const { userId } = useContext(UserContext);
  const { addItemtoCart } = useContext(CartContext);
  const [productInfo, setProductInfo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const setPrice = (price) => {
    const numericPrice = parseFloat(price);
    const roundedPrice = numericPrice.toFixed(2);
    return roundedPrice.includes('.') ? roundedPrice : `${roundedPrice}.00`;
  };
  const { name, price, info, seller, imageUrls } = product;

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

  const handleSaveItem = () => {
    const itemToAdd = {name, price};
    addToSavedItems(userId, itemToAdd, "savedItems");

    addAutoCloseAlert("success", 'Item saved successfully!')
  }

  return (
    <div className='product-card-container'>
      <div className='image-container'>
        <img loading="lazy" src={Array.isArray(imageUrls) ? imageUrls[currentImageIndex] : imageUrls} alt={name} />

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
        <div className='info-content mt-1 mb-2 bg-gray text-white'>
          <div className='product-info mt-2'>
            <span>Description</span>: {info}
          </div>
          <div className='product-brand'>
            <span>Seller name</span>: {seller}
          </div>
          <div 
            onClick={handleSaveItem}
            className='pt-3 pb-1 flex-just-center'
          >
            <div className='btn btn-info'> Save Item for later</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;