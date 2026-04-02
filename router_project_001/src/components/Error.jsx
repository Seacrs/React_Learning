import React from "react"
import { useRouteError, Navigate } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    
    // If it's a redirect response, navigate to the location
    if (error instanceof Response && error.status === 302) {
        const location = error.headers.get("location")
        return <Navigate to={location} />
    }
    
    return (
        <>
            <h1>Error: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}