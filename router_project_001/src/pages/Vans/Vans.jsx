import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

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
            <Link to={`/vans/${van.id}`}>
                <Van    key={van.id}
                        image={van.imageUrl}
                        name={van.name}
                        price={van.price}
                        type={van.type}/>
            </Link>
        )
    })

    return (
        <div className="vans-page">
            <h1>Explore Our van options</h1>
            <div className="vans-collection">
                {vansItems}
            </div>
            <Outlet />
        </div>
    )
}