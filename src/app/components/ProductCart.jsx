import React, { useContext } from 'react'
import { BsFillLightningChargeFill, BsCartDash } from 'react-icons/bs'
import appContext from '../context/appContext'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductCart = (props) => {

    const { productsInCart, setProductsInCart } = useContext(appContext)

    const removeItemCart = (id) => {
        const updatedCart = productsInCart.filter((product) => product.id !== id)
        setProductsInCart(updatedCart)
        notifySuccess()
    }

    function notifySuccess() {
        toast.success('Produto removido do carrinho!', {
            position: "bottom-left",
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
        <div className='w-full h-[150px] bg-white flex flex-row p-2 gap-3 border-2 hover:border-green-600 relative after:absolute after:bg-black/20 after:-translate-x-[5px] after:top-0 after:right-1/2 after:origin-left after:w-[2px] after:h-full overflow-hidden'>
            <button onClick={() => removeItemCart(props.id)} type='button' className='absolute top-0 right-0 w-[50px] h-[50px] bg-black/5 text-2xl text-red-600 flex items-center justify-center rounded-bl-3xl'><BsCartDash /></button>
            <div className='h-full w-1/2 flex items-center justify-center overflow-hidden'>
                <img src={props.thumbnail} alt="" className='h-full' />
            </div>
            <div className='h-full w-1/2 flex flex-col space-y-1 overflow-hidden'>
                {!props.free_shipping &&
                    <span className="text-sm text-green-600 font-bold capitalize flex items-center gap-1">
                        frete grátis <BsFillLightningChargeFill />
                    </span>
                }
                {props.original_price ? <span className='text-sm line-through font-semibold'>R${props.original_price}</span> : ' '}
                <span className="text-base font-semibold flex gap-1">R$ {props.price}
                    <span className='text-green-600 font-bold uppercase'>
                        {props.original_price ? Math.floor([(props.original_price - props.price) / props.original_price] * 100) + '% off' : ''}
                    </span>
                </span>
                <span className='text-sm w-full max-h-20 font-semibold text-justify'>{props.title}</span>
            </div>
        </div>
    )
}

export default ProductCart