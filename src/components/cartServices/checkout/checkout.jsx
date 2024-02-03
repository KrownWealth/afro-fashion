import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';

const CheckoutContent = ({ cartItem }) => {

  const { addItemtoCart, removeItemfromCart } = useContext(CartContext);
  const { imageUrl, imageUrls, name, quantity } = cartItem;
  const itemTotal = cartItem.price * cartItem.quantity;

  return (
  <>
    <tr className='align-middle'>
      <td className='checkout-items-img'>
        <img loading="lazy"
          src={imageUrl || imageUrls}
          alt={name}
        />
      </td>
      <td className='checkout-name'>{name}</td>
      <td className='checkout-items-row'>
        <span className='decrement' onClick={() => removeItemfromCart(cartItem)}>
          &#10094;
        </span>
        <span className='quantity'>{quantity}</span>
        <span className='increment' onClick={() => addItemtoCart(cartItem)}>
          &#10095;
        </span>
      </td>
      <td className='checkout-price'>${itemTotal}.00</td>
    </tr>
  </>   
  )
}

export default CheckoutContent;