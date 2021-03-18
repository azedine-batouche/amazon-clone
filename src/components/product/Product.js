import React from 'react'
import './Product.css';
import { IoIosStar } from "react-icons/io";
import Button from '../button/Button';
import { useStateValue } from "../../context/StateProvider";

function Product({id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                             <IoIosStar />    
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="product__img" />
            <Button 
                content="Add to Basket"
                click={addToBasket}
            />
        </div>
    )
}

export default Product
