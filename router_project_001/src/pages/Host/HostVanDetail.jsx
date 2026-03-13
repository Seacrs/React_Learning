import { useEffect, useState } from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
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

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
    }

    return (
        <section>
            <Link to=".."
                relative="path"
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

                <nav className="host-van-detail-nav">
                        <NavLink 
                            to="." 
                            end
                            style={({ isActive })=> isActive ? activeStyles : null}
                            >
                                Details
                        </NavLink>
                        <NavLink 
                            to="pricing"
                            style={({ isActive })=> isActive ? activeStyles : null}
                            >
                                Pricing
                        </NavLink>
                        <NavLink 
                            to="photos"
                            style={({ isActive })=> isActive ? activeStyles : null}
                            >
                                Photos
                        </NavLink>
                </nav>
                <Outlet context={currentVan}/>
            </div>
        </section>
    )
}