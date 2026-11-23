import DashbordAsidebar from "@/components/DashbordAsidebar";
import DashbordNavbar from "@/components/DashbordNavbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen w-full">

        <DashbordAsidebar />

        <main className="flex min-w-0 flex-1 flex-col">
          <DashbordNavbar />

          <section className="w-full flex-1 p-3 sm:p-4 md:p-5 lg:p-6">
            {children}
          </section>
        </main>

      </div>
    </div>
  );
}
