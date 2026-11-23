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
    <main className="min-h-[70vh] w-full bg-gray-50/70">
      <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-10">
        <CartTable data={Cartdata} />
      </div>
    </main>
  );
}
