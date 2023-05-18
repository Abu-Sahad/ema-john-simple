import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadProducts = await fetch('products.json');
    const product = await loadProducts.json();

    const storedCart=getShoppingCart();
    const saveCart=[]
    for (const id in storedCart){
        const addedProduct=product.find(pd=>pd.id===id);
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity
            saveCart.push(addedProduct)
        }
    }

    //console.log(product);
    return saveCart
}
export default cartProductLoader