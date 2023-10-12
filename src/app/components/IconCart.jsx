'use client'
import Link from 'next/link'
import React from 'react'
import { PiShoppingCart } from 'react-icons/pi'

const IconCart = () => {

  return (
    <Link href='#' className={`flex items-center relative`}>
      <PiShoppingCart className='text-3xl text-white' />
    </Link>
  )
}

export default IconCart