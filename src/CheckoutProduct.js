import React from 'react';
import './CheckoutProduct.css';


function CheckoutProduct() {
    return (
   
            
            <div className="checkoutProduct">
                <img src="https://res.cloudinary.com/forallpromos/image/fetch/f_auto/https://www.forallgifts.com/sites/default/files/imagecache/585x585/images/products/736457/wedding-tower_1_2_3_1.jpg" 
                alt="" className="checkoutProduct__image" />

             
           <div className="checkoutProduct__info">
               <p className="checkoutProduct__title">
                   Beautiful memory encased in glass for ever


               </p>

               <p className="checkoutProduct__price">
                   <small>$</small>
                   <strong>65</strong>

               </p>
               <div className="checkoutProduct__rating">
                   🌟🌟 

               </div>
               <button>Remove From Basket</button>
           </div>
            </div>
     
    )
}

export default CheckoutProduct
