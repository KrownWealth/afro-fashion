import './checkout.styles.scss';
import { useContext } from 'react';

import CheckoutContent from './checkout';
import GetExchangeRate from '../../../utils/rate.utils';
import { CartContext } from '../../../contexts/cart.context';


const Checkout = () => {
  const { cartItems } = useContext(CartContext);

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
      <br/>
      <table className="card table table-light table-hover">
        <thead className='checkout-table'>
          <tr className='theader'>
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
            <td></td>
            <td></td>
            <td></td>
            <td className='checkout-total'>
              <b>SUB-TOTAL:</b> &nbsp;
              <h5 style={{display: 'inline-block'}}>${`${cartTotal}`}.00</h5>
            </td>
          </tr>
          <tr>
            <td className='payButton btn btn-warning'>
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