// Components template (Chứa các thành phần dùng chung)
import React from 'react'
import {Outlet} from 'react-router-dom'
import HeaderHome from '../components/HeaderHome/HeaderHome'

export default function HomeTemplates() {
  return (
    <>
    {/* <header className='bg-dark text-white text-center p-5'>Header</header> */}
    <HeaderHome />
    <div style={{minHeight:600}}>
    <Outlet />
    </div>

    <footer className='bg-dark text-white text-center p-5'>Footer</footer>
    </>
  )
}
 