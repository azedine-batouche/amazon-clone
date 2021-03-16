import React from 'react'
import './Product.css';
import { IoIosStar } from "react-icons/io";

function Product({ item, image, price, nbStars }) {
    
//     const stars = [];
//     let i = 0;

//   for (i; i<nbStars; i++) {
//     stars.push(<p className="ctn__star"><IoIosStar/></p>)
//   }
    return (
        <div className="product">
            <div className="product__info">
                <p>{ item }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {Array(nbStars)
                        .fill()
                        .map((_, i) => (
                             <IoIosStar />    
                        ))

                    }
                    {/* { stars }   */}
                </div>
            </div>
            <img src= { image} alt="product__img" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
