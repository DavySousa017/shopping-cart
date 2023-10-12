'use client'
import React, { useContext } from 'react'
import ProductCart from './ProductCart'
import appContext from '../context/appContext'

const Cart = () => {

  const { cartIsVisible, productsInCart } = useContext(appContext)
  const total = productsInCart.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={cartIsVisible ? 'fixed top-0 right-0 w-[400px] h-screen bg-bg border-l-2 border-black/50 max-sm:w-screen duration-300' : 'fixed top-0 -right-full w-[400px] h-screen bg-bg border-l-2 border-black/50 max-sm:w-screen duration-300'}>
      <div className='pt-20 max-h-screen flex flex-col justify-between overflow-auto'>
        <div className='text-white flex justify-center py-5'>
          {productsInCart.length > 0 && <span className='font-bold text-green-600'>Total : R$ {total.toFixed(2)}</span> || productsInCart.length == 0  && <span className='font-bold'>Carrinho Vazio</span>}
        </div>
        {productsInCart.length > 0 && <div className='p-3 flex flex-col flex-grow gap-3'>
          {productsInCart.map((item) =>
            <ProductCart
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              original_price={item.original_price}
              price={item.price}
              free_shipping={item.free_shipping}
              title={item.title} />
          )}
        </div>}
      </div>
    </section>
  )
}

export default Cart