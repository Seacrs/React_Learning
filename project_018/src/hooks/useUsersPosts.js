import { useState, useEffect } from 'react'

export function useUsersPosts(usersApi, postsApi){
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        Promise.all([fetch(usersApi).then(res=> res.json()), fetch(postsApi).then(res=> res.json())])
                .then(([usersData, postsData])=> {
                    setUsers(usersData)
                    setPosts(postsData)
                }).catch(err => setError(err.message))
                .finally(()=> setLoading(false))
    }, [usersApi, postsApi])

    return {
        "Users" : users,
        "Posts" : posts,
        "Loading" : loading,
        "Error" : error
    }
}