import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './CartItem.css'
const CartItem = (props) => {
    const {name,picture}=props.cartLaptop
    const deleteItem = props.handleOneItemDelete
    return (
        <div className='cart-item'>
            <div>
                <img src={picture} alt=""/>
            </div>
            <div>
                <h5>{name}</h5>
            </div>
            <div >
                <button className='cart-icon'onClick={()=>deleteItem(props.cartLaptop)}><AiFillDelete /></button>
            </div>
        </div>
    );
};

export default CartItem;