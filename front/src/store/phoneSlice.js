import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const api_key = 'http://localhost:5000'

export const fetchAllPhones = createAsyncThunk(
    'phones/getAllPhones',
    async function () {
        const response = await fetch(`${api_key}/allPhone`)
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
        deletePhone: (state, action) => {
            state.phones = state.phones.filter(i => i.id !== action.payload)
        },
        morePhone: (state, action) => {
            state.phones = action.payload
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
    }
})

export const { addPhone, deletePhone, morePhone,
    findAllPhone,
    getAllPhoneLoading,
    editPhones } = phoneSlice.actions

export const phoneReducer = phoneSlice.reducer