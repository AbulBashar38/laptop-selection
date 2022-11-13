import React from 'react';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
const Product = (props) => {
    const {_id,name,company,about,picture}=props.laptop
    return (
        <div className='product-container'>
            <img src={picture} alt=""/>
            <div className='product-info'>
                <h3>{name}</h3>
                <ul>
                    <li>Processor: {about.processor}</li>
                    <li>RAM: {about.ram}</li>
                    <li>Display: {about.display}</li>
                </ul>
            </div>
            <button className='cart-btn'>Add to cart <BsFillCartPlusFill /></button>
        </div>
    );
};

export default Product;