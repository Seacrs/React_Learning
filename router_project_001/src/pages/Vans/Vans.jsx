import { useState, useEffect } from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import { clsx } from 'clsx'

import Van from './Van'

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    const typeFilter = searchParams.get("type")

    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? vans.filter(van=> van.type.toLowerCase() === typeFilter) : vans


    const vansItems = displayedVans.map(van => {
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
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={clsx('van-type', 'simple')}>Simple</button>
                <button onClick={() => setSearchParams({type: "rugged"})} className={clsx('van-type', 'rugged')}>Rugged</button>
                <button onClick={() => setSearchParams({type: "luxury"})} className={clsx('van-type', 'luxury')}>Luxury</button>
                <button onClick={() => setSearchParams({})} className={clsx('van-type')}>Clear</button>
            </div>
            <div className="vans-collection">
                {vansItems}
            </div>
            <Outlet />
        </div>
    )
}