import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-centre justify-between py-5 font-medium'>
      <img src={assets.logo}  className='w-36' alt="" />
    </div>
  )
}

export default Navbar
