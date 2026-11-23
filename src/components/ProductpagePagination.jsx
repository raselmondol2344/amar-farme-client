"use client";

import React from "react";
import { Pagination } from "@heroui/react";
import Link from "next/link";

export default function ProductpagePagination({
  page,
  total_page,
}) {
  const pages = [];

  for (let i = 1; i <= total_page; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination size="sm">
        <Pagination.Content>

          {/* Previous */}
          <Pagination.Item>
            <Link
              href={`/products?page=${page - 1}`}
              className={
                page === 1
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            >
              <Pagination.Previous isDisabled={page === 1}>
                <Pagination.PreviousIcon />
                Prev
              </Pagination.Previous>
            </Link>
          </Pagination.Item>

          {/* Pages */}
          {pages.map((p) => (
            <Pagination.Item key={p}>
              <Link href={`/products?page=${p}`}>
                <Pagination.Link
                  isActive={p === page}  className={`${p===page?"bg-red-500" : ""}`}
                >
                  {p}
                </Pagination.Link>
              </Link>
            </Pagination.Item>
          ))}

          {/* Next */}
          <Pagination.Item>
            <Link
              href={`/products?page=${page + 1}`}
              className={
                page === total_page
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            >
              <Pagination.Next isDisabled={page === total_page}>
                Next
                <Pagination.NextIcon />
              </Pagination.Next>
            </Link>
          </Pagination.Item>

        </Pagination.Content>
      </Pagination>
    </div>
  );
}