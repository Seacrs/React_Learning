import React from "react"
import Count from "../components/Count"

export default function App() {
    const [count, setCount] = React.useState(0);
    const add = ()=> setCount((prevCount => prevCount + 1))
    const subtract = () => setCount((prevCount => prevCount - 1))
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick = {subtract} className="minus" aria-label="Decrease count">–</button>
                <Count number = {count}/>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
} 