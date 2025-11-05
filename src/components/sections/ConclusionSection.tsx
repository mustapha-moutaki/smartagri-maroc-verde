import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export const ConclusionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Conclusion"
          subtitle="Une solution transformative pour l'agriculture marocaine"
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-destructive/20 to-orange-500/20 mb-4">
              <Target className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Le problème</h3>
            <p className="text-muted-foreground">
              Crise hydrique majeure, gaspillage de 40-50% de l'eau d'irrigation, 
              et 70% des petits agriculteurs sans accès aux technologies modernes
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Notre solution</h3>
            <p className="text-muted-foreground">
              Système IoT low-cost avec capteurs intelligents, IA prédictive, 
              alimentation solaire et interface multilingue accessible à tous
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Les résultats</h3>
            <p className="text-muted-foreground">
              30-40% d'économie d'eau, 30% d'énergie, +20% de productivité, 
              ROI en 3-4 mois avec impact environnemental et social positif
            </p>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-fade-in-up">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Notre Vision 2030
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Équiper 50% des agriculteurs marocains avec SmartAgri pour une agriculture 
              durable, rentable et résiliente face aux changements climatiques
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { value: "100 000+", label: "Agriculteurs équipés" },
                { value: "50 000 ha", label: "Terres optimisées" },
                { value: "30%", label: "Eau nationale économisée" },
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-lg bg-background/50 backdrop-blur-sm">
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
