// import axios from "axios";
// import { put, takeEvery, } from 'redux-saga/effects'
// import { getAllPhones, deletePhone } from "../store/phoneSlice";

// const Axios = axios.create({
//     withCredentials: true
// })

// function* AddPhone(data) {
//     const createPhones = yield Axios.post("http://localhost:5000/addPhone", data)
//     console.log(createPhones)
//     // ok
// }

// function* AllPhone() {
//     const phones = yield Axios.get("http://localhost:5000/allPhone")
//     if ('phones' in phones.data) {
//         yield put(getAllPhones(phones.data.phones))
//     }
//     // ok
// }

// function* getPhone(action) {
//     const id = action.payload
//     const phones = yield Axios.post(`http://localhost:5000/morePhone/${id}`)
//     yield put(getAllPhones(phones.data.phones))
//     // ok
// }

// function* delPhone({ id, phones }) {
//     yield Axios.post(`http://localhost:5000/delPhones/${id}`)
//     yield put(deletePhone(phones))
//     // ?
// }

// function* editPhone(action) {
//     // const id = action.payload
//     // const editPhones = yield Axios.get(`http://localhost:5000/editPhone/${id}`, data, id)
//     // console.log(editPhones)
//     console.log('ok')
// }

// function* findPhone(action) {
//     const text = action.payload
//     const phones = yield Axios.post(`http://localhost:5000/findPhone`, text)
//     console.log(phones, 'in saga');
//     yield put(getAllPhones(phones.data.phones))
//     // console.log(phones.data.phones, 'saga phone')
// }

// export function* rootSaga() {
//     yield takeEvery("phones/addPhone", AddPhone)
//     yield takeEvery("phones/getAllPhonesLoading", AllPhone)
//     yield takeEvery("phones/morePhone", getPhone)
//     yield takeEvery("phones/deletePhone", delPhone)
//     yield takeEvery("phones/editPhones", editPhone)
//     yield takeEvery("phones/findAllPhone", findPhone)
// }