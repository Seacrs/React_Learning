import React from 'react'
import padsData from "./pads"
import Pad from "./components/Pad"

export default function App({darkMode}) {
    const [pads, setPads] = React.useState(padsData);
    
    const buttonElements = pads.map(pad => {
      return <Pad key={pad.id}
                  color={pad.color}
                  on = {pad.on}/>
    })
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}