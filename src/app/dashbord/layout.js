import DashbordAsidebar from "@/components/DashbordAsidebar";
import DashbordNavbar from "@/components/DashbordNavbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Dashboard Layout */}
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <DashbordAsidebar></DashbordAsidebar>
       

        {/* Main Content */}
        <main className="flex-1 min-w-0">

          {/* Navbar */}
         <DashbordNavbar></DashbordNavbar>

          {/* Page Content */}
          <section className="p-6">
            {children}
          </section>

        </main>

      </div>
    </div>
  );
}