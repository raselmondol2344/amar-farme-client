import React from "react";
import Image from "next/image";
import { Card, Chip, Button } from "@heroui/react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const {
    productName,
    price,
    imageUrl,
    stock,
    category,
    freshness,
    _id
  } = product;

  return (
    <Card className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">



      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden  bg-gray-50 sm:h-56 rounded-lg">
        <Image
          src={imageUrl}
          alt={productName}
          fill
          className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Category - Left */}
        <div className="absolute left-3 top-3 z-10">
          <Chip
            size="sm"
            className="bg-green-600/90 px-2 font-medium text-white shadow-sm backdrop-blur-md"
          >
            {category}
          </Chip>
        </div>

        {/* Freshness - Right */}
        <div className="absolute right-3 top-3 z-10">
          <Chip
            size="sm"
            className=" py-1 border border-green-200 bg-white/90 px-2.5 font-semibold text-green-700 shadow-sm backdrop-blur-md"
          >
            {freshness}
          </Chip>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">

        {/* Stock - Image এর নিচে */}
        {/* <div className="mb-3 flex justify-end">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              stock > 0
                ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border border-red-200 bg-red-50 text-red-600"
            }`}
          >
            {stock > 0 ? `✓ Stock: ${stock}` : "✕ Out of Stock"}
          </span>
        </div> */}

        {/* Product Name  and price*/}


        <div className=" flex justify-between">
          <h4 className="line-clamp-1 text-xl font-bold text-gray-800 sm:text-md p-1">
            {productName}
          </h4>


          <h3 className="text-2xl font-extrabold text-green-600">
            ৳{price}
          </h3>
        </div>




        
        {/* Buttons */}
<div className="mt-5 flex justify-around gap-3 border-t border-gray-100 pt-4">
 <Link href={`/products/${_id}`}>
  <Button
    size="sm"
    variant="bordered"
    className="w-full rounded-xl border-green-600 font-semibold text-green-700 hover:bg-green-50 sm:w-auto"
  >
    Details
  </Button>
 </Link>

  <Button
    size="sm"
    color="success"
    className="w-full rounded-xl bg-green-600 font-semibold text-white shadow-sm hover:bg-green-700 sm:w-auto"
    isDisabled={stock <= 0}
  >
    Add to Cart
  </Button>
</div>

      </div>
    </Card>
  );
}