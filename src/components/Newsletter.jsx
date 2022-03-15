import { Send } from '@material-ui/icons'
import React from 'react'

function Newsletter() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]'>
        <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>
        <h2 className='text-[20px] mt-2'>Always in touch with us,for your favourite products at affordable prices </h2>
        <div className='flex mt-[3rem] items-center justify-between min-w-[25rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden '>
            <input type="email" placeholder='email' className='border-none flex-[7] outline-none' />
            <button className='bg-[#4caf50] flex-1 h-[100%]'> <Send className='text-white'/> </button>
        </div>
    </div>
  )
}

export default Newsletter