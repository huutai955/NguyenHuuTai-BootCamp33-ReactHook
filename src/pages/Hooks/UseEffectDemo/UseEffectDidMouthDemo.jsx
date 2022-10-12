import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

export default function UseEffectDidMouthDemo() {
    const [arrProduct, setArrProduct] = useState([]);

    const getAPI = async () => {
        try {
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product',
                method: 'GET'
            });

            setArrProduct(result.data.content);
            console.log("result", result.data.content)
        } catch (err) {
            console.log(err)
        }
    }

    let callbackFunction = () => {
        // Tham số thứ 2 là mảng rỗng => hàm callback thứ 1
        // chỉ chạy 1 lần sau  render
        getAPI();
    }

    useEffect(callbackFunction, [])
    let renderProduct = (arr) => {
        return arr.map((prod, index) => {
            return <div className="col-3" key={index}>
                <div className="card">
                    <img src={prod.image} alt="" />
                    <div className="card-body">
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                        <button className='btn btn-dark'>Add to cart <i className='fa fa-cart-plus'></i></button>
                    </div>
                </div>
            </div>
        })
    }

    console.log(arrProduct);
    return (
        <div className='container'>
            <h3>Shoe Shop</h3>
            <div className="row">
                {/* <div className="col-3">
                    <div className="card">
                        <img src="./img/black-car.jpg" alt="" />
                        <div className="card-body">
                            <p>Product Name</p>
                            <p>Product Price</p>
                            <button className='btn btn-dark'>Add to cart <i className='fa fa-cart-plus'></i></button>
                        </div>
                    </div>
                </div> */}
                {renderProduct(arrProduct)}
            </div>
        </div>
    )
}
