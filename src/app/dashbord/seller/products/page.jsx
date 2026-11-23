import SellerProductTable from "@/components/SellerProductTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProductPage({searchParams}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user?.id) {
    return <div>Please login first</div>;
  }


  const searchQuery = await searchParams;
  const page = searchQuery.page || 1
  const limit = searchQuery.limit || 5

  const res = await fetch(
    `http://localhost:8000/seller-products/${user.id}?page=${page}&limit={limit}`,
    {
      cache: "no-store",
    }
  );

  const productData = await res.json();

  return (
    <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-5 lg:px-6">
      <SellerProductTable products={productData} />
    </div>
  );
}