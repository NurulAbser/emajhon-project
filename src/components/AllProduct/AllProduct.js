import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './AllProduct.css'
const AllProduct = (props) => {
    //console.log(props)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <br/>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock order soon</small></p>
                <button 
                    className="main-button" 
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>
        </div>

            {/* <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div>
                <h4>{props.product.name}</h4>
            </div> */}
        </div>
    );
};

export default AllProduct;