import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../constant/auth.api";
import {withOutTokenGet, withoutTokenPost, withTokenPost} from '../services/common.services';


export const getLogin = createAsyncThunk("LOGIN",(params) => withoutTokenPost(authApi.LOGIN, params));
export const getRegister = createAsyncThunk("REGISTER",(params) => withoutTokenPost(authApi.REGISTER, params));
export const forgotPassword = createAsyncThunk("FORGOT",(params) => withoutTokenPost(authApi.CHANGE_PASSWORD, params));
export const authDomain = createAsyncThunk("AUTH",(params) => withOutTokenGet(authApi.AUTH+params));


    const initialState = {
        status: null,
        apiName:'',
        forgotInfo:null,
        authInfo:null,
        data: null
    };

    export const rootReducer = createSlice({
        name:  "authSlice",
        initialState,
        extraReducers: {
            [getLogin.pending]: (state, action) => {
                state.status = "pending";
                state.apiName = 'login'
                console.log("login peding",state)

            },
            [getLogin.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.apiName = 'login'
                state.data = action.payload;
                console.log("loginFullFilled",state)
            },
            [getLogin.rejected]: (state, action) => {
                state.status = "rejected";
                state.apiName = 'login'
                state.data = action.payload;
                console.log("loginrejected",state)
            },
            [getRegister.pending]: (state, action) => {
                state.status = "pending";
                state.apiName = 'signup'
            },
            [getRegister.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.apiName = 'signup'
                state.data = action.payload;
            },
            [getRegister.rejected]: (state, action) => {
                state.status = "rejected";
                state.apiName = 'signup'
                state.data = action.payload;
            },
            [forgotPassword.pending]: (state, action) => {
                state.status = "pending";
                state.apiName = 'forgot'
            },
            [forgotPassword.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.apiName = 'forgot'
                state.forgotInfo = action.payload;
            },
            [forgotPassword.rejected]: (state, action) => {
                state.status = "rejected";
                state.apiName = 'forgot'
                state.forgotInfo = action.payload;
            },
            [authDomain.pending]: (state, action) => {
                state.status = "pending";
                state.apiName = 'authdomain'
            },
            [authDomain.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.apiName = 'forgauthdomainot'
                state.authInfo = action.payload;
            },
            [authDomain.rejected]: (state, action) => {
                state.status = "rejected";
                state.apiName = 'authdomain'
                state.authInfo = action.payload;
            },
        },
        reducers : {
            logout : ()=> initialState,
            clearForgot : ()=> initialState
        }
    });
    
    
export const {logout} = rootReducer.actions;
export const {clearForgot} = rootReducer.actions;
export default rootReducer.reducer;