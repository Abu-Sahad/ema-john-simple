import React from 'react';
import './ReviewContainer.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product, handleDelete }) => {
    console.log(product)
    return (
        <div className='review-container'>
            <div className='review-img'>
                <img src={product.img} alt="" />
            </div>
            <div className='review-item-details'>

                <h3>{product.name}</h3>
                <p>Price:${product.price}</p>
                <p>Quantity:{product.quantity}</p>
            </div>
            <button onClick={()=>handleDelete(product.id)} className='review-button'><FontAwesomeIcon className='icon-color' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;