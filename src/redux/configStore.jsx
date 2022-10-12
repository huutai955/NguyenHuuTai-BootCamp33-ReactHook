import {configureStore} from '@reduxjs/toolkit';
import facebookAppReducer from './reducers/facebookAppReducer';
import fontSizeReducer from './reducers/fontSizeReducer';

export const store = configureStore({
    reducer: {
        facebookAppReducer: facebookAppReducer,
        fontSizeReducer: fontSizeReducer
    }
})