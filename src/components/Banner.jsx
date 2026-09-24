import Image from "next/image"; 
import React from "react"; 
import { Button } from "@heroui/react"; 
 
export default function Banner() { 

    return ( 
        <section className="w-full px-3 sm:px-5 md:px-6 lg:px-8 "> 
            <div className="relative w-full overflow-hidden rounded-xl"> 
                
 
            {/* Banner Image */} 

                <Image 
                    src="/asset/bannar.png" 
                    alt="Amar Farme Banner" 
                    width={1920} 
                    height={400} 
                    priority 
                    className="w-full h-auto object-cover object-center" 
                /> 
 
                {/* Text Over Image */} 
                <div className="absolute inset-0 flex items-center justify-start text-left pl-6 sm:pl-8 md:pl-16 lg:ml-70 lg:mb-40 lg:justify-between lg:text-center"> 
                    <div> 
                        <h1 className="text-md sm:text-lg md:text-2xl lg:text-4xl font-bold text-[#15803D]"> 
                            {/* sm & md er jonno br use hobe, kintu lg te ek line a thakbe */}
                            Quality Products, <br className="block lg:hidden" /> Grown with Care 
                        </h1> 
 
                        <p className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-[9px] md:text-xs text-[#4B5563] font-semibold"> 
                            Discover fresh, trusted farming <br className="block sm:hidden" /> products at great prices 
                        </p> 
 
                        <div className="mt-3 sm:mt-3 md:mt-4"> 
                            <Button 
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm px-4 sm:px-3 md:px-5 lg:px-7 h-7 sm:h-7 md:h-8 lg:h-10 rounded-full transition-all duration-300" 
                            > 
                                Explore Products 
                            </Button> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section> 
    ); 
}