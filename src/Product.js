import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { initialState } from './reducer'


function Product({id, title, image, price, rating}) {
    
    const [, dispatch] = useStateValue(initialState)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>&pound;</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((i) => (
                            <p key={i}>★</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="product" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
