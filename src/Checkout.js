import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{cart},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='check_left'>
            <img className='check_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
            <div>
                <h2 className='check_title'>Your cart</h2>

                {cart.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                   />
                ))}

            </div>
        </div>
        <div className='check_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout