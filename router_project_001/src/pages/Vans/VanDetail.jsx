import { useState, useEffect } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { clsx } from 'clsx'

export default function VanDetail(){
    const params = useParams();
    const [van, setVan] = useState([])
    const location = useLocation()

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const vanButton = clsx('van-type', van.type)

    const search = location.state?.search || ""
    const typeFilter = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link to={`..${search}`}
                relative="path"
                className="back-button"
                >&larr; 
                <span>Back to {typeFilter} vans</span>
            </Link>

            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <button className={vanButton}>{van.type}</button>
                    <h2>{van.name}</h2>
                    <p className="van-price-detail"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent This Van</button>
                </div>
            ): <h2>Loading...</h2>}
        </div>
    )
}