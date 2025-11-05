import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Wifi, Bluetooth, MessageSquare, CloudOff } from "lucide-react";

export const ArchitectureSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Architecture Technique"
          subtitle="Une infrastructure robuste et flexible"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hardware Stack */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              Stack Matériel
            </h3>
            <div className="space-y-4">
              {[
                { layer: "Capteurs", tech: "YL-69, DHT11, DS18B20" },
                { layer: "Microcontrôleur", tech: "ESP32 (Wi-Fi, Bluetooth)" },
                { layer: "Énergie", tech: "Panneau solaire 20W + Batterie 12V" },
                { layer: "Actuateurs", tech: "Relais 5V, électrovannes" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/10"
                >
                  <span className="font-medium text-foreground">{item.layer}</span>
                  <Badge variant="secondary">{item.tech}</Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Software Stack */}
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-secondary" />
              Stack Logiciel
            </h3>
            <div className="space-y-4">
              {[
                { layer: "Backend", tech: "Node.js, Python (IA)" },
                { layer: "Base de données", tech: "MongoDB, InfluxDB" },
                { layer: "Frontend", tech: "React Native, PWA" },
                { layer: "Cloud", tech: "AWS IoT, Firebase" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-secondary/10"
                >
                  <span className="font-medium text-foreground">{item.layer}</span>
                  <Badge variant="secondary">{item.tech}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Connectivity */}
        <Card className="p-8 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Options de connectivité
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: "Wi-Fi", desc: "Connexion internet" },
              { icon: Bluetooth, title: "Bluetooth", desc: "Contrôle local" },
              { icon: MessageSquare, title: "SMS", desc: "Alertes en temps réel" },
              { icon: CloudOff, title: "Mode hors ligne", desc: "Fonctionnement autonome" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
