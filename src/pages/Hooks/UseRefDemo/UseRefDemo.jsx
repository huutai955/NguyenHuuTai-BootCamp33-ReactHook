import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function UseRefDemo() {

    const [number, setNumber] = useState(1);
    // Ý nghĩa của useRef: Lưu lại giá trị mỗi khi component render lại
    const userLoginRef = useRef(
        {
            userName: '',
            password: ''
        }
    )

    const handleChange = (event) => {
        let {id, value} = event.target;
        userLoginRef.current[id] = value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userLoginRef.current);
    }

    return (
        <form className='form container' onSubmit={handleSubmit}>
            <button className='btn btn-success' onClick={() => {
                return setNumber(number+1);
            }}>+</button>
            <h3>Login</h3>
            <div className="form-group">
                <p>Username</p>
                <input type="text" className='form-control' id='userName' onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Username</p>
                <input type="text" className='form-control' id='password' onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className='btn btn-success'>Login</button>
            </div>
        </form>
    )
}
