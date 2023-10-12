import React, { useContext } from 'react'
import { BsFillLightningChargeFill, BsCartPlus } from 'react-icons/bs'
import appContext from '../context/appContext'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {

    const { productsInCart, setProductsInCart } = useContext(appContext)

    const addToCart = () => {

        const productExists = productsInCart.find(
            (p) => p.id === props.id
        )
        if (!productExists) {
            setProductsInCart([...productsInCart, props])
            notifySuccess()
        } else {
            notifyFail()
        }

    }

    function notifySuccess() {
        toast.success('Produto adicionado ao carrinho!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    function notifyFail() {
        toast.warning('Seu carrinho já possui este produto!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    return (
        <div className='w-[240px] h-[330px] bg-white flex flex-col p-2 rounded-lg gap-3 border-2 hover:border-green-600 relative after:absolute after:w-full after:h-0.5 after:bg-black/10 after:top-1/2 after:left-0 after:rounded-full after:-translate-y-1/2'>
            <button onClick={() => addToCart()} type='button' className='absolute top-0 right-0 w-[50px] h-[50px] bg-black/5 text-2xl text-blue-600 flex items-center justify-center rounded-bl-3xl'><BsCartPlus /></button>
            <div className='h-1/2 w-full flex items-center justify-center overflow-hidden'>
                <img src={props.thumbnail} alt="" className='h-full' />
            </div>
            <div className='h-1/2 w-full flex flex-col space-y-1'>
                {!props.free_shipping &&
                    <span className="text-sm text-green-600 font-bold capitalize flex items-center gap-1">
                        frete grátis <BsFillLightningChargeFill />
                    </span>
                }
                {props.original_price ? <span className='text-sm line-through font-semibold'>R${props.original_price}</span> : ' '}
                <span className="text-base font-semibold flex gap-1">R${props.price}
                    <span className='text-green-600 font-bold uppercase'>
                        {props.original_price ? Math.floor([(props.original_price - props.price) / props.original_price] * 100) + '% off' : ''}
                    </span>
                </span>
                <span className='text-sm font-semibold max-h-20 overflow-clip'>{props.title}</span>
            </div>
        </div>
    )
}

export default ProductCard