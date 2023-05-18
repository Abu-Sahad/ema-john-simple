
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    ///localstorage save area
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step-1
        for (const id in storedCart) {
            //step-2 get the product by using id
            //console.log(id);
            const addedProduct = products.find(product => product.id === id)
            //console.log(addedProduct)
            //step-3 get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                //step-4 add the added product to the save cart
                saveCart.push(addedProduct)
            }
        }
        //step-5 set the cart

        setCart(saveCart)
    }, [products]);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)

                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <div>
                        <Link to="/orders"><button className='btn-checkout'>Review Order</button></Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;