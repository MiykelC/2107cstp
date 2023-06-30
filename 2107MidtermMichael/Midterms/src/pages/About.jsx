import React from 'react'
import NavBar from '../component/navBar'
import CAflashLogo from '../images/CAflashLogo.png'
import '../styles/About.css'

const about = () => {
    return (
        <>
            <NavBar />
            <div className="AboutLogo">
                <img src={CAflashLogo} alt="Logo" />
                <h1>This Website is created by Michael Chua which provides  </h1>
                <h1>Latest and important Canada News</h1>
               
            </div>
        </>
    )
}   


export default about