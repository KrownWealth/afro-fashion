import './checkout.styles.scss';
import { useContext } from 'react';
import CheckoutContent from './checkout';
import GetExchangeRate from '../../../utils/rate.utils';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';


const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const address = currentUser?.address || "[To receive items via delivery, update your address from your profile]"

  /*  calculating checkout total 
      itemTotal = price * quantity
      return cartTotal = itemTotal ++ */

  const cartTotal = cartItems.map(
    (item) => item.price * item.quantity).reduce(
      (total, itemTotal) => total + itemTotal, 0
    )

  const todaysBMRate = GetExchangeRate() + 400;
  let USDtoNGNRate = (todaysBMRate) || 1600;
  const cartTotalinNaira = cartTotal * USDtoNGNRate;

  return (
    <>
      <table className="card table table-light table-hover">
        <thead className='checkout-table'>
          <tr className='t-header'>
            <th scope="col">Item</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th className='price'>Price</th>
          </tr>
        </thead>

        <tbody colSpan="2" className='checkout-table'>
          {
            cartItems.map(
              (item) =>
                <CheckoutContent key={item.id} cartItem={item} />
            )
          } 
          <tr>
            <td></td><td></td><td></td>
            <td className='checkout-total'>
              <b>SUB-TOTAL:</b> &nbsp;
              <h5 style={{display: 'inline-block'}}>${`${cartTotal}`}.00</h5>
            </td>
          </tr>
          <tr className='pay-action'>
            <td className='pay-address font-awesome fs-smaller'>
              <b>Deliver to:</b> &nbsp; <span className='ml-2'>{address}</span>
            </td>
            <td className='pay-button btn'>
              Pay NGN {cartTotalinNaira}
            </td>
          </tr>
        </tbody>
      </table>

      <div className='pay-gap'></div>
      </>
  )
}

export default Checkout;