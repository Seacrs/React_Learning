import { Outlet } from "react-router-dom"
export default function Dashboard(){
    return (
        <>
            <h1>Dashboard details go here</h1>
            <Outlet />
        </>
    )
}