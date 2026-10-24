import SellerProductTable from "@/components/SellerProductTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProductPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user?.id) {
    return <div>Please login first</div>;
  }

  const res = await fetch(
    `http://localhost:8000/seller-products/${user.id}`,
    {
      cache: "no-store",
    }
  );

  const productData = await res.json();

  return (
    <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-5 lg:px-6">
      <SellerProductTable data={productData} />
    </div>
  );
}