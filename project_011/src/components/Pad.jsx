import React from "react"

export default function Pad(props){

    const [on, setOn] = React.useState(props.on)

    const toggle = () => setOn((prev)=> !prev)

    return(
        <button style={{backgroundColor:props.color}} className={on?'on':null} onClick={toggle}></button>
    )
}