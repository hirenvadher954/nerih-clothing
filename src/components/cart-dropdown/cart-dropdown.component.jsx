import './cart-dropdown.styles.scss';


import React from 'react';
import Button from "../button/button.component";

const CartDropdown = props => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};



export default CartDropdown;
