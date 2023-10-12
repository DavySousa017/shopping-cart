'use client'
import React from 'react'
import { PiShoppingCart } from 'react-icons/pi'

const IconCart = () => {

  return (
    <a href='/cart' className={`flex items-center relative`}>
      <PiShoppingCart className='text-3xl text-black' />
    </a>
  )
}

export default IconCart