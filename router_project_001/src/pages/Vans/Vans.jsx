import { useState, Suspense } from "react"
import { 
    Link, 
    Outlet, 
    useSearchParams, 
    useLoaderData,
    Await,
} from "react-router-dom"
import { clsx } from 'clsx'
import { getVans } from '../../api'

import Van from './Van'

export async function loader(){
    const vans = await getVans();
    return { vans}
}

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const vans = useLoaderData()

    const typeFilter = searchParams.get("type")

    function rendervanElements(vans) {
        const displayedVans = typeFilter ? vans.filter(van=> van.type.toLowerCase() === typeFilter) : vans
        const vansItems = displayedVans.map(van => {
            return (
                <Link to={van.id} key={van.id} 
                                state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                    <Van    key={van.id}
                            image={van.imageUrl}
                            name={van.name}
                            price={van.price}
                            type={van.type}
                    />
                </Link>
                )
        })
        return (
            <>
                <div className="van-list-filter-buttons">
                    <button onClick={() => setSearchParams({type: "simple"})} className={clsx('van-type', 'simple')}>Simple</button>
                    <button onClick={() => setSearchParams({type: "rugged"})} className={clsx('van-type', 'rugged')}>Rugged</button>
                    <button onClick={() => setSearchParams({type: "luxury"})} className={clsx('van-type', 'luxury')}>Luxury</button>
                    {typeFilter && <button onClick={() => setSearchParams({})} className={clsx('van-type')}>Clear</button>}
                </div>
                <div className="vans-collection">
                    {vansItems}
                </div>
            </>
        )
    }

    return (
        <div className="vans-page">
            <h1>Explore Our van options</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={vans.vans}>
                    {rendervanElements}
                </Await>
            </Suspense>
        </div>
    )
}