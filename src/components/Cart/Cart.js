import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, prd) => total + prd.price,0)  //(total(main total), prd(all product) callback total + prd.price (for adding price),0 initial value. (total is let not  const)) 
    
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total*.1;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Cost: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;