'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
export default function DashbordAsidebar() {
  const { data: session } = authClient.useSession();
    const user = session?.user;

    const role = user?.role || "seller";
    //console.log(role)
    const navMenu ={
     seller:[
      {
        title:"Overview",
        href:"/dashbord/seller",
      },

      {
        title:"Add-Product",
        href:"/dashbord/seller/add-products"
      },
      {
        title:"Products",
        href:"/dashbord/seller/products"
      },
      {
        title:"Orders",
        href:"/dashbord/seller/orders"
      },
      {
        title:"Analytics",
        href:"/dashbord/seller/analytics"
      }
      
    ],

    buyer:[
       {
        title:"Overview",
        href:"/dashbord/buyer",
      },
      {
        title:"Orders",
        href:"/dashbord/buyer/orders"
      },
      {
        title:"Wishlist",
        href:"/dashbord/buyer/wishlist"
      },
      {
        title:"Review",
        href:"/dashbord/buyer/review"
      }

    ],
    admin:[
       {
        title:"Overview",
        href:"/dashbord/admin",
      },
      {
        title:"Users",
        href:"/dashbord/admin/user"
      },
      {
        title:"Products",
        href:"/dashbord/admin/products"
      }
    ]
  }

  //console.log(navMenu[role])
  const menu = navMenu[role]
  return (
    <div>
         <aside className="w-64 shrink-0 bg-white border-r h-full">
          <div className="h-full p-5">
            <Link href="/" className="flex items-center gap-2">
            <Image
              src="/asset/logo1.jpeg"
              width={55}
              height={55}
              alt="Amar Farme Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-200"
            />

            <h3 className="text-xl sm:text-2xl font-bold text-green-700">
              Amar <span className="text-orange-400">Farme</span>
            </h3>
          </Link>

            {/* Sidebar Menu */}
            <nav className="mt-8 space-y-2">
              {
                menu.map((item)=>(
              <Link 
              key={item.title}
               href={item.href}
                className="block px-4 py-2 rounded hover:bg-gray-100"
                >
                  {item.title}
               
              </Link>))
              }
            </nav>
          </div>
        </aside>
    </div>
  )
}
