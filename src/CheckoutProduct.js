import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image , title , price , rating }) {
  const [{cart}, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        id: id,
    })
  }
  return (
    <div className='checkoutProduct'>
        <img className='cpImage' src={image} />
        <div className='cpInfo'>
            <p className='cpTitle'>{title}</p>
            <p className='cpPrice'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='cpRating'>
                {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromCart}>Remove</button>
        </div>
    </div>
  )
}

export default CheckoutProduct