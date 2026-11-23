"use client";

import React from "react";

export default function SearchForm({ searchText }) {
  return (
    <form action="/products" className="w-full max-w-xl">
      <div className="flex w-full items-center gap-2 rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-gray-200 transition-all focus-within:ring-2 focus-within:ring-green-500">
        <input
          type="search"
          name="search"
          placeholder="Search products..."
          defaultValue={searchText}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:text-base"
        />

        <button
          type="submit"
          className="shrink-0 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-700 active:scale-95 sm:px-6"
        >
          Search
        </button>
      </div>
    </form>
  );
}
