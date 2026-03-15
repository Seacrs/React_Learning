import { useState, useEffect } from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import { clsx } from 'clsx'
import { getVans } from '../../api'

import Van from './Van'

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")

    useEffect(()=>{
        async function loadVans(){
            setLoading(true)
            try{
                const data = await getVans()
                setVans(data)
            } catch(err) {
                console.log("There was an error")
                console.log(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const displayedVans = typeFilter ? vans.filter(van=> van.type.toLowerCase() === typeFilter) : vans


    const vansItems = displayedVans.map(van => {
        return (
            <Link to={van.id} key={van.id} state={{ 
                                                    search: `?${searchParams.toString()}`,
                                                    type: typeFilter
                                                    }}>
                <Van    key={van.id}
                        image={van.imageUrl}
                        name={van.name}
                        price={van.price}
                        type={van.type}/>
            </Link>
        )
    })

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="vans-page">
            <h1>Explore Our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className={clsx('van-type', 'simple')}>Simple</button>
                <button onClick={() => setSearchParams({type: "rugged"})} className={clsx('van-type', 'rugged')}>Rugged</button>
                <button onClick={() => setSearchParams({type: "luxury"})} className={clsx('van-type', 'luxury')}>Luxury</button>
                {typeFilter && <button onClick={() => setSearchParams({})} className={clsx('van-type')}>Clear</button>}
            </div>
            <div className="vans-collection">
                {vansItems}
            </div>
            <Outlet/>
        </div>
    )
}