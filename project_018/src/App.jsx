import { useState, useMemo } from 'react'
import { useUsersPosts } from './hooks/useUsersPosts'

export default function App(){
  const [search, setSearch] = useState("");
  const {Users, Posts, Loading, Error} = useUsersPosts('https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/posts')


  const usersDropdown = !Loading && Users.map(user=>{
    return (
      <option key={user.id} value={user.name}>{user.name}</option>
    )
  })

  const filteredData = useMemo(()=>{
    if(!search) return []
    const userData = Users.filter(item => item.name === search)
    if(!userData) return []
    const postsData = Posts.filter(post => post.userId === userData[0].id)

    return postsData.map(post=> {
      return (
          <div key={post.id} className='flex flex-col gap-2'>
            <h3 className='text-2xl font-bold'> {post.title}</h3>
            <p className='text-lg'>{post.body}</p>
          </div>
        )
    })
  }, [search, Users, Posts])

  return (
    <div className='p-5'>
      {Loading && <p>Loading data...</p>}
      {!Loading &&
      <select
        value={!search ? "choose" : search}
        onChange={e=> setSearch(e.target.value)} className='border-2' name="userList" id="">
          <option value="">Choose Users</option>
          {usersDropdown}
      </select>}
      <div className='p-1 flex flex-col gap-5'>
        {filteredData}
      </div>
      <div>{Error && <p>There was an error</p>}</div>
    </div>
  )
}