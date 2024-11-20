import { useState } from 'react'
import { UserProfileInformation } from '../types'


function UserProfile() {
  const [userDetails, setUserDetails] = useState<UserProfileInformation>(
    {
    age: 0,
    name: '',
    email: ''
  })
  return (
    <div>
      <h2>User Profile</h2>
      <input type="text" placeholder='Name' value={userDetails.name} onChange={e => setUserDetails({...userDetails, name: e.target.value})}/>
      <input type="text" placeholder='Age' value={userDetails.age} onChange={e => setUserDetails({...userDetails, age: Number(e.target.value)})}/>
      <input type="text" placeholder='Email' value={userDetails.email} onChange={e => setUserDetails({...userDetails, email: e.target.value})}/>
      <h3>Profile Summary</h3>
      <p>Name: {userDetails.name}</p>
      <p>Name: {userDetails.age}</p>
      <p>Name: {userDetails.email}</p>
    </div>
  )
}

export default UserProfile