import React from 'react';
import './Product.css';

function Product() {
    return (
        
            <div className="product">
                <div className="product__info">
                    <p>12 Pack Bamboo Charcoal Air Purifying Bag, Activated Charcoal Bags Odor Absorber, Moisture Absorber, Natural Car Air Freshener, Shoe Deodorizer, Odor Eliminators For Home, Pet, Closet</p>
                    <p className="product__price">
                        <small></small>
                       <strong> $100</strong>
                       
                       </p>
                    <div className="product__rating">🌟🌟🌟</div>
                </div>
                <img src='https://m.media-amazon.com/images/I/91zZVptj61L._AC_SY200_.jpg' alt='product__image'/>
           <button>Add To Basket</button>
           
            </div>
        
    )
}

export default Product
