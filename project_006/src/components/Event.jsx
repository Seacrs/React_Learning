import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    /**
     * Challenge: 
     * Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */
    function add(){
        setCount(count + 1);
    }
    
    function subtract(){
        setCount(count - 1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick = {subtract} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
} 