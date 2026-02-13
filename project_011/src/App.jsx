import React from 'react'
import padsData from "./pads"
import Pad from "./components/Pad"

export default function App({darkMode}) {
    const [pads, setPads] = React.useState(padsData);

    const toggle = (id) =>{
        setPads((prev)=>{
            return prev.map(pad =>{
                if(pad.id === id){
                    return {
                        ...pad,
                        on: !pad.on
                    }
                }
                else return pad
            })
        })
    }


    
    const buttonElements = pads.map(pad => {
        return <Pad key={pad.id}
                    id={pad.id}
                    color={pad.color}
                    on = {pad.on}
                    click={toggle}/>
    })
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}