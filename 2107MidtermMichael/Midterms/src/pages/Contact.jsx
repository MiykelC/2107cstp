import React from 'react'
import NavBar from '../component/navBar'
import CAflashLogo from '../images/CAflashLogo.png'
import '../styles/About.css'


const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <div className="AboutLogo">
                <img src={CAflashLogo} alt="Logo" />
                <h1>Contact me through email </h1>
                <h1>michael.chua@student.vcc.ca</h1>
            </div>
        </div>
    )
}

export default ContactPage