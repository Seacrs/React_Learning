import { useState } from 'react'
import { useLoaderData, useNavigate, Form } from "react-router-dom"
import { loginUser } from '../api'

export function loader({ request }){
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        setError(null)
        loginUser(loginFormData).then(data => navigate("/host", { replace: true}))
                                .catch(err => setError(err.message || err.statusText || "Something went Wrong"))
                                .finally(()=> setStatus("idle"))
    }
    const isDisabled = status === 'submitting'

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            { message && 
                <h3 className='red'>{message}</h3>}n
            { error && <h3 className='red'>{error}</h3>}
            <h1>Sign in to your account</h1>
            <Form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button  disabled={isDisabled}>{isDisabled ? "Logging in..." : "Log in"}</button>
            </Form>
        </div>
    )
}