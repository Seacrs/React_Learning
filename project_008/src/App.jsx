import React from "react"
import avatar from "../img/avatar.png"
import Star from "./components/Star.jsx"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(prev => {
            return {
            ...prev,
            isFavorite: !prev.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
        />
                <div className="info">
                    <Star isFilled ={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
