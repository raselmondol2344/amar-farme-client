import ProductCard from "@/components/ProductCard";
import ProductpagePagination from "@/components/ProductpagePagination";
import SearchForm from "@/components/SearchForm";


const ProductPage = async ({ searchParams }) => {
  const searchQuery = await searchParams;

  const searchText = searchQuery.search || "";

  const page = Number(searchQuery.page) || 1;
  const limit = Number(searchQuery.limit) || 8;

  const res = await fetch(
    `http://localhost:8000/product?page=${page}&limit=${limit}&search=${searchText}`,
    {
      cache: "no-store",
    }
  );

  const products = await res.json()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-green-50/30 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text p-3 text-3xl font-extrabold text-transparent sm:text-4xl">
            আমাদের সমস্ত প্রোডাক্ট
          </h1>

          <p className="text-sm text-gray-600 sm:text-base">
            তাজা এবং সেরা মানের অর্গানিক প্রোডাক্টগুলো উপভোগ করুন
          </p>

          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-green-600"></div>
        </div>


        <div className="mb-10 flex justify-center">

          <SearchForm searchText={searchText}></SearchForm>
          
        </div>







        {/* Products */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.data?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-end">
          <ProductpagePagination
            page={products.page}
            total_page={products.total_page}
          />
        </div>

      </div>
    </div>
  );
};

export default ProductPage;