import { createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';

const initialState = {
    value: 0,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
