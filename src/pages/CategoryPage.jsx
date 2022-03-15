import React from 'react'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

function CategoryPage() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Men's Wear</h1>
            <div className='flex justify-between items-center mt-3'>
               <div className='flex'>
               <p>Filter by</p>
                <select className='ml-3 border-2 border-silver'>
                    <option selected disabled>Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <select  className='ml-3 border-2 border-silver' >
                    <option selected disabled>Color</option>
                    <option>Yellow</option>
                    <option>Blue</option>
                    <option>Black</option>
                </select>
               </div>
               <div className='flex'>
                   <p>Sort By</p>
                   <select className='ml-3 border-2 border-silver'>
                       <option>Newest</option>
                       <option>Oldest</option>
                       <option>Price (Asc)</option>
                       <option>Price (Desc)</option>
                   </select>
               </div>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default CategoryPage