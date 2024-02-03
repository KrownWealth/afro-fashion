import './cart-content.styles.scss';

const CartContent = ({ cartItem }) => {
  const { name, imageUrl, imageUrls, price, quantity } = cartItem;

  return (
    <>
      <div className='cart-item-container'>
        <img loading="lazy" 
          src={imageUrl || imageUrls}
          alt={name}
        />
        <div className='item-details'>
          <span className='name'>{name}</span>
          <span className='price'>
            <strong>{quantity}</strong> of&nbsp; 
            <strong>${price}</strong>
          </span>
        </div>
      </div>
    </>
  )
}

export default CartContent;