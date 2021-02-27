import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'    //to view product data in this section thats why import product.js 
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const addHandlerCart = (product) => {
        console.log("addHandlerCart", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
           <div className="shop-products">
           <ul>
             {
                products.map(pd => <Product 
                    addHandlerCart = {addHandlerCart} 
                    product={pd}
                    ></Product>)    
                // <Product> is a component, product for accessing by props & pd dynamic part
               
           }
           </ul>
           </div>
           <div className="shop-cart">
              <Cart cart={cart}></Cart>
           </div>
          
        </div>
    );
};

export default Shop;