import React from "react"
import Header from "./components/Body"
import Body from "./components/Header"

export default function App() {

  const [userName, setUserName] = React.useState("Joe")

    return (
        <main>
            <Header userName={userName} />
            <Body userName={userName}/>
        </main>
    )
}
