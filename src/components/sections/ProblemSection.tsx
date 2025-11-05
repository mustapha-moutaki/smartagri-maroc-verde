import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { Droplet, TrendingDown, Users, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="La Problématique"
          subtitle="Le Maroc fait face à une crise hydrique majeure qui impacte directement l'agriculture"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={TrendingDown}
            value="-30%"
            label="Baisse des précipitations"
            trend="Tendance alarmante"
            color="orange"
          />
          <StatCard
            icon={Droplet}
            value="+40%"
            label="Hausse consommation d'eau"
            trend="Croissance continue"
            color="blue"
          />
          <StatCard
            icon={AlertTriangle}
            value="40-50%"
            label="Gaspillage irrigation"
            trend="Perte majeure"
            color="orange"
          />
          <StatCard
            icon={Users}
            value="85%"
            label="Petits agriculteurs"
            trend="70% sans accès tech"
            color="green"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-destructive/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Défis pour les petits agriculteurs
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Ressources en eau limitées et coûteuses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Systèmes d'irrigation traditionnels inefficaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Manque d'accès aux technologies modernes (70%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Coûts énergétiques élevés pour le pompage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Difficultés de suivi et d'optimisation des cultures</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Droplet className="h-6 w-6 text-secondary" />
              Impact environnemental
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>Épuisement des nappes phréatiques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>Dégradation des sols par sur-irrigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>Émissions CO2 liées au pompage diesel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>Utilisation excessive d'engrais et pesticides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>Menace sur la sécurité alimentaire du pays</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
