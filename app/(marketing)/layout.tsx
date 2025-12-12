import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ContactPopup } from "./components/ContactPopup";
import { Preloader } from "./components/Preloader";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      <div id="main-content" className="min-h-screen flex flex-col hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactPopup />
      </div>
    </>
  );
}
