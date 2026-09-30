'use client'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export default function BannerExplorebtn() {
  return (
    <div className="flex justify-end mt-4">
            <Link href={'/products'}>
              <Button className=" bg-slate-200 text-green-600  hover:bg-green-600 hover:text-white font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm px-4 sm:px-3 md:px-5 lg:px-7 h-7 sm:h-7 md:h-8 lg:h-10 rounded-full transition-all duration-300" >আরো দেখুন</Button>
            </Link>
          </div>
  )
}
