import React from 'react'
import { AdminInfoList } from '../types'
type AdminInfoType = {
  admin: AdminInfoList
}

const AdminInfo: React.FC<AdminInfoType> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Info</h2>
      <p>ID: {admin.id}</p> 
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Lastlogin: {admin.lastlogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo