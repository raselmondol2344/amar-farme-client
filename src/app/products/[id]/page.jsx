import React from 'react'
import async from './../../../components/TopProducts';

export default async function productDetailsPage({params}) {
    const {id}= await params
    const res = await fetch(``)
    const destination = await res.json()
    
  return (
    <div>
        productDetailsPage

    </div>
  )
}
