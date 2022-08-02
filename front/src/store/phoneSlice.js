import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const api_url = 'http://localhost:5000'


export const fetchAllPhones = createAsyncThunk(
    'phones/getAllPhones',
    async function () {
        try {
            const response = await axios.get(`${api_url}/allPhone`)
            if (response.status !== 200) {
                throw new Error('server no working')
            }
            return response.data.phones
        }
        catch (error) {
            console.log('error')
        }
    }
)

export const deletePhones = createAsyncThunk(
    'phones/deletePhones',
    async function (id, { dispatch }) {
        try {
            const response = await axios.delete(`${api_url}/delPhones/${id}`)
            if (response.status !== 200) {
                throw new Error('error')
            }
            dispatch(removePhone({ id }))
            return response.data.phones
        }
        catch (error) {
            console.log('error')
        }
    }
)

export const addNewPhone = createAsyncThunk(
    'phones/addPhones',
    async function (data, { dispatch }) {
        try {
            const phones = await axios.post(`${api_url}/addPhone`, data)
            if (phones.status !== 200) {
                throw new Error('server no working')
            }
            dispatch(addPhone(data))
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
            const response = await axios.get(`${api_url}/morePhone/${id}`)
            if (response.status !== 200) {
                throw new Error('server no working')
            }
            return response.data.phones
        }
        catch (error) {
            console.log(error)
        }
    }
)

export const editPhone = createAsyncThunk(
    'phones/editPhone',
    async function ({ data, id }) {
        try {
            const response = await axios.put(`${api_url}/editPhone/${id}`, data)
            if (response.status !== 200) {
                throw new Error('server no working')
            }
            return response.data.phones
        }
        catch (error) {
            console.log(error)
        }
    }
)

export const findPhone = createAsyncThunk(
    'phones/findPhone',
    async function (text) {
        try {
            const response = await axios.post(`${api_url}/findPhone`, { text })
            if (response.status !== 200) {
                throw new Error('server no working')
            }
            return response.data.phones
        }
        catch (error) {
            console.log(error)
        }
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
        addPhone(state, action) {
            state.phones = action.payload
        },
        removePhone(state, action) {
            state.phones = state.phones.filter(phone => phone.id !== action.payload.id);
        }
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

export const { removePhone, addPhone } = phoneSlice.actions

export const phoneReducer = phoneSlice.reducer