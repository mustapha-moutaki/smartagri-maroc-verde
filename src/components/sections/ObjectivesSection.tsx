import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { Target, Droplet, Languages, Brain } from "lucide-react";

export const ObjectivesSection = () => {
  const objectives = [
    {
      icon: Target,
      title: "Précision maximale",
      description: "Mesure en temps réel de l'humidité du sol avec une précision de 95%, permettant une irrigation optimale",
    },
    {
      icon: Droplet,
      title: "Économies substantielles",
      description: "Réduction de 20-40% de la consommation d'eau et 30% d'économie d'énergie grâce à l'irrigation intelligente",
    },
    {
      icon: Languages,
      title: "Accessibilité totale",
      description: "Application multilingue (Arabe, Amazigh, Darija) avec notifications SMS et vocales pour tous les agriculteurs",
    },
    {
      icon: Brain,
      title: "Intelligence artificielle",
      description: "Recommandations prédictives avec 85% de précision basées sur les données météo et historiques",
    },
  ];

  return (
    <section id="objectives" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Objectifs"
          subtitle="Une solution complète pour révolutionner l'agriculture marocaine"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...objective} />
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { value: "95%", label: "Précision capteurs", description: "Mesures fiables" },
            { value: "20-40%", label: "Économie d'eau", description: "Réduction consommation" },
            { value: "85%", label: "Précision IA", description: "Recommandations" },
          ].map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {metric.value}
              </p>
              <p className="text-xl font-semibold text-foreground mb-1">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
