'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      {/* in-line styling using Tailwind */}
      <button className='btn btn-primary'onClick={() => console.log('Click')}>Add to cart</button>
    </div>
  )
}

export default AddToCart
