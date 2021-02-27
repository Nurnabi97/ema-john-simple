import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => { 
    console.log(props)
    const {name, img, seller, price, stock} = props.product   
    return (
      <div className="product">
        <div>
           <img src={img} alt=""/>
        </div>
        <div className="product-info">
            <h4 className="product-name">{name}</h4>   
            {/* props accessing shop.js product={pd} */}
            <h5>By:{seller}</h5>
            <h4>${price}</h4>
            <h6>Only {stock} left in stock -Order soon</h6>
            <button className="btn-cart"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
        </div>
      </div>
    );
};

export default Product;