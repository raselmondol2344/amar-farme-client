'use client'
import Image from "next/image";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { EditModal } from "@/components/EditModal";
import { useState } from "react";
import {DeleteAlert} from "@/components/DeleteAlert"
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function ProductDetails({product}) {
  const [currentProduct, setCurrentProduct] = useState(product);
  const {productName,price,image, stock,category, freshness,description,_id} = currentProduct;
   const { data: session, } = authClient.useSession()
    const user = session?.user


  const handleCart = async () =>{
    const cartingData ={
      userId:user?.id,
      userName:user?.name,
      useremail:user?.email,
      image,
      productName,
      price,
      productId:_id


    }
    console.log(cartingData)

    const res = await fetch('http://localhost:8000/cart',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(cartingData)

    })
    const data = await res.json();
    //console.log(data)
    toast.success("product cart success")

  }






  
  return (
    <div>
      <div className="mx-auto max-w-5xl">

        {/* Product Details Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="relative h-80 overflow-hidden bg-gray-100 sm:h-96 md:h-full md:min-h-[500px]">
              <Image
                src={image}
                alt={productName}
                fill
                className="object-cover"
              />

              {/* Category */}
              <div className="absolute left-4 top-4">
                <Chip
                  size="sm"
                  className="border border-white/20 bg-green-600/95 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  ক্যাটেগরি : {category}
                </Chip>
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-10">

              <div>

                {/* Freshness */}
                <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  {freshness}
                </span>

                {/* Product Name + Action Buttons */}
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  {/* Product Name */}
                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold leading-tight text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
                      {productName}
                    </h1>
                  </div>

                  {/* Edit + Delete */}
                  <div className="flex w-full gap-2 sm:w-auto sm:shrink-0">
                  <EditModal product={currentProduct}
                  onUpdate={(updatedProduct) => setCurrentProduct(updatedProduct)}
                  ></EditModal>

                    <DeleteAlert product={currentProduct}></DeleteAlert>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5">
                 

                  <p className="text-2xl font-extrabold text-green-600 sm:text-3xl">
                    ৳{price}
                  </p>
                </div>

                {/* Stock */}
                <div className="mt-5">
                  <span
                    className={`inline-block rounded-full px-3 py-1.5 text-sm font-semibold ${stock > 0
                        ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border border-red-200 bg-red-50 text-red-600"
                      }`}
                  >
                    {stock > 0
                      ? `✓ Stock Available: ${stock}`
                      : "✕ Out of Stock"}
                  </span>
                </div>

                {/* Description */}
                <div className="mt-7 border-t border-gray-100 pt-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-800">
                    পণ্যের বিবরণ
                  </h2>

                  <p className="text-sm leading-7 text-gray-500">
                    {description}
                  </p>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">

                {/* Add to Cart */}
                <Button
                 onClick={handleCart}
                  size="lg"
                  color="success"
                  className="h-11 w-full rounded-xl bg-green-600 px-5 font-semibold text-white hover:bg-green-700 sm:h-12 sm:flex-1"
                  isDisabled={stock <= 0}
                >
                  Add to Cart
                </Button>

                {/* More Products */}
                <Link
                  href="/products"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  <Button
                    className="h-10 w-full rounded-full bg-slate-200 px-4 text-sm font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white sm:h-11 md:text-sm lg:text-sm"
                  >
                    আরো দেখুন
                  </Button>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
