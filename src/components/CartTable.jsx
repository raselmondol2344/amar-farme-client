"use client";

import Image from "next/image";
import { Table, Button } from "@heroui/react";
import { TfiShoppingCart } from "react-icons/tfi";
import { CartDeleteAlert } from "./CartDeleteAlert";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

export default function CartTable({ data }) {
  // Empty cart
  if (!data || data.length === 0) {
    return (
      <div className="w-full">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            My Cart
          </h2>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Review your selected products before payment.
          </p>
        </div>

        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-green-100 bg-white px-5 text-center shadow-sm">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <TfiShoppingCart className="text-2xl text-green-600" />
          </div>

          <h3 className="text-xl font-semibold text-gray-800">
            Your Cart is Empty
          </h3>

          <p className="mt-2 max-w-md text-sm text-gray-500">
            You have not added any product to your cart yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          My Cart
        </h2>

        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Review your selected products before payment.
        </p>
      </div>

      {/* ONE Table */}
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <Table>
          <Table.ScrollContainer>
            <Table.Content
              aria-label="Cart products"
              className="min-w-[700px]"
            >
              {/* Table Header - Only Once */}
              <Table.Header className="bg-gray-50">
                <Table.Column className="py-4 text-sm font-semibold text-gray-600">
                  Image
                </Table.Column>

                <Table.Column
                  isRowHeader
                  className="py-4 text-sm font-semibold text-gray-600"
                >
                  Product Name
                </Table.Column>

                <Table.Column className="py-4 text-sm font-semibold text-gray-600">
                  Price
                </Table.Column>

                <Table.Column className="py-4 text-sm font-semibold text-gray-600">
                  Action
                </Table.Column>


                
                <Table.Column className="py-4 text-sm font-semibold text-gray-600">
                  Count
                </Table.Column>





              </Table.Header>

              {/* All Products */}
              <Table.Body>
                {data.map((item) => (
                  <Table.Row
                    key={item._id}
                    className="border-b border-gray-100 transition-colors last:border-b-0 hover:bg-green-50/40"
                  >
                    {/* Image */}
                    <Table.Cell className="py-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 sm:h-16 sm:w-16">
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Table.Cell>

                    {/* Product Name */}
                    <Table.Cell className="py-4">
                      <span className="text-sm font-semibold text-gray-800 sm:text-base">
                        {item.productName}
                      </span>
                    </Table.Cell>

                    {/* Price */}
                    <Table.Cell className="py-4">
                      <span className="text-sm font-bold text-green-600 sm:text-base">
                        ৳{item.price}
                      </span>
                    </Table.Cell>

                    {/* Action */}
                    <Table.Cell className="py-4">
                      <div className="flex flex-wrap items-center gap-2">
                       <CartDeleteAlert data={item}></CartDeleteAlert>

                       
                      </div>
                    </Table.Cell>





                    {/* count */}
                    <Table.Cell className="py-4">
                      <div className="flex flex-wrap items-center gap-2">
                      

                        <Button
                          size="sm"
                          className="rounded-lg bg-green-500 px-3 text-xs font-medium text-white hover:bg-green-700 sm:text-sm"
                        >
                          <IoMdAdd />
                        </Button>

                          <Button
                         
                          size="sm"
                          className="rounded-full bg-none px-3 text-xs font-medium sm:text-sm "
                        >
                          0
                        </Button>


                        

                        
                         <Button
                          size="sm"
                          className="rounded-lg bg-red-500 px-3 text-xs font-medium text-white hover:bg-red-700 sm:text-sm"
                        >
                          <GrFormSubtract />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>

        <div className="py-8 max-w-5xl mx-auto">
          <Button className='w-full text-center bg-green-500'> Total pay = 00 tk</Button>
        </div>
      </div>
    </div>
  );
}