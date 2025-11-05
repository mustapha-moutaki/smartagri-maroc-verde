import { Button } from "@/components/ui/button";
import { Droplet, Sun, Sprout, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart Agriculture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Floating Icons */}
          <div className="flex gap-4 mb-8">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm animate-float">
              <Droplet className="h-6 w-6 text-white" />
            </div>
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm animate-float" style={{ animationDelay: "0.5s" }}>
              <Sun className="h-6 w-6 text-white" />
            </div>
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm animate-float" style={{ animationDelay: "1s" }}>
              <Sprout className="h-6 w-6 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SmartAgri Maroc
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold">
            Système intelligent de gestion de l'irrigation et du suivi agricole
          </p>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
            Une solution low-cost adaptée au contexte marocain
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => scrollToSection("solution")}
            >
              Découvrir la solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              Nous contacter
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "20-40%", label: "Économie d'eau" },
              { value: "30%", label: "Économie d'énergie" },
              { value: "95%", label: "Précision capteurs" },
              { value: "3-4 mois", label: "ROI" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
