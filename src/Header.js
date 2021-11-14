import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';




function Header() {
    return (
        <div className='header'>
             <div className="header__logo">
       <StorefrontIcon className='header__logoImage' fontSize='large'/>
       <h2 className='header__logoTitle'>eSHOP</h2>

     </div>
       <div className="header__search">
         <input type='text' className='header__searchInput'/>
         <SearchTwoToneIcon className='header__searchIcon'/>
         </div>
         <div className="header__nav">
           <div className="nav__item">
             <span className="nav__itemLineOne">Hello Guest</span>
             <span className="span navItemLineTwo">Sign In</span>

           </div>
           <div className="nav__item">
           <span className="nav__itemLineOne">Your</span>
             <span className="span navItemLineTwo">Shop</span>

             </div>
             <div className="nav__itemBasket">
               <ShoppingBasketIcon />
            
           
             <span className="span navItemLineTwo nav__basketCount">0</span>

             </div>
         </div>
      
    
        </div>
    )
}

export default Header
