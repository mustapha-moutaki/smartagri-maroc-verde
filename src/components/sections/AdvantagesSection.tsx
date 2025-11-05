import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { Brain, DollarSign, Zap, FileText, Sun, Languages } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Brain,
      title: "Prédictions IA 85%",
      description: "Recommandations intelligentes basées sur l'historique et la météo pour optimiser vos cultures",
    },
    {
      icon: DollarSign,
      title: "Analyse économique",
      description: "Suivi détaillé des coûts et bénéfices par parcelle pour maximiser votre rentabilité",
    },
    {
      icon: Zap,
      title: "Low-cost & Plug & Play",
      description: "Installation simple sans expertise technique, accessible à tous les agriculteurs",
    },
    {
      icon: FileText,
      title: "Journal de production",
      description: "Historique complet de toutes les activités agricoles pour un suivi optimal",
    },
    {
      icon: Sun,
      title: "Alimenté solaire",
      description: "Autonomie énergétique totale grâce aux panneaux solaires et batteries",
    },
    {
      icon: Languages,
      title: "Support multilingue",
      description: "Interface en Arabe, Amazigh et Darija avec notifications vocales",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Avantages Compétitifs"
          subtitle="Une solution complète qui se démarque sur tous les plans"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...advantage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
