import React from 'react'
import { ImSpinner11 } from 'react-icons/im'

const Loading = () => {
  return (
    <div className='absolute top-0 left-0 flex justify-center items-center w-screen h-screen'>
      <ImSpinner11 className='text-2xl animate-spin' />
    </div>
  )
}

export default Loading