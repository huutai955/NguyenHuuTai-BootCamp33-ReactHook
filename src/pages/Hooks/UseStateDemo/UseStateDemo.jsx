import React from 'react'
import { useState } from 'react'

export default function UseStateDemo() {
    const [fontSize, setFontSize] = useState(20);
    const [imgSrc, setimgSrc] = useState('https://i.pravatar.cc/?u=2');
    const [imgCar, setimgCar] = useState("./img/black-car.jpg");

    let handleChangeColor = (color) => {
        let newIMG = `./img/${color}-car.jpg`
        return setimgCar(newIMG)
    }
    return (
        <div className='container'>
            <h2>Demo Tăng Giảm FontSize</h2>
            <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi voluptate autem libero nobis tempore quasi dolorem iusto pariatur. Incidunt, vel?</p>
            <span>My FontSize is: {fontSize}px</span>
            <hr />
            <button className='btn btn-success me-3' onClick={() => {
                return setFontSize(fontSize + 1);
            }}>+</button>
            <button className='btn btn-success' onClick={() => {
                return setFontSize(fontSize - 1)
            }}>-</button>

            <hr />

            <h2>Demo random img</h2>
            <div className='card w-25 my-2'>
                <img src={imgSrc} alt="" />
                <div className="card-body">
                    <p>Name</p>
                    <button className='btn btn-primary' onClick={() => {
                        let randomNumber = Math.floor(Math.random() * 100);
                        let newIMG = `https://i.pravatar.cc/?u=${randomNumber}`
                        return setimgSrc(newIMG)
                    }}>Random</button>
                </div>
            </div>

            <h2>Bài Tập Chọn Chiếc Siêu Xe Của Bạn</h2>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={imgCar} alt="" />
                    </div>
                </div>
                <div className="col-8">
                    <button className='btn btn-danger mx-2' onClick={() => {
                        return handleChangeColor('red')
                    }}>Red</button>
                    <button className='btn btn-dark mx-2' onClick={() => {
                        return handleChangeColor('black')
                        
                    }}>Black</button>
                    <button className='btn btn-secondary mx-2' onClick={() => {
                        return handleChangeColor('silver')
                        
                    }}>Silver</button>
                    <button className='btn btn-light mx-2' onClick={() => {
                       return handleChangeColor('steel')
                        
                    }}>Steel</button>
                </div>
            </div>
        </div>
    )
}
