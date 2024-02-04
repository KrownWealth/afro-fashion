import CheckoutContent from './checkout';
import PaymentCard from './payment.card';
import { useContext, useState } from 'react';
import { Card, Button, } from 'react-bootstrap';
import GetExchangeRate from '../../../utils/rate.utils';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [ payCard, setPayCard ] = useState(false);

  const { address, displayName, email, phone } = currentUser || {};

  const togglePayCard = () => {
    currentUser ? setPayCard(true) : setPayCard(false);
  }

  const closePayCard = () => {
    setPayCard(false);
  }

  const cartTotal = cartItems.map(
    (item) => item.price * item.quantity).reduce(
      (total, itemTotal) => total + itemTotal, 0
    )

  const todaysBMRate = GetExchangeRate() + 400;
  let USDtoNGNRate = (todaysBMRate) || 1600;
  const cartTotalinNaira = cartTotal * USDtoNGNRate;

  return (
    <>
      <table className="mt-1 card table table-light table-hover">
        <thead className='checkout-table'>
          <tr className='t-header'>
            <th scope="col" className="w-25">Item</th>
            <th scope="col" className="w-25">Title</th>
            <th scope="col" className="w-25">Quantity</th>
            <th scope="col" className="w-25">Price</th>
          </tr>
        </thead>

        <tbody className='checkout-table'>
          {
            cartItems.map(
              (item) =>
                <CheckoutContent key={item.id} cartItem={item} />
            )
          } 
          <tr className='total'>
            <td></td><td></td><td></td> 
            <td className='sub-total fs-smaller'>
              SUB-TOTAL: &nbsp; <h6>${`${cartTotal}`}</h6>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='pay-button -mt2'>
        <div  onClick={togglePayCard} className='p-3 btn btn-info'>
          Pay NGN {cartTotalinNaira}
        </div>
      </div>

      <div className='pay-gap'></div>

      { payCard && 
        <PaymentCard
          amount={cartTotalinNaira}
          email={email} 
          name={displayName} 
          phone_number={phone} 
          closePayCard={closePayCard} 
        />
      }

      <Card className="mb-3 mx-3 bg-ws">
        <Card.Body>
          <div className="flex-space-bet">
            <div className="mb-3 mb-md-0">
              <h5 className="card-title">Delivery Address</h5>
              <p className="card-text fs-smaller">{address || "To receive items via delivery, update your address from your profile..."}</p>
            </div>
            <div className='v-center'>
              <Button href='/profile' className='btn btn-success fullWidth'>Update Address</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className='lg-div'></div>
    </>
  )
}

export default Checkout;