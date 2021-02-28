import React, { useState } from 'react';
import fakeData from '../../fakeData';
import AllProduct from '../AllProduct/AllProduct';
import CartSummery from '../Cart/CartSummery';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
    console.log('product added', product);
    const newCart = [...cart, product];
    setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd =>
                    <AllProduct 
                        handleAddProduct = {handleAddProduct}
                        product={pd}>
                    </AllProduct>)
                }


                {/* {
                    products.map(pd => <product product={pd}>{pd.name}</product> )
                } */}
                {/* {
                    products.map(pd => <product>{pd.name}</product> )
                } */}
                {/* <ul>
                {
                    products.map(pd => <li>{pd.name}</li>)
                }
                </ul> */}
                
            </div>
            <div className="cart-container">
                <CartSummery cart={cart}></CartSummery>
                {/* <h3>This is cart</h3>
                <h5>Order Summary: {cart.length}</h5> */}
            </div>
        </div>
    );
};

export default Shop;