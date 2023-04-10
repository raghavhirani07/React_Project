import React from 'react'
import { Outlet ,Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <div> Contact Page</div>
      <h2>Here We have Some Other Bussiness</h2>
      <div className="flex flex-row justify-around gap-4 mt-5 mb-2">
      <Link to='/contact/comapany'> Company</Link>
      <Link to='/contact/channel'> Youtube</Link>
      <Link to='/contact/other'> Other Bussiness</Link>
      </div>
      <Outlet />
    </>
  )
}

export default Contact