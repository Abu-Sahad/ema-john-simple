import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleClearCart, children }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0

    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }
    let tax = total * 7 / 100;
    let grandTotal = total + tax + shipping
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Selected Items:{quantity}</h5>
            {/* cart.length */}
            <p>Total Price: ${total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear'>Clear Cart</button> <br />
            {children}

        </div>
    );
};

export default Cart;







// import React, { useEffect, useState } from 'react';
// import Blog from '../Blog/Blog';
// import './Blogs.css'
// import Cart from '../Cart/Cart';
// const Blogs = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [cart, setCart] = useState([]);
//     useEffect(() => {
//         fetch('knowledge.json')
//             .then(res => res.json())
//             .then(data => setBlogs(data))
//     }, []);

//     const handleClick = (product) => {
//         const newCart = [...cart, product]
//         setCart(newCart)

//         ///alhhhh
//         if (addedProductIds.includes(product.id)) {
//             alert(`"${product.discription}" is already in the cart.`);
//         } else {
//             setAddedProductIds([...addedProductIds, product.id]);
//         }

//     }
//     const [addedProductIds, setAddedProductIds] = useState([]);
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const items = cart.filter(item => addedProductIds.includes(item.id));
//         setCartItems(items);
//     }, [cart, addedProductIds]);

//     return (
//         <div className='all-blog'>
//             <div className='blog-part'>
//                 {

//                     blogs.map(product => <Blog
//                         product={product}
//                         key={product.id}
//                         handleClick={handleClick}
//                     ></Blog>)
//                 }
//             </div>
//             <div className='blog-part-second'>
//                 <Cart
//                     cart={cart}
//                     cartItems={cartItems}
//                 ></Cart>
//             </div>
//         </div>
//     );
// };

// export default Blogs;


