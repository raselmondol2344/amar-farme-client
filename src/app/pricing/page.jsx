"use client";
import { Button, Form } from "@heroui/react";

export default function SellerPricingPage() {
  const plans = [
    {
      name: "Starter Farmer",
      price: "$4",
      period: "/month",
      description: "Perfect for small farmers starting their online journey.",
      features: [
        "Up to 20 products",
        "Basic sales analytics",
        "Order management",
        "Farmer profile",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional Farmer",
      price: "$14",
      period: "/month",
      description:
        "For growing farms that want to reach more customers and grow faster.",
      features: [
        "Unlimited products",
        "Advanced sales analytics",
        "Priority product listing",
        "Promotional campaigns",
        "Inventory management",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Farm",
      price: "Custom",
      period: "",
      description:
        "For large farms, agricultural brands, and growing businesses.",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Featured homepage placement",
        "API access",
        "24/7 support",
      ],
      popular: false,
    },
  ];

  return (
    <main className="bg-linear-to-b from-green-50 via-white to-green-50">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center">
        <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          🌱 Become a Seller
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Grow Your Farm Business
          <span className="block text-green-600">
            Sell Fresh Products to More Customers
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Start selling your fresh agricultural products on Amr Farme and
          reach more customers with powerful tools, secure payments, and
          dedicated farmer support.
        </p>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-green-500 ring-2 ring-green-500/20"
                  : "border-green-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-medium text-white shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-3 text-gray-600">{plan.description}</p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-green-700">
                  {plan.price}
                </span>

                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {plan.name === "Enterprise Farm" ? (
                <Button className="mt-8 w-full bg-green-600 font-medium text-white hover:bg-green-700">
                  Contact Sales
                </Button>
              ) : (
                <Form method="POST" action={"/api/subscription"}>
                  <Button
                    type="submit"
                    className="mt-8 w-full bg-green-600 font-medium text-white hover:bg-green-700"
                  >
                    Become a Seller
                  </Button>
                </Form>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-green-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Sell With Amr Farme?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Everything you need to grow your agricultural business online.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6 transition hover:shadow-md">
              <div className="text-3xl">🌾</div>

              <h3 className="mt-4 font-semibold text-gray-900">
                More Customers
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Reach thousands of customers looking for fresh farm products.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6 transition hover:shadow-md">
              <div className="text-3xl">🔒</div>

              <h3 className="mt-4 font-semibold text-gray-900">
                Secure Payments
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Receive your payments through a fast and secure payment system.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6 transition hover:shadow-md">
              <div className="text-3xl">📊</div>

              <h3 className="mt-4 font-semibold text-gray-900">
                Farmer Dashboard
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Easily manage your products, orders, inventory, and sales.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6 transition hover:shadow-md">
              <div className="text-3xl">📢</div>

              <h3 className="mt-4 font-semibold text-gray-900">
                Marketing Tools
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Promote your farm products and increase your product
                visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-3xl border border-green-200 bg-linear-to-r from-green-100 to-emerald-50 p-10 text-center">
          <div className="text-4xl">🌱</div>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Ready to Grow Your Farm Business?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Join Amr Farme today and bring your fresh agricultural products to
            customers across the marketplace.
          </p>

          <button className="mt-8 rounded-xl bg-green-600 px-8 py-3 font-medium text-white shadow-md transition hover:bg-green-700">
            Apply as Farmer
          </button>
        </div>
      </section>
    </main>
  );
}