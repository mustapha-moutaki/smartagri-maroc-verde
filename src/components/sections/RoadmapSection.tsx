import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const RoadmapSection = () => {
  const phases = [
    {
      week: "Semaine 1-2",
      title: "MVP & Conception",
      tasks: [
        "Architecture système complète",
        "Sélection composants optimaux",
        "Développement app prototype",
        "Tests capteurs individuels",
      ],
      status: "completed",
    },
    {
      week: "Semaine 3-4",
      title: "Prototype physique",
      tasks: [
        "Assemblage hardware complet",
        "Intégration ESP32 & capteurs",
        "Installation système solaire",
        "Tests en conditions réelles",
      ],
      status: "completed",
    },
    {
      week: "Semaine 5-6",
      title: "Version Beta",
      tasks: [
        "Déploiement chez 5 agriculteurs",
        "Collecte feedback utilisateurs",
        "Ajustements UI/UX",
        "Optimisation algorithmes IA",
      ],
      status: "in-progress",
    },
    {
      week: "Semaine 7-8",
      title: "Version finale",
      tasks: [
        "Corrections bugs identifiés",
        "Documentation complète",
        "Formation utilisateurs",
        "Lancement commercial",
      ],
      status: "upcoming",
    },
  ];

  const statusColors = {
    completed: "from-primary to-primary-light",
    "in-progress": "from-secondary to-secondary-light",
    upcoming: "from-muted to-muted-foreground",
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Roadmap du projet"
          subtitle="Planning de développement sur 8 semaines"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-all animate-fade-in-up ${
                phase.status === "completed" ? "border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">{phase.week}</span>
                {phase.status === "completed" && (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                )}
              </div>

              <div className={`h-2 rounded-full bg-gradient-to-r ${statusColors[phase.status]} mb-4`} />

              <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>

              <ul className="space-y-2">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Progression globale</span>
            <span className="text-sm font-bold text-primary">75%</span>
          </div>
          <div className="h-4 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 animate-fade-in" style={{ width: "75%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
