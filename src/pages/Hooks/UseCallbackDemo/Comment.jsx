import React, { memo } from 'react'
const Comment = (props) => {
    console.log('comment');
    console.log(props.renderLike())
    return (
        <div>
            Child (Like): {props.renderLike()}
            <textarea></textarea> 
            <br />
            <button>Gửi</button>
        </div>
    )
}
export default memo(Comment);