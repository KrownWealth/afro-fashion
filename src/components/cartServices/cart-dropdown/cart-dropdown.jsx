/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import { useContext, useState } from 'react';
import { Link } from "react-router-dom";

import { CloseButton } from 'react-bootstrap';
import Button from '../../buttons/button.component';
import CartContent from '../cart-content/cart-content';
import { CartContext } from '../../../contexts/cart.context';

import './cart-drop.styles.scss';
const CartDropdown = () => {

  const { cartItems, cartCount } = useContext(CartContext);
  const [ close, setClose ] = useState(false);

  const toggleCartClose = () => {
    if (close) return ;
    setClose(true);
  }

  return (
    <> 
    { close ? (
      <></>
      ) : (
      <div className='cart-drawer'>
        <div className='z-lg'>
          <span onClick={toggleCartClose} className='toggle-message'>
            <CloseButton/>
          </span>
          {
            cartCount === 0 ? (
              <span className='empty-message'>
                Your cart is empty
              </span>
              ) : (
              cartItems.map((item) => (
                <CartContent key={item.id} cartItem={item} />
              ))
            )
          }

          <Link 
            className='ccheckout-ntn' 
            to='/checkout'>
            <Button>Checkout</Button>
          </Link>
        </div>
      </div>
    )}  
    </>
  )
}

export default CartDropdown;