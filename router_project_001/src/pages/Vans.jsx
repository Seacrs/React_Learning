import { useState, useEffect } from "react"
import Van from './Van'

export default function Vans(){
    const [vans, setVans] = useState([])

    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vansItems = vans.map(van => {
        return (
            <Van    key={van.id}
                    image={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    type={van.type}/>
        )
    })

    return (
        <div className="vans-collection">
            <h1>Explore Our van options</h1>
            {vansItems}
        </div>
    )
}