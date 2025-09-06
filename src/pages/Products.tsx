import ProductSection from "@/components/ProductSection";
import IngredientsSection from "@/components/IngredientsSection";
import NutritionSection from "@/components/NutritionSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductSection />
      <IngredientsSection />
      <NutritionSection />
      <Footer />
    </div>
  );
};

export default Products;