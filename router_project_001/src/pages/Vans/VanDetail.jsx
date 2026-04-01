import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from '../../api'
import { clsx } from 'clsx'

export function loader({ params }){
    return getVans(params.id)
}

export default function VanDetail(){
    const location = useLocation();
    const van = useLoaderData();

    const vanButton = clsx('van-type', van.type);

    const search = location.state?.search || "";
    const typeFilter = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Link to={`..${search}`}
                relative="path"
                className="back-button"
                >&larr; 
                <span>Back to {typeFilter} vans</span>
            </Link>

                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <button className={vanButton}>{van.type}</button>
                    <h2>{van.name}</h2>
                    <p className="van-price-detail"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent This Van</button>
                </div>
        </div>
    )
}