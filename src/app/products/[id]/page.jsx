

import ProductDetails from "@/components/ProductDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function productDetailsPage({ params }) {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(`http://localhost:8000/product/${id}`, {
    headers:{
      authorization: `Bearer ${token}`
    }
  });
  const product = await res.json();

  

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <ProductDetails product={product}></ProductDetails>
    </div>
  );
}