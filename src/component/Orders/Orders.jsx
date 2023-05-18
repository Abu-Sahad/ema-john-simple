import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    //console.log(cart)
    const [cart, setCart] = useState(saveCart)
    const handleDelete = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-item'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}>
                    <div>
                        <Link to="/checkout"><button className='btn-checkout'>Proceed CheckOut</button></Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;



// import React, { useState } from 'react';
// import Cart from '../Cart/Cart';
// import { Link, useLoaderData } from 'react-router-dom';
// import ReviewItem from '../ReviewItem/ReviewItem';
// import './Orders.css';
// import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

// const Orders = () => {
//     const savedCart = useLoaderData();
//     const [cart, setCart] = useState(savedCart);

//     const handleRemoveFromCart = (id) => {
//         const remaining = cart.filter(product => product.id !== id);
//         setCart(remaining);
//         removeFromDb(id);
//     }

//     const handleClearCart = () => {
//         setCart([]);
//         deleteShoppingCart();
//     }

//     return (
//         <div className='shop-container'>
//             <div className='review-container'>
//                 {
//                     cart.map(product => <ReviewItem
//                         key={product.id}
//                         product={product}
//                         handleRemoveFromCart={handleRemoveFromCart}
//                     ></ReviewItem>)
//                 }
//             </div>
//             <div className='cart-container'>
//                 <Cart
//                     cart={cart}
//                     handleClearCart={handleClearCart}
//                 >
//                     <Link className='proceed-link' to="/checkout">
//                         <button className='btn-proceed'>Proceed Checkout</button>
//                     </Link>
//                 </Cart>
//             </div>
//         </div>
//     );
// };

// export default Orders;