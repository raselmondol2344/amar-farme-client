import React from 'react'

export default async function TopProducts() {
  const res = await fetch('http://localhost:8000/product');
    const products = await res.json();
  return (
    <div className='py-10'>

        <h1 className='text-green-600 font-semibold text-center text-4xl'>আপনার জন্য</h1>
        

    </div>
  )
}
