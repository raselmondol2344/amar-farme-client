"use client";

import Image from "next/image";
import { Table, Button, Pagination } from "@heroui/react";
import Link from "next/link";

export default function SellerProductTable({ products }) {
  const { data, page, total_page } = products;

  const pages = [];

  for (let i = 1; i <= total_page; i++) {
    pages.push(i);
  }

  // Empty products
  if (!data || data.length === 0) {
    return (
      <div className="w-full">
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-green-100 bg-white px-5 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">
            No Products Found
          </h3>

          <p className="mt-2 max-w-md text-sm text-gray-500">
            You have not added any product yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <Table>
          <Table.ScrollContainer>
            <Table.Content
              aria-label="Products"
              className="min-w-[700px]"
            >
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
              </Table.Header>

              <Table.Body>
                {data.map((item) => (
                  <Table.Row
                    key={item._id}
                    className="border-b border-gray-100 transition-colors last:border-b-0 hover:bg-green-50/40"
                  >
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

                    <Table.Cell className="py-4">
                      <span className="text-sm font-semibold text-gray-800 sm:text-base">
                        {item.productName}
                      </span>
                    </Table.Cell>

                    <Table.Cell className="py-4">
                      <span className="text-sm font-bold text-green-600 sm:text-base">
                        ৳{item.price}
                      </span>
                    </Table.Cell>

                    <Table.Cell className="py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Button
                          size="sm"
                          className="rounded-lg bg-green-500 px-3 text-xs font-medium text-white hover:bg-green-700 sm:text-sm"
                        >
                          Edit
                        </Button>

                        <Button
                          size="sm"
                          className="rounded-lg bg-red-500 px-3 text-xs font-medium text-white hover:bg-red-700 sm:text-sm"
                        >
                          Delete
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>

          <Table.Footer >
            <div className="ml-auto">
              <Pagination size="sm">
              <Pagination.Content >

                {/* Previous */}
                <Pagination.Item>
                  <Link
                    href={`/dashbord/seller/products?page=${page - 1}`}
                   
                  >
                    <Pagination.Previous 
                    isDisabled={page===1}
                    >
                      <Pagination.PreviousIcon />
                      Prev
                    </Pagination.Previous>
                  </Link>
                </Pagination.Item>

                {/* Pages */}
                {pages.map((p) => (
                  <Pagination.Item key={p}>
                    <Link href={`/dashbord/seller/products?page=${p}`}>
                      <Pagination.Link isActive={p === page}  className={`${p===page?"bg-red-500" : ""}`}>
                        {p}
                      </Pagination.Link>
                    </Link>
                  </Pagination.Item>
                ))}

                {/* Next */}
                <Pagination.Item>
                  <Link
                    href={`/dashbord/seller/products?page=${page + 1}`}
                   
                  >
                    <Pagination.Next
                    isDisabled={page===total_page}>
                      Next
                      <Pagination.NextIcon />
                    </Pagination.Next>
                  </Link>
                </Pagination.Item>

              </Pagination.Content>
            </Pagination>
            </div>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}