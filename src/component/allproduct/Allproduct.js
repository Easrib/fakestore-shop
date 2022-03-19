import React, { useEffect, useState } from 'react';
import Singleproduct from '../singleproducts/Singleproduct';

const Allproduct = (props) => {

    const [allproduct, setAllproduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAllproduct(data))
    }, [])

    return (
        <div>
            <h1>All Products</h1>
            <div className="row">
                {
                    allproduct.map(product => (<Singleproduct key={product.id} product={product} AddToCart={props.AddToCart} ></Singleproduct>))
                }

            </div>
        </div>
    );
};

export default Allproduct;