import ProductCard from "@/components/ProductCard";

const ProductPage = async () => {
    const res = await fetch('http://localhost:8000/product');
    const products = await res.json();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-green-50/30 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600 mb-2">
                        আমাদের সমস্ত প্রোডাক্ট
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        তাজা এবং সেরা মানের অর্গানিক প্রোডাক্টগুলো উপভোগ করুন
                    </p>
                    <div className="w-24 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
                </div>

                {/* Grid System: sm = 1 column, md = 2 columns, lg = 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductPage;