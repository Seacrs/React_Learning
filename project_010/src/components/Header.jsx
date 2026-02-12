import React from "react"
import avatar from "../img/avatar.png"

export default function Header(props) {

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}