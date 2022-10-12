import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../../../redux/reducers/facebookAppReducer';
import { giamFontSize, tangFontSize } from '../../../redux/reducers/fontSizeReducer';

export default function UseReduxDemo() {

  const { arrComments } = useSelector(state => state.facebookAppReducer);
  const {fontSize} = useSelector(state => state.fontSizeReducer);

  const dispatch = useDispatch();
  const userCommentRef = useRef({
    userName: '',
    comment: ''
  });

  const handleChange = (event) => {
    let { id, value } = event.target;
    userCommentRef.current[id] = value;


    console.log(userCommentRef);
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const action = addComment({ ...userCommentRef.current });

    // B2: Dùng dispatch để gửi dữ liệu lên redux

    dispatch(action)
  }

  console.log(fontSize)
  console.log(arrComments);
  return (
    <div className='container'>
      <form action="" className='form' onSubmit={handleSubmit}>
        <h3>FaceBook App</h3>
        <div className="card">
          <div className="card-header bg-dark text-white">
            User Chat
          </div>
          <div className="card-body">
            {/* <div className="d-flex align-items-center">
            <div style={{ width: 50 }}>
              <img src="https://i.pravatar.cc/?u=2" alt="" className='w-100' />
            </div>
            <div>
              <h3 className=' text-danger'>User A</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perferendis.</p>
            </div>
          </div>

          <div className="d-flex align-items-center mt-4">
            <div style={{ width: 50 }}>
              <img src="https://i.pravatar.cc/?u=5" alt="" className='w-100' />
            </div>
            <div>
              <h3 className=' text-danger'>User A</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perferendis.</p>
            </div>
          </div> */}

            {arrComments.map((user, index) => {
              return <div className="d-flex align-items-center mt-4" key={index} >
                <div style={{ width: 50 }}>
                  <img src="https://i.pravatar.cc/?u=5" alt="" className='w-100' />
                </div>
                <div>
                  <h3 className=' text-danger'>{user.userName}</h3>
                  <p>{user.comment}</p>
                </div>
              </div>
            })}
          </div>
        </div>

        <div className="form-group">
          <p>UserName</p>
          <input type="text" className='form-control' id='userName' onChange={handleChange} />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input type="text" className='form-control' id='content' onChange={handleChange} />
        </div>

        <div className="form-group">
          <button className='btn btn-success' >Comment</button>
        </div>
      </form>

      <hr />
      <h2>Tang Giam FontSize</h2>
      <p style={{fontSize: fontSize}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, neque?</p>
      <button className='btn btn-success mx-2' onClick={() => {
        const action = tangFontSize(1);
        dispatch(action)
      }}>+</button>
      <button className='btn btn-success mx-2' onClick={() => {
        const action = giamFontSize(1);
        dispatch(action);
      }}>-</button>
    </div>
  )
}
