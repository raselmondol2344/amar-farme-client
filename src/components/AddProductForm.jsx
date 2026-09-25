"use client";
import { toast } from "react-toastify";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

export function AddProductForm() {

    const onSubmit= async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const product = Object.fromEntries(formData.entries())
        console.log(product)

        const res = await fetch ("http://localhost:8000/product",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        const data = await res.json()


     if (res.ok) {
      toast.success("পন্য সফলভাবে যোগ হয়েছে!");
      
    } else {
      toast.error("পন্য যোগ করা যায়নি!");
    }






    }
  return (
    <div className="min-h-screen w-full bg-green-50/50 px-3 py-4 sm:px-5 md:px-6">
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-green-200 bg-white shadow-[0_8px_30px_rgba(22,101,52,0.08)]">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 px-5 py-4 sm:px-7">
          <h2 className="text-lg font-bold text-white sm:text-xl">
            নতুন পন্য যোগ করুন
          </h2>

          <p className="mt-0.5 text-xs text-green-50 sm:text-sm">
            আপনার কৃষি পন্যের প্রয়োজনীয় তথ্য প্রদান করুন
          </p>
        </div>

        <Form onSubmit={onSubmit} className="w-full px-5 py-5 sm:px-7 sm:py-6">

          {/* Product Name + Price */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">

            <TextField isRequired name="productName">
              <Label className="text-xs font-medium text-green-800 sm:text-sm">
                পন্যের নাম
              </Label>

              <Input
                placeholder="পন্যের নাম লিখুন"
                className="mt-1 rounded-xl border border-green-200 bg-green-50/40"
              />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="price"
              type="number"
            >
              <Label className="text-xs font-medium text-green-800 sm:text-sm">
                মূল্য
              </Label>

              <Input
                placeholder="পন্যের মূল্য লিখুন"
                className="mt-1 rounded-xl border border-green-200 bg-green-50/40"
              />

              <Description className="text-[11px] text-green-600">
                প্রতি কেজি, লিটার অথবা পিসের মূল্য
              </Description>

              <FieldError />
            </TextField>

          </div>

          {/* Image + Stock */}
          <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">

            <TextField
              isRequired
              name="imageUrl"
              type="url"
            >
              <Label className="text-xs font-medium text-green-800 sm:text-sm">
                ইমেজ URL
              </Label>

              <Input
                placeholder="পন্যের ইমেজ URL দিন"
                className="mt-1 rounded-xl border border-green-200 bg-green-50/40"
              />

              <Description className="text-[11px] text-green-600">
                পন্যের ছবির সরাসরি URL
              </Description>

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="stock"
              type="number"
            >
              <Label className="text-xs font-medium text-green-800 sm:text-sm">
                Stock
              </Label>

              <Input
                placeholder="পন্যের পরিমাণ লিখুন"
                className="mt-1 rounded-xl border border-green-200 bg-green-50/40"
              />

              <Description className="text-[11px] text-green-600">
                বর্তমানে কতটি পন্য মজুদ আছে
              </Description>

              <FieldError />
            </TextField>

          </div>

          {/* Category + Freshness */}
          <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">

            <div className="w-full">
              <Label
                htmlFor="category"
                className="mb-1 block text-xs font-medium text-green-800 sm:text-sm"
              >
                ক্যাটেগরি
              </Label>

              <select
                id="category"
                name="category"
                required
                defaultValue=""
                className="h-10 w-full rounded-xl border border-green-200 bg-green-50/40 px-3 text-xs text-gray-700 outline-none transition hover:border-green-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
              >
                <option value="" disabled>
                  ক্যাটেগরি নির্বাচন করুন
                </option>

                <option value="শাকসবজি">শাকসবজি</option>
                <option value="দুধ">দুধ</option>
                <option value="মাংস">মাংস</option>
                <option value="মাছ">মাছ</option>
                <option value="মসলা">মসলা</option>
                <option value="চাল">চাল</option>
              </select>
            </div>

            <div className="w-full">
              <Label
                htmlFor="freshness"
                className="mb-1 block text-xs font-medium text-green-800 sm:text-sm"
              >
                ফ্রেশেস ব্যাজ
              </Label>

              <select
                id="freshness"
                name="freshness"
                required
                defaultValue=""
                className="h-10 w-full rounded-xl border border-green-200 bg-green-50/40 px-3 text-xs text-gray-700 outline-none transition hover:border-orange-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100 sm:text-sm"
              >
                <option value="" disabled>
                  ফ্রেশেস ব্যাজ নির্বাচন করুন
                </option>

                    <option value="ফ্রেশ">ফ্রেশ</option>
                    <option value="অর্গানিক">অর্গানিক</option>
                    <option value="দেশি">দেশি</option>
                    <option value="প্রিমিয়াম">প্রিমিয়াম</option>
              </select>
            </div>

          </div>

          {/* Description */}
          <div className="mt-4 w-full">
            <TextField
              isRequired
              name="description"
            >
              <Label className="text-xs font-medium text-green-800 sm:text-sm">
                বিস্তারিত
              </Label>

              <TextArea
                placeholder="পন্য সম্পর্কে বিস্তারিত লিখুন"
                className="mt-1 min-h-20 rounded-xl border border-green-200 bg-green-50/40 sm:min-h-24"
              />

              <Description className="text-[11px] text-green-600">
                পন্যের গুণগত মান, উৎপাদন স্থান এবং অন্যান্য প্রয়োজনীয় তথ্য লিখুন
              </Description>

              <FieldError />
            </TextField>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex w-full flex-col-reverse gap-2.5 border-t border-green-100 pt-4 sm:flex-row sm:justify-end">

            <Button
              type="reset"
              variant="secondary"
              className="w-full border border-green-200 bg-white font-medium text-gray-600 hover:border-green-400 hover:bg-green-50 sm:w-auto"
            >
              বাতিল
            </Button>

            <Button
              type="submit"
              className="w-full bg-green-600 px-7 font-semibold text-white shadow-sm hover:bg-green-700 sm:w-auto"
            >
              পন্য যোগ করুন
            </Button>

          </div>

        </Form>
      </div>
    </div>
  );
}