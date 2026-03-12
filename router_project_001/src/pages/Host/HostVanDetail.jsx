import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { clsx } from 'clsx'

export default function HostVanDetail(){
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)
    
    useEffect(()=> {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    const vanButton = clsx('van-type', currentVan.type)

    return (
        <section>
            <Link to=".."
                className="back-button"
                >&larr; 
                <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={vanButton}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}