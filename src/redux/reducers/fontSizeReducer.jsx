import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fontSize: 20
}

const fontSizeReducer = createSlice({
  name: 'fontSizeReducer',
  initialState,
  reducers: {
    tangFontSize: (state, action) => {
        state.fontSize =  state.fontSize + action.payload
    },
    giamFontSize: (state, action) => {
        state.fontSize =  state.fontSize - action.payload
    }
  }
});

export const {tangFontSize, giamFontSize} = fontSizeReducer.actions

export default fontSizeReducer.reducer