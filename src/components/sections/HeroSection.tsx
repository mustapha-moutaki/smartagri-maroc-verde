import { Button } from "@/components/ui/button";
import { Droplet, Sun, Sprout, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with modern gradient mesh */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart Agriculture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Modern Floating Icons */}
          <div className="flex gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-xl border border-primary/20 shadow-lg animate-float hover:scale-110 transition-transform">
              <Droplet className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3 rounded-2xl bg-secondary/10 backdrop-blur-xl border border-secondary/20 shadow-lg animate-float hover:scale-110 transition-transform" style={{ animationDelay: "0.5s" }}>
              <Sun className="h-6 w-6 text-secondary" />
            </div>
            <div className="p-3 rounded-2xl bg-accent/10 backdrop-blur-xl border border-accent/20 shadow-lg animate-float hover:scale-110 transition-transform" style={{ animationDelay: "1s" }}>
              <Sprout className="h-6 w-6 text-accent" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent mb-6 leading-tight">
            SmartAgri Maroc
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 font-semibold">
            Système intelligent de gestion de l'irrigation et du suivi agricole
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Une solution low-cost adaptée au contexte marocain
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl"
              onClick={() => scrollToSection("solution")}
            >
              Découvrir la solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("contact")}
            >
              Nous contacter
            </Button>
          </div>

          {/* Modern Stats Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "20-40%", label: "Économie d'eau", icon: Droplet, color: "primary" },
              { value: "30%", label: "Économie d'énergie", icon: Sun, color: "secondary" },
              { value: "95%", label: "Précision capteurs", icon: Sprout, color: "accent" },
              { value: "3-4 mois", label: "ROI", icon: ArrowRight, color: "primary" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`h-8 w-8 mx-auto mb-3 text-${stat.color} group-hover:scale-110 transition-transform`} />
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 backdrop-blur-sm bg-background/20">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
