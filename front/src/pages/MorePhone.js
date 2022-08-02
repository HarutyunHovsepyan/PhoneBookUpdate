import { useDispatch, useSelector } from "react-redux"
import { getMorePhone } from "../store/phoneSlice"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import '../style/morePhone.css'

function MorePhone() {
    const { id } = useParams()
    const dispatch = useDispatch()
    let phones = useSelector(state => state.phones.phones)

    useEffect(() => {
        dispatch(getMorePhone(id))
    }, [])
    
    return (
        <div className="container">
            <header className="hero">
                <i onClick={() => window.location.href = "/"} className="fas fa-chevron-circle-left back-btn"></i>
                <h1 className="header-main">More Phone</h1>
            </header>
            <section className="contact-info">
                <div className="info-line">
                    <i className="fa fa-user icon-gradient"></i>
                    <p className="lastName">{phones.name}</p>
                </div>
                <div className="info-line">
                    <i className="fa fa-user icon-gradient"></i>
                    <p className="lastName">{phones.lastName}</p>
                </div>
                <div className="info-line">
                    <i className="fas fa-phone icon-gradient"></i>
                    <p className="phone-number">{phones.phoneNumber}</p>
                </div>
                <div className="info-line">
                    <i className="fa fa-home icon-gradient"></i>
                    <p className="homeNumber">{phones.homeNumber}</p>
                </div>
                <div className="info-line">
                    <i className="fas fa-envelope icon-gradient"></i>
                    <p className="email">{phones.email}</p>
                </div>
            </section>
        </div >
    )
}
export default MorePhone