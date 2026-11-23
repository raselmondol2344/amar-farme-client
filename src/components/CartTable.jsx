
"use client";

import { useState } from "react";
import Image from "next/image";
import { Table, Button } from "@heroui/react";
import { TfiShoppingCart } from "react-icons/tfi";
import { CartDeleteAlert } from "./CartDeleteAlert";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

export default function CartTable({ data }) {
  const [quantities, setQuantities] = useState({});

  // Get quantity of each product
  const getQuantity = (id) => quantities[id] ?? 1;

  // Increase quantity
  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 1) + 1,
    }));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] ?? 1) - 1, 0),
    }));
  };

  // Calculate total price of all cart items
  const totalPrice = (data || []).reduce((total, item) => {
    return total + Number(item.price) * getQuantity(item._id);
  }, 0);

  // Empty cart
  if (!data || data.length === 0) {
    return (
      <div className="w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            My Cart
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Review your selected products before payment.
          </p>
        </div>

        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-green-100 bg-white px-5 py-10 text-center shadow-sm sm:min-h-[380px] sm:px-8">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <TfiShoppingCart className="text-3xl text-green-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Your Cart is Empty
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
            You have not added any product to your cart yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          My Cart
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
          Review your selected products before payment.
        </p>
      </div>

      {/* Cart Table */}
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-4 py-4 sm:px-6">
          <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
            Cart Items
          </h3>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Review your products and quantities below.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Cart products"
                className="min-w-[680px]"
              >
                <Table.Header className="bg-gray-50">
                  <Table.Column className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                    Image
                  </Table.Column>

                  <Table.Column
                    isRowHeader
                    className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm"
                  >
                    Product Name
                  </Table.Column>

                  <Table.Column className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                    Price
                  </Table.Column>

                  <Table.Column className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                    Action
                  </Table.Column>

                  <Table.Column className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                    Count
                  </Table.Column>
                </Table.Header>

                <Table.Body>
                  {data.map((item) => {
                    const quantity = getQuantity(item._id);

                    return (
                      <Table.Row
                        key={item._id}
                        className="border-b border-gray-100 transition-colors last:border-b-0 hover:bg-green-50/50"
                      >
                        {/* Image */}
                        <Table.Cell className="px-4 py-4">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 sm:h-16 sm:w-16">
                            <Image
                              src={item.image}
                              alt={item.productName}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                        </Table.Cell>

                        {/* Product Name */}
                        <Table.Cell className="max-w-[220px] px-4 py-4">
                          <span className="block break-words text-sm font-semibold leading-5 text-gray-800 sm:text-base">
                            {item.productName}
                          </span>
                        </Table.Cell>

                        {/* Price */}
                        <Table.Cell className="whitespace-nowrap px-4 py-4">
                          <span className="text-sm font-bold text-green-700 sm:text-base">
                            ৳{item.price}
                          </span>
                        </Table.Cell>

                        {/* Delete Action */}
                        <Table.Cell className="px-4 py-4">
                          <div className="flex items-center">
                            <CartDeleteAlert data={item} />
                          </div>
                        </Table.Cell>

                        {/* Quantity */}
                        <Table.Cell className="px-4 py-4">
                          <div className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white p-1">
                            <Button
                              size="sm"
                              aria-label="Increase quantity"
                              onPress={() => increaseQuantity(item._id)}
                              className="h-9 min-w-9 rounded-lg bg-green-600 px-2 text-white transition-colors hover:bg-green-700"
                            >
                              <IoMdAdd className="text-lg" />
                            </Button>

                            <span className="flex h-9 min-w-9 items-center justify-center px-2 text-sm font-bold text-gray-800">
                              {quantity}
                            </span>

                            <Button
                              size="sm"
                              aria-label="Decrease quantity"
                              isDisabled={quantity === 0}
                              onPress={() => decreaseQuantity(item._id)}
                              className="h-9 min-w-9 rounded-lg bg-red-50 px-2 text-red-600 transition-colors hover:bg-red-100"
                            >
                              <GrFormSubtract className="text-lg" />
                            </Button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>

        {/* Total Pay */}
        <div className="border-t border-gray-100 bg-gray-50/70 p-4 sm:p-6">
          <div className="mx-auto max-w-5xl">
            <Button
              className="h-12 w-full rounded-xl bg-green-600 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 sm:h-14 sm:text-base"
            >
              Total Pay = ৳{totalPrice.toLocaleString("en-BD")}
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
