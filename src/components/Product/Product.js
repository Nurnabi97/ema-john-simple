import React from 'react';

const Product = (props) => {    
    return (
        <div>
            <h4>{props.product.name}</h4>   
            {/* props accessing shop.js product={pd} */}
        </div>
    );
};

export default Product;