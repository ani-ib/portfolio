import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 md:px-6">{children}</main>
      <Footer />
    </div>
  );
}
