import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { Droplet, Zap, TrendingUp, Leaf, Users, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ResultsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Résultats Mesurés"
          subtitle="Des impacts concrets et mesurables pour l'agriculture marocaine"
          centered
        />

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={Droplet}
            value="30-35%"
            label="Économie d'eau"
            trend="Par rapport méthodes traditionnelles"
            color="blue"
          />
          <StatCard
            icon={Zap}
            value="25-30%"
            label="Réduction énergie"
            trend="Grâce à l'alimentation solaire"
            color="orange"
          />
          <StatCard
            icon={TrendingUp}
            value="+20%"
            label="Productivité"
            trend="Augmentation moyenne des rendements"
            color="green"
          />
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-light">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Impact environnemental</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Réduction CO2: -25% par hectare</li>
              <li>• Préservation nappes phréatiques</li>
              <li>• Moins d'engrais nécessaires</li>
              <li>• Agriculture durable</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-secondary to-secondary-light">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Impact social</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Accessibilité pour tous</li>
              <li>• Formation & autonomisation</li>
              <li>• Création d'emplois tech</li>
              <li>• Sécurité alimentaire</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-accent/80">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Impact économique</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• ROI: 3-4 mois</li>
              <li>• Revenus agricoles +15-25%</li>
              <li>• Réduction coûts opérationnels</li>
              <li>• Compétitivité accrue</li>
            </ul>
          </Card>
        </div>

        {/* Success Story */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Témoignage pilote
            </h3>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Grâce à SmartAgri, j'ai réduit ma facture d'eau de 40% et mes tomates sont plus belles que jamais. 
              L'application en Darija est très facile à utiliser, même pour moi qui ne suis pas technicien."
            </blockquote>
            <p className="font-semibold text-foreground">
              Mohammed, agriculteur à Souss-Massa
            </p>
            <p className="text-sm text-muted-foreground">5 hectares de culture maraîchère</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
