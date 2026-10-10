import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import BacktoDashbord from "@/components/BacktoDashbord";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { subscription } from "@/lib/action";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!session_id) {
    throw new Error(
      "Please provide a valid session_id (`cs_test_...`)"
    );
  }

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    await subscription({
      user,
      session_id,
    });

    return redirect("/dashbord/seller");
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">

        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

          {/* Top Section */}
          <div className="bg-green-600 px-6 py-10 text-center text-white">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-green-600 text-3xl font-bold">
                ✓
              </div>
            </div>

            <h1 className="text-3xl font-bold">
              Payment Successful!
            </h1>

            <p className="mt-2 text-green-50">
              Thank you for your purchase.
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-8">

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <p className="text-sm text-slate-500">
                Confirmation email
              </p>

              <p className="mt-1 font-semibold text-slate-800 break-all">
                {customerEmail}
              </p>
            </div>

            <p className="mt-6 text-center text-sm leading-6 text-slate-600">
              We appreciate your business! Your payment has been
              successfully completed. A confirmation email has been sent
              to your email address.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div>
                <Link
                  href="/"
                  className="flex-1 rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700"
                >
                  Continue With Amar Farm
                </Link>
              </div>

              <div>
                <BacktoDashbord />
              </div>
            </div>

            {/* Help */}
            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <p className="text-sm text-slate-500">
                Need help with your order?
              </p>

              <Link
                href="mailto:orders@example.com"
                className="mt-1 inline-block text-sm font-semibold text-green-600 hover:text-green-700"
              >
                Contact Support
              </Link>
            </div>

          </div>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Your payment is securely processed by Stripe.
        </p>

      </div>
    </main>
  );
}

