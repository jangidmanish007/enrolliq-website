import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToHash from "@/components/shared/ScrollToHash";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
