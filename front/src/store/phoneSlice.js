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
        const response = await fetch(`${api_key}/delPhones/${id}`)
        dispatch(removePhone({ id }))
    }
)

export const addNewPhone = createAsyncThunk(
    'phones/addPhones',
    async function (data) {
        const phones = await axios.post(`${api_key}/addPhone`, data)
    }
)

export const getMorePhone = createAsyncThunk(
    'phones/getMorePhone',
    async function (id) {
        const response = await fetch(`${api_key}/morePhone/${id}`)
        if (!response.ok) {
            throw new Error('server no working')
        }
        const phones = await response.json()
        return phones.phones
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
        addPhone: (state, action) => {
            state.phones = action.payload
        },
        removePhone: (state, action) => {
            state.phones = state.phones.filter(phone => phone.id !== action.payload.id)
        },
        editPhones: (state, action) => {
            state.phones = action.payload
        },
        findPhones: (state, action) => {
            state.phones = action.payload
        },
        findAllPhone: (state, action) => {
            state.phones = action.payload
            state.loading = false
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
    }
})

export const { addPhone, removePhone, morePhone, findAllPhone, editPhones } = phoneSlice.actions

export const phoneReducer = phoneSlice.reducer