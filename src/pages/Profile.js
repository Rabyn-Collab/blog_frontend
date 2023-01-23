import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
    </div>
  )
}

export default Profile
