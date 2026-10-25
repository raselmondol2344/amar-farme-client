"use client";


import { Button, FieldError, Input, Label, Modal, Surface, TextField, TextArea, Description, Form } from "@heroui/react";
import { FiEdit } from "react-icons/fi";
import React, { useState } from "react";
export function EditModal({ product, onUpdate }) {
  const { _id, productName, price, image, stock, category, freshness, description } = product;

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedProduct = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8000/product/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();


    //note: res.ok → update সফল → onUpdate() দিয়ে নতুন data দেখাও → setIsOpen(false) দিয়ে modal বন্ধ করো
    if (res.ok) {
      onUpdate({
        ...product,
        ...updatedProduct,
      });

      setIsOpen(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        size="sm"
        onPress={() => setIsOpen(true)}
        className="h-9 flex-1 border border-green-300 bg-white px-3 text-green-500 sm:flex-none cursor-pointer"
      >
        
       Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>পণ্য এডিট করুন</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-4 sm:p-6">
              <Surface variant="default">
                <Form onSubmit={onSubmit} className="w-full px-2 py-2 sm:px-4 sm:py-4">

                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                    <TextField isRequired name="productName" defaultValue={productName}>
                      <Label className="text-xs font-medium text-green-800 sm:text-sm">পন্যের নাম</Label>
                      <Input placeholder="পন্যের নাম লিখুন" className="mt-1 rounded-xl border border-green-200 bg-green-50/40" />
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="price" type="number" defaultValue={price}>
                      <Label className="text-xs font-medium text-green-800 sm:text-sm">মূল্য</Label>
                      <Input placeholder="পন্যের মূল্য লিখুন" className="mt-1 rounded-xl border border-green-200 bg-green-50/40" />
                      <Description className="text-[11px] text-green-600">প্রতি কেজি, লিটার অথবা পিসের মূল্য</Description>
                      <FieldError />
                    </TextField>
                  </div>

                  <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                    <TextField isRequired name="image" type="url" defaultValue={image}>
                      <Label className="text-xs font-medium text-green-800 sm:text-sm">ইমেজ URL</Label>
                      <Input placeholder="পন্যের ইমেজ URL দিন" className="mt-1 rounded-xl border border-green-200 bg-green-50/40" />
                      <Description className="text-[11px] text-green-600">পন্যের ছবির সরাসরি URL</Description>
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="stock" type="number" defaultValue={stock}>
                      <Label className="text-xs font-medium text-green-800 sm:text-sm">Stock</Label>
                      <Input placeholder="পন্যের পরিমাণ লিখুন" className="mt-1 rounded-xl border border-green-200 bg-green-50/40" />
                      <Description className="text-[11px] text-green-600">বর্তমানে কতটি পন্য মজুদ আছে</Description>
                      <FieldError />
                    </TextField>
                  </div>

                  <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="w-full">
                      <Label htmlFor="category" className="mb-1 block text-xs font-medium text-green-800 sm:text-sm">
                        ক্যাটেগরি
                      </Label>

                      <select
                        id="category"
                        name="category"
                        required
                        defaultValue={category}
                        className="h-10 w-full rounded-xl border border-green-200 bg-green-50/40 px-3 text-xs text-gray-700 outline-none transition focus:border-green-600 focus:bg-white sm:text-sm"
                      >
                        <option value="" disabled>ক্যাটেগরি নির্বাচন করুন</option>
                        <option value="শাকসবজি">শাকসবজি</option>
                        <option value="দুধ">দুধ</option>
                        <option value="মাংস">মাংস</option>
                        <option value="মাছ">মাছ</option>
                        <option value="মসলা">মসলা</option>
                        <option value="চাল">চাল</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <Label htmlFor="freshness" className="mb-1 block text-xs font-medium text-green-800 sm:text-sm">
                        ফ্রেশেস ব্যাজ
                      </Label>

                      <select
                        id="freshness"
                        name="freshness"
                        required
                        defaultValue={freshness}
                        className="h-10 w-full rounded-xl border border-green-200 bg-green-50/40 px-3 text-xs text-gray-700 outline-none transition focus:border-orange-500 focus:bg-white sm:text-sm"
                      >
                        <option value="" disabled>ফ্রেশেস ব্যাজ নির্বাচন করুন</option>
                        <option value="ফ্রেশ">ফ্রেশ</option>
                        <option value="অর্গানিক">অর্গানিক</option>
                        <option value="দেশি">দেশি</option>
                        <option value="প্রিমিয়াম">প্রিমিয়াম</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 w-full">
                    <TextField isRequired name="description" defaultValue={description}>
                      <Label className="text-xs font-medium text-green-800 sm:text-sm">বিস্তারিত</Label>
                      <TextArea placeholder="পন্য সম্পর্কে বিস্তারিত লিখুন" className="mt-1 min-h-20 rounded-xl border border-green-200 bg-green-50/40 sm:min-h-24" />
                      <Description className="text-[11px] text-green-600">পন্যের গুণগত মান, উৎপাদন স্থান এবং অন্যান্য প্রয়োজনীয় তথ্য লিখুন</Description>
                      <FieldError />
                    </TextField>
                  </div>

                  <div className="mt-5 flex w-full justify-end gap-3 border-t border-green-100 pt-4">
                    <Button
                      type="button"
                      slot="close"
                      variant="secondary"
                      className="border border-green-200 bg-white px-5 font-medium text-gray-600 hover:bg-green-50"
                    >
                      বাতিল
                    </Button>

                    <Button
                      type="submit"
                      className="bg-green-600 px-7 font-semibold text-white shadow-sm hover:bg-green-700"
                    >
                      আপডেট করুন
                    </Button>
                  </div>

                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}