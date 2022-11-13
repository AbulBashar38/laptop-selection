import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './CartItem.css'
const CartItem = (props) => {
    const {name,picture}=props.cartLaptop
    return (
        <div className='cart-item'>
            <div>
                <img src={picture} alt=""/>
            </div>
            <div>
                <h5>{name}</h5>
            </div>
            <div className='cart-icon'>
                <AiFillDelete />
            </div>
        </div>
    );
};

export default CartItem;