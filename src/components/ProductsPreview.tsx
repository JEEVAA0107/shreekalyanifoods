import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, ChefHat, Clock, Heart } from "lucide-react";

const ProductsPreview = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Authentic South Indian Delights
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From traditional fermented batters to ready-to-eat delicacies, we bring you the authentic taste 
            of South India with modern convenience. Every product is crafted with love, using time-honored recipes 
            passed down through generations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Traditional Recipes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Time-honored recipes preserved through generations, ensuring authentic taste in every bite.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Made with Love</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product is crafted with care and passion, bringing the warmth of home-cooked meals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Fresh Daily</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prepared fresh daily with premium ingredients, ensuring maximum nutrition and flavor.
              </p>
            </CardContent>
          </Card>
        </div>

        

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
            Explore Our Complete Range
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover over 40+ authentic South Indian products, each with unique varieties 
            and customization options to suit your taste preferences.
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-gradient-warm hover:shadow-warm transition-all duration-300 text-lg px-8 py-3"
            >
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;