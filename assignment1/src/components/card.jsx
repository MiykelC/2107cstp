// eslint-disable-next-line no-unused-vars
import React from "react"
import './../styles/card.css'


// eslint-disable-next-line react/prop-types
export default function Card({email, first_name, last_name, avatar}) {
    return(
        <div className="card-container">
            <img src={avatar} width={30}/>
            <section className="card-info">
                <span>{first_name} {last_name}</span>
                <span>{email}</span>
            </section>
        </div>
    )
}