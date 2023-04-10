import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const params = useParams()
  const {name} = params
  console.warn(name);
  return (
    <div>Hello <h1>{name}</h1></div>
  )
}

export default User