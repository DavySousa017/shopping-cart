'use client'
import React, { useContext } from 'react'
import { PiShoppingCart } from 'react-icons/pi'
import appContext from '../context/appContext'

const IconCart = () => {

  const { cartIsVisible, setCartIsVisible } = useContext(appContext)

  return (
    <button onClick={() => setCartIsVisible(!cartIsVisible)} type='button' className={`flex items-center relative`}>
      <PiShoppingCart className='text-3xl text-white' />
    </button>
  )
}

export default IconCart