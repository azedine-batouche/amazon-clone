import React from 'react';
import './CheckoutProduct.css';
import { IoIosStar } from "react-icons/io";
import Button from '../button/Button';
import { useStateValue } from '../../context/StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                        .fill()
                        .map((_, i) => (
                             <IoIosStar />    
                        ))
                    }
                </div>
                <Button
                    content="Remove form the basket"
                    click={removeFromBasket}/>
            </div>
        </div>
    )
}

export default CheckoutProduct
