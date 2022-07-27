import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const api_key = 'http://localhost:5000'

export const fetchAllPhones = createAsyncThunk(
    'phones/getAllPhones',
    async function () {
        try {
            const response = await fetch(`${api_key}/allPhone`)
            if (!response.ok) {
                throw new Error('server no working')
            }
            const phones = await response.json()
            return phones.phones
        }
        catch (error) {
            console.log('error')
        }
    }
)

export const deletePhones = createAsyncThunk(
    'phones/deletePhones',
    async function (id, dispatch) {
        try {
            const response = await axios.post(`${api_key}/delPhones/${id}`)
            if (!response.ok) {
                throw new Error('error')
            }
            dispatch(removePhone({ id }))
        }
        catch (error) {
            console.log('error')
        }
    }
)

export const addNewPhone = createAsyncThunk(
    'phones/addPhones',
    async function (data) {
        try {
            const phones = await axios.post(`${api_key}/addPhone`, data)
            if (!phones.ok) {
                throw new Error('server no working')
            }
        }
        catch (error) {
            console.log('error')
        }
    }
)

export const getMorePhone = createAsyncThunk(
    'phones/getMorePhone',
    async function (id) {
        try {
            const response = await fetch(`${api_key}/morePhone/${id}`)
            if (!response.ok) {
                throw new Error('server no working')
            }
            const phones = await response.json()
            return phones.phones
        }
        catch (error) {
            console.log(error)
        }
    }
)

export const editPhone = createAsyncThunk(
    'phones/editPhone',
    async function (data, id) {
        try {
            const response = await axios.post(`${api_key}/editPhone/${id}`, data)
            if (!response.ok) {
                throw new Error('server no working')
            }
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }
)

export const findPhone = createAsyncThunk(
    'phones/findPhone',
    async function (text) {
        const response = await axios.post(`${api_key}/findPhone`, { text })
        return response.data.phones
    }
)

export const phoneSlice = createSlice({
    name: 'phones',
    initialState: {
        phones: [],
        loading: false,
        status: null,
        error: null
    },
    reducers: {
        removePhone: (state, action) => {
            state.phones = state.phones.filter(phone => phone.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchAllPhones.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchAllPhones.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.phones = action.payload
        },
        [fetchAllPhones.rejected]: () => {
            console.log('error')
        },


        [deletePhones.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [deletePhones.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.phones = action.payload
        },
        [deletePhones.rejected]: () => {
            console.log('error')
        },


        [addNewPhone.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [addNewPhone.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.phones = action.payload
        },
        [addNewPhone.rejected]: () => {
            console.log('error')
        },



        [getMorePhone.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getMorePhone.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.phones = action.payload
        },
        [getMorePhone.rejected]: () => {
            console.log('error')
        },


        [editPhone.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [editPhone.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.phones = action.payload
        },
        [editPhone.rejected]: () => {
            console.log('error')
        },


        [findPhone.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [findPhone.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.phones = action.payload
        },
        [findPhone.rejected]: () => {
            console.log('error')
        },
    }
})

export const { removePhone } = phoneSlice.actions

export const phoneReducer = phoneSlice.reducer