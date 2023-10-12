'use client'
import React, { useContext } from 'react'
import ProductCart from './ProductCart'
import appContext from '../context/appContext'

const Cart = () => {

  const { cartIsVisible } = useContext(appContext)

  return (
    <section className={ cartIsVisible ? 'fixed top-0 right-0 w-[400px] h-screen bg-bg border-l-2 border-black/50 max-sm:w-screen duration-200 transition-all ease-linear' : 'fixed top-0 -right-full w-[400px] h-screen bg-bg border-l-2 border-black/50 max-sm:w-screen duration-200 transition-all ease-linear'}>
        <div className='pt-20 max-h-screen flex flex-col justify-between overflow-auto'>
            <div className='text-white flex justify-center py-5'>
                XXXXXXXX
            </div>
            <div className='p-3 flex flex-col flex-grow gap-3 bg-white'>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            </div>
        </div>
    </section>
  )
}

export default Cart