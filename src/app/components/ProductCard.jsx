import React from 'react'
import { BsFillLightningChargeFill, BsCartPlus } from 'react-icons/bs'

const ProductCard = (props) => {
    return (
        <div className='w-[240px] h-[330px] bg-white flex flex-col p-2 rounded-lg gap-3 shadow shadow-black/10 hover:shadow-md hover:shadow-black/30 duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-black/10 after:top-1/2 after:left-0 after:rounded-full after:-translate-y-1/2'>
            <button className='absolute top-0 right-0 w-[50px] h-[50px] bg-black/5 text-2xl text-blue-600 flex items-center justify-center rounded-bl-3xl'><BsCartPlus /></button>
            <div className='h-1/2 w-full flex items-center justify-center overflow-hidden'>
                <img src={props.thumbnail} alt="" className='h-full' />
            </div>
            <div className='h-1/2 w-full flex flex-col gap-1'>
                <span className='text-sm font-semibold max-h-20 overflow-clip'>{props.title}</span>
                {!props.free_shipping &&
                    <span className="text-sm text-green-600 font-bold capitalize flex items-center gap-1">
                        frete grátis <BsFillLightningChargeFill/>
                    </span>
                }
                <span className='text-sm line-through font-semibold'>R${props.original_price}</span>
                <span className="text-base font-bold flex gap-1">R${props.price}
                <span className='text-green-600 uppercase'>
              {props.original_price ? Math.floor([( props.original_price -  props.price) / props.original_price] * 100) + '% off' : ''}
              </span>
            </span>
            </div>
        </div>
    )
}

export default ProductCard