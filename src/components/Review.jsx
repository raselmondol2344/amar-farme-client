"use client";

import React from "react";

const reviews = [
  {
    name: "রাকিব হাসান",
    location: "ঢাকা",
    review:
      "Amar Fosol থেকে কয়েকবার সবজি নিয়েছি। পন্যগুলো বেশ ফ্রেশ ছিল এবং ডেলিভারিও সময়মতো পেয়েছি।",
    rating: 5,
  },
  {
    name: "সুমাইয়া আক্তার",
    location: "রংপুর",
    review:
      "অর্গানিক সবজি এবং দেশি পন্যের কালেকশনটা অনেক ভালো লেগেছে। পন্যের মানও বেশ ভালো।",
    rating: 5,
  },
  {
    name: "মোঃ সাকিব",
    location: "চট্টগ্রাম",
    review:
      "অনলাইনে কৃষকের কাছ থেকে সরাসরি পন্য কেনার অভিজ্ঞতা খুব ভালো ছিল। আবারও অর্ডার করবো।",
    rating: 4,
  },
];

export default function Review() {
  return (
    <section className="w-full bg-green-50/50 px-4 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            গ্রাহকদের মতামত
          </span>

          <h2 className="mt-3 text-2xl font-bold text-green-800 sm:text-3xl md:text-4xl">
            আমাদের গ্রাহকরা কী বলছেন?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Amar Fosol থেকে পন্য কেনার পর আমাদের গ্রাহকদের অভিজ্ঞতা
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-6"
            >
              {/* Top */}
              <div className="flex items-center justify-between gap-3">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-base font-bold text-green-700">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-800 sm:text-base">
                      {review.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="rounded-lg bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-500">
                  {"★".repeat(review.rating)}
                </div>

              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-6 text-gray-600">
                “{review.review}”
              </p>

              {/* Bottom */}
              <div className="mt-5 border-t border-green-50 pt-4">
                <span className="text-xs font-medium text-green-600">
                  যাচাইকৃত গ্রাহক
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3">

          <div className="rounded-xl border border-green-100 bg-white px-3 py-4 text-center shadow-sm">
            <h3 className="text-xl font-bold text-green-700 sm:text-2xl">
              ৪.৯/৫
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              গড় রেটিং
            </p>
          </div>

          <div className="rounded-xl border border-green-100 bg-white px-3 py-4 text-center shadow-sm">
            <h3 className="text-xl font-bold text-green-700 sm:text-2xl">
              ১,০০০+
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              সন্তুষ্ট গ্রাহক
            </p>
          </div>

          <div className="col-span-2 rounded-xl border border-green-100 bg-white px-3 py-4 text-center shadow-sm sm:col-span-1">
            <h3 className="text-xl font-bold text-green-700 sm:text-2xl">
              ৯৫%
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              পুনরায় অর্ডার
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}