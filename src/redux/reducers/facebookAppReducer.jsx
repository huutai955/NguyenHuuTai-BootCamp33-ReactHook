// rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComments: [
        {
            userName: "Cái Đầu Khấc",
            comment: "Khấc cái đầu"
        },

        {
            userName: "Cái Đầu Buồi",
            comment: "Buồi cái đầu"
        }
    ]
}

const facebookAppReducer = createSlice({
  name: 'facebookAppReducer',
  initialState,
  reducers: {
    addComment: (state, action) => {
        // B1:  Lấy ra dữ liệu dispatch lên từ action.payload
        let userComment = action.payload
         state.arrComments.push(userComment);
    }
  }
});

export const {addComment} = facebookAppReducer.actions

export default facebookAppReducer.reducer