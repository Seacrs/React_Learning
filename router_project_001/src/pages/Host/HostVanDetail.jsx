import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail(){
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)
    
    useEffect(()=> {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    const vanItem = currentVan && currentVan.map(van => {
        return (
            <div>
                <img src={van.imageUrl} alt="" />
                <p>{van.name}</p>
                <p>{van.price}</p>

            </div>
        )
    })

    return (
        <div>
            {currentVan && vanItem }
        </div>
    )
}