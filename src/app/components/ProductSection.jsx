'use client'
import React, { useContext, useEffect } from 'react'
import getProducts from '../api/getProducts'
import appContext from '../context/appContext'
import Loading from './Loading'
import ProductCard from './ProductCard'

const ProductSection = () => {

    const { products, setProducts, loading, setLoading } = useContext(appContext)

    useEffect(() => {
        getProducts('Computador Gamer').then((response) => {
            setProducts(response)
            setLoading(false)
        })
    }, [])

    return (
        <div className='pt-20'>
            <div className='px-5 max-w-[1440px] mx-auto my-0'>
                <h3 className='text-4xl font-semibold text-white py-10'>Produtos</h3>
                {loading && <Loading /> || products && !loading &&
                    <div className='flex flex-row flex-wrap justify-center gap-9'>
                        {products.map((item) => <ProductCard
                            key={item.id}
                            id={item.id}
                            thumbnail={item.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                            original_price={item.original_price}
                            price={item.price}
                            free_shipping={item.free_shipping}
                            title={item.title}
                        />)}
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductSection