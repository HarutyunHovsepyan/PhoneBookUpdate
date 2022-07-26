import { editPhone, getMorePhone } from '../store/phoneSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import '../style/editPhone.css'

function EditPhone() {
    const { id } = useParams()
    const phones = useSelector(state => state.phones.phones)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        dispatch(getMorePhone(id))
    }, [])

    const onChangePhone = (data) => {
        dispatch(editPhone({ data, id: phones.id }))
        reset()
    }

    return (
        <div>
            <div className="container">
                <header className="hero">
                    <i onClick={() => window.location.href = "/"} className="fas fa-chevron-circle-left back-btn"></i>
                    <h1 className="header-main">Edit Phones</h1>
                </header>
                <form className="w-25" onSubmit={handleSubmit(onChangePhone)}>
                    <section className="contact-info">
                        <div className="info-line">
                            <i className="fas fa-user-circle icon-gradient"></i>
                            <label htmlFor="name"></label>
                            <input type="text" className="type" name="name"
                                placeholder={phones.name}
                                {...register('name',
                                    { minLength: 3 },
                                    { required: true }
                                )} />
                            {/* <input type="text" placeholder={phones.id} name='id' {...register('id')} /> */}
                        </div>
                        {errors.name && <p className="text-danger">No Name or Name length less 3</p>}
                        <div className="info-line">
                            <i className="fas fa-phone icon-gradient"></i>
                            <label htmlFor="phoneNumber"></label>
                            <input type="phone" className="type" name="phoneNumber" {...register('phoneNumber',
                                { minLength: 8 },
                                { required: true }
                            )}
                                placeholder={phones.phoneNumber}
                            />
                        </div>
                        {errors.phoneNumber && <p className="text-danger">Phone number must be minLength 8.</p>}
                        <section className="button-container">
                            <div className="update-contact">
                                <i className="fas fa-check-circle icon-gradient"></i>
                                <button
                                    className="button">Save Contact
                                </button>
                            </div>
                        </section>
                    </section>
                </form>
            </div>
        </div >
    )
}
export default EditPhone