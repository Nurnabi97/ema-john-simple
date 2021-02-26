import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'    //to view product data in this section thats why import product.js 
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
           <div className="shop-products">
           <ul>
             {
                products.map(pd => <Product product={pd}></Product>)    
                // <Product> is a component, product for accessing by props & pd dynamic part
            }
           </ul>
           </div>
           <div className="shop-cart">
                <h1>this is shop-cart</h1>
           </div>
          
        </div>
    );
};

export default Shop;