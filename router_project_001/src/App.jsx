import { 
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
}    from "react-router-dom"

import  { requireAuth } from "./utils"

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans, { loader as HostVansLoader } from './pages/Host/HostVans'
import HostVanDetail, { loader as HostVanDetailLoader }  from './pages/Host/HostVanDetail'
import HostLayout from './components/HostLayout'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, { loader as loginLoader, action as loginAction } from './pages/Login'

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
                <Route path='/' element={<Layout />} errorElement={<Error />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
                    <Route path="vans" element={<Vans />} loader={ vansLoader }/>
                    <Route path="vans/:id" element={<VanDetail />} loader={ vanDetailLoader }/>

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} loader={async ({request})=> await requireAuth(request)}/>
                        <Route path="income" element={<Income />} loader={async ({request}) => await requireAuth(request)}/>
                        <Route path ="reviews" element={<Reviews />} loader={async ({request}) => await requireAuth(request)}/>
                        <Route path="vans" element={<HostVans />} loader ={ HostVansLoader }/>
                        <Route path="vans/:id" element={<HostVanDetail />} loader ={ HostVanDetailLoader }>
                            <Route index element={<HostVanInfo/>} loader={async ({request}) => await requireAuth(request)}/>
                            <Route path="pricing" element={<HostVanPricing />} loader={async ({request}) => await requireAuth(request)}/>
                            <Route path="photos" element={<HostVanPhotos />} loader={async ({request}) => await requireAuth(request)}/>
                        </Route>
                    </Route>
                    <Route path = "*" element={<NotFound />}/>
                </Route>
))

export default function App(){
    return (
        <RouterProvider router = {router}/>
    )
}