import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12345"
            title="12 Pack Bamboo Charcoal Air Purifying Bag, Activated Charcoal Bags Odor Absorber, Moisture Absorber, Natural 
          Car Air Freshener, Shoe Deodorizer, Odor Eliminators For Home, Pet, Closet"
            price={11.96}
            rating={5}
            image="https://michaelkors.scene7.com/is/image/MichaelKors/35F1GTVT3B-2432_IS?$ProductMain$&fmt=pjpeg"
          />

          <Product
            id="25623"
            title="100% CottonImported  polyester lining  button closure  machine
             Wash   Quilted satin lined body and sleeves  30 gm of poly-fill insulation"
            price={60.59}
            rating={3}
            image="https://m.media-amazon.com/images/I/51t5CGhWMlS._AC_SR160,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id='53695'
          title='Lenovo - Chromebook 3 11" Chromebook - AMD A6 - 4GB Memory - 32GB eMMC Flash Memory - Onyx Black'
          price={300.25}
          image='https://image.shutterstock.com/image-photo/one-gift-box-wrapped-craft-600w-1915706794.jpg'
          />
          <Product 
           id='36978'
           title='take a pizza order, collect the payment, count out the change and record the transaction.'
           price={55.23}
           image='https://res.cloudinary.com/forallpromos/image/fetch/f_auto/https://www.forallgifts.com/sites/default/files/imagecache/585x585/images/products/736457/wedding-tower_1_2_3_1.jpg'
          />
          <Product   
           id='55555'
           title='Choose a LEGO set featuring Luigi or Mario and you’ll get a free Super Mushroom Surprise expansion set.'
           price={89.22}
           image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6259/6259472_sd.jpg;maxHeight=180;maxWidth=180'
          />
        </div>
        <div className="home__row">
          <Product
           id='44526'
           title='Your child will advance in skills like basic business concepts, mental math, nonverbal communication and customer service.'
           price={400.25}
           image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQViNjdDui9LDgrInMXTEzN4nmg-d-5H0096_1I13wUHJKYBd4VADWB3f5xEyzsqwciqTNz6X1VYQQakdps18RMQwbgSlNKj_2niuQMLERJDBzVEWnY_PBAaQ&usqp=CAE'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
