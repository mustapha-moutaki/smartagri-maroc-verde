import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Users, Building2, Check } from "lucide-react";

export const TargetUsersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Utilisateurs Cibles"
          subtitle="Des solutions adaptées à chaque type d'agriculteur"
          centered
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Small Farmers */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-2xl transition-all animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Petits agriculteurs</h3>
                <p className="text-sm text-muted-foreground">85% des exploitations marocaines</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Kit Plug & Play:</span> Installation simple en 30 minutes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Alertes SMS:</span> Notifications même sans smartphone
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Support vocal:</span> Instructions en Darija
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">ROI rapide:</span> Retour sur investissement en 3-4 mois
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-center text-muted-foreground">
                Prix estimé: <span className="text-xl font-bold text-primary">2 500-3 000 DH</span>
              </p>
            </div>
          </Card>

          {/* Large Farmers */}
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-2xl transition-all animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-secondary to-secondary-light">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Grands agriculteurs</h3>
                <p className="text-sm text-muted-foreground">Exploitations industrielles</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Gestion multi-parcelles:</span> Vue d'ensemble complète
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Dashboard avancé:</span> Analytics et rapports détaillés
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">IA prédictive:</span> Recommandations personnalisées
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">API intégration:</span> Compatible avec vos systèmes
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-center text-muted-foreground">
                Solution sur mesure avec <span className="text-xl font-bold text-secondary">support premium</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
