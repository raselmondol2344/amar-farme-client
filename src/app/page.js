import Banner from "@/components/Banner";
//import Marqueee from "@/components/Marqueee";
import Review from "@/components/Review";
//import TopProducts from "@/components/TopProducts";
import WhyWe from "@/components/WhyWe";
import ProductCard from "@/components/ProductCard";
import { Button } from '@heroui/react';
import Link from "next/link";


export default async function Home() {
  const res = await fetch('http://localhost:8000/product');
  const products = await res.json();

  return (
    <div >
      <Banner></Banner>
      {/* <TopProducts></TopProducts> */}



      <section >

        <div className='py-5 max-w-7xl mx-auto '>

          <div className=' py-5 max-w-7xl mx-auto  mt-10 text-center'>
             <h1 className="text-2xl font-bold text-green-600 sm:text-3xl">
            আপনার জন্য বাছাই করা
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            সতেজ ও মানসম্মত পণ্য, আপনার প্রতিদিনের প্রয়োজনের জন্য
          </p>



          </div>

         



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <Link href={'/products'}>
              <Button className=" bg-slate-200 text-green-600  hover:bg-green-600 hover:text-white font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm px-4 sm:px-3 md:px-5 lg:px-7 h-7 sm:h-7 md:h-8 lg:h-10 rounded-full transition-all duration-300" >আরো দেখুন</Button>
            </Link>
          </div>


        </div>



      </section>
      <WhyWe></WhyWe>
      <Review></Review>


    </div>
  );
}
