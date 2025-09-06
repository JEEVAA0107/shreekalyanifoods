import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsPreview from "@/components/ProductsPreview";
import Pd from "@/components/pd";   // 🔹 Change name here
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <Pd />   {/* 🔹 Use with uppercase */}
      <ProductsPreview />
      <Footer />
    </div>
  );
};

export default Index;
