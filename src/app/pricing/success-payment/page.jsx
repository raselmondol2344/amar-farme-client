import { payment } from '@/lib/action'
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    metadata,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const pay_data = await payment({ ...metadata, session_id })
    console.log(pay_data)

    return (
      <section className="min-h-screen bg-green-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-2xl bg-white p-6 text-center shadow-lg sm:p-10">

            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 sm:h-24 sm:w-24">
              <svg
                className="h-10 w-10 text-green-600 sm:h-12 sm:w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
              Payment Successful! 🎉
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Thank you for your purchase! Your payment has been successfully
              completed. We really appreciate your business.
            </p>

            {/* Email */}
            <div className="mx-auto mt-6 rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                A confirmation email will be sent to
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-green-700 sm:text-base">
                {customerEmail}
              </p>
            </div>

            {/* Support */}
            <p className="mt-6 text-xs leading-5 text-gray-500 sm:text-sm">
              If you have any questions, please contact us at{' '}
              <a
                href="mailto:orders@example.com"
                className="font-medium text-green-600 hover:text-green-700 hover:underline"
              >
                orders@example.com
              </a>
            </p>

            {/* Home Button */}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-[0.98] sm:w-auto"
              >
                ← Go to Home
              </Link>
            </div>

          </div>
        </div>
      </section>
    )
  }
}