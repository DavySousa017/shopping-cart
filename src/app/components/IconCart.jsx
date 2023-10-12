'use client'
import React, { useContext } from 'react'
import { PiShoppingCart } from 'react-icons/pi'
import appContext from '../context/appContext'

const IconCart = () => {

  const { cartIsVisible, setCartIsVisible, productsInCart } = useContext(appContext)

  return (
    <button onClick={() => setCartIsVisible(!cartIsVisible)} type='button' className={cartIsVisible ? "w-10 h-10 flex items-center justify-center bg-white/10 rounded-2xl relative" : "w-10 h-10 flex items-center justify-center rounded-2xl relative"}>
      {productsInCart.length == 0 && '' || productsInCart.length > 0 && <span className='absolute -top-2 -right-2 flex items-center justify-center w-[20px] h-[20px] bg-red-600 text-xs rounded-full font-bold animate-pulse'>{productsInCart.length}</span>}
      <PiShoppingCart className='text-3xl text-white' />
    </button>
  )
}

export default IconCart