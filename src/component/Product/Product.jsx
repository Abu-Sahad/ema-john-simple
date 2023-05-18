import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { price, name, seller, ratings, img } = props.product
    const handleAddToCart = props.handleAddToCart;

    //console.log(props.handleAddToCart)
    return (
        <div className='product-area'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacture:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-info'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;