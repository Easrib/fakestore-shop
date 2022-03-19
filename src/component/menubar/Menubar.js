import React from 'react';
import './Menubar.css'

const Menubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2">Logo</div>
                    <div className="col-md-10">
                        <ul className='d-flex justify-content-end p-2'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Cart <sup>{props.count}</sup></li>
                            <li>logIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;