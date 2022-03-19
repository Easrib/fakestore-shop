import React, { useState } from 'react';
import Reactmodal from '../Reactmodal/Reactmodal';
import "./Singleproduct.css"

const Singleproduct = (props) => {
    const { title, image } = props.product

    return (
        <div className='col-md-4'>
            <div className="card m-2">
                <img className='w-50' src={image} alt="" />
                <h1>{title.slice(0, 10)}</h1>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-primary' onClick={props.AddToCart} >Add to cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <Reactmodal product={props.product}></Reactmodal>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;