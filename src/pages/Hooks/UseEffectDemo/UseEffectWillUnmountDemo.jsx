import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

let countDown = 60;
let timeout = {};
export default function UseEffectWillUnmountDemo() {
    const [count, setCount] = useState(50);

    let setCountDown = () => {
        
        setInterval(() => {
            countDown--
            document.querySelector("#countDown").innerHTML = countDown;
        }, 1000)
    }

    useEffect(() => {
        return () => {
            // Hàm này sẽ tự động kích hoạt dependency (tham số thứ 2 của hàm thay đổi) hoặc component này mất khỏi giao diện
            // (WillUnmount)
            clearInterval(timeout);
        }
    })
  return (
    <div>
        <h3 id='countDown'>Count: {count}</h3>
        <button className='btn btn-success' onClick={() => {
            return setCountDown();
        }}>Start</button>
    </div>
  )
}
