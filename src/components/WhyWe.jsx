import React from "react";
import { FaLeaf, FaShieldAlt, FaTruck } from "react-icons/fa";

export default function WhyWe() {
  const reasons = [
    {
      icon: <FaLeaf />,
      title: "নিজস্ব খামারে উৎপাদন",
      description:
        "আমাদের নিজস্ব খামারে যত্ন ও ভালোবাসার সাথে আমরা নিজেরাই টাটকা ও প্রাকৃতিক কৃষি ও খামারের পণ্য উৎপাদন করি।",
    },
    {
      icon: <FaShieldAlt />,
      title: "খাঁটি ও মানসম্মত",
      description:
        "আমাদের খামারে উৎপাদিত প্রতিটি পণ্যের মান ও বিশুদ্ধতার বিষয়ে আমরা সর্বোচ্চ গুরুত্ব দিই, যাতে আপনি পান নিরাপদ ও স্বাস্থ্যকর খাবার।",
    },
    {
      icon: <FaTruck />,
      title: "সরাসরি আপনার ঘরে",
      description:
        "আমাদের নিজস্ব খামারে উৎপাদিত টাটকা পণ্য সরাসরি আপনার ঘরে পৌঁছে দিই, যাতে আপনি সহজেই পান সতেজ ও স্বাস্থ্যকর খাবার।",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            আমাদের বিশেষত্ব
          </span>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            আমাদের নিজস্ব খামারে যত্ন ও ভালোবাসার সাথে আমরা নিজেরাই
            টাটকা, খাঁটি ও মানসম্মত কৃষি ও খামারের পণ্য উৎপাদন করি।
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-green-100 bg-green-50/50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-7"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-gray-800 sm:text-xl">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-600 sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}