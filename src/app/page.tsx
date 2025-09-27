import Image from "next/image";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import GenerateSection from "@/components/GenerateSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />
      <GenerateSection />
      <GallerySection />
      <Footer />
    </div>
  );
}