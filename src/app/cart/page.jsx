import CartTable from "@/components/CartTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function CartPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:8000/cart/${user?.id}`);
  const Cartdata = await res.json();

  return (
    <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-5 lg:px-6">
      <CartTable data={Cartdata} />
    </div>
  );
}