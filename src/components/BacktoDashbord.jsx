"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function BacktoDashbord() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div>
      <Link
        href={`/dashbord/${user?.role}`}
        className="flex-1 rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}