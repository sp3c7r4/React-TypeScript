import React from 'react'
import { Info } from './../types.ts'

type UserInfoProp = {
  user: Info;
}

const UserInfo: React.FC<UserInfoProp> = ( { user }) => {
  return (
    <div>
      <h2>User Informations</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Emali: {user.email}</p>
    </div>
  )
}
  
export default UserInfo