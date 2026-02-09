import React from "react"

export default function Joke(props){
    const [isShown, setIsShown] = React.useState(false)
    const change= () => setIsShown(prev => !prev)

    return (
        <article>
            <div>
                {props.setup && <h3>{props.setup}</h3>}
                {isShown ? <p>{props.punchLine}</p> : null}
                <button onClick={change}>{isShown ? "Hide": "Show"} punchline</button>
                <hr />
            </div>
        </article>
        
    )
}

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])

    function determineText(){
        if(messages.length === 0) return "You're all caught up"
        else if(messages.length === 1) return "You have 1 unread message"
        else return `You have ${messages.length} unread messages`
    }
    
    let text

    if(messages.length === 0) text ="You're all caught up"
    else if(messages.length === 1) text = "You have 1 unread message"
    else text = `You have ${messages.length} unread messages
    `
    return (
        <div>
            {/* {messages.length === 0 ? <h1>You're all caught up!</h1> : messages.length === 1 ? <h1>You have {messages.length} unread message</h1>:<h1>You have {messages.length} unread messages</h1>}
             */}
            {messages.length === 0 && <h1>You're all caught up!</h1>}
            {messages.length === 1 && <h1>You have {messages.length} unread message</h1>}
            {messages.length > 1 && <h1>You have {messages.length} unread messages</h1>}

        </div>
    )
}