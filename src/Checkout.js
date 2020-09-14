import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue()
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"  src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg" alt="Advertisement"/>

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one click on "add to basket" next to item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping Basket:</h2>
                        { basket.map(item => (
                            <CheckoutProduct
                                key={item.id} 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} 
                            />
                        ))}
                    </div>
                )}
            </div>
            { basket.length > 0  &&  (<div>
                    <Subtotal/>
                </div>
            )}
        </div>
        
    )
}

export default Checkout
