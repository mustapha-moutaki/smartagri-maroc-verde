import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Thermometer, Droplets, Zap, Smartphone, Bell } from "lucide-react";
import sensorImage from "@/assets/sensors-tech.jpg";

export const SolutionSection = () => {
  const hardware = [
    { icon: Droplets, name: "YL-69", desc: "Capteur d'humidité du sol" },
    { icon: Thermometer, name: "DHT11", desc: "Température & humidité air" },
    { icon: Thermometer, name: "DS18B20", desc: "Température sol" },
    { icon: Cpu, name: "ESP32", desc: "Microcontrôleur IoT" },
    { icon: Zap, name: "Solaire", desc: "Panneau + batterie" },
  ];

  const appFeatures = [
    { icon: Smartphone, title: "Application Web/Mobile", desc: "Interface intuitive multilingue" },
    { icon: Bell, title: "Alertes SMS", desc: "Notifications temps réel" },
    { icon: Thermometer, title: "Monitoring", desc: "Suivi température & humidité" },
    { icon: Droplets, title: "Contrôle irrigation", desc: "Gestion automatique" },
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Notre Solution"
          subtitle="Un système complet, low-cost et adapté au contexte marocain"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src={sensorImage}
              alt="Capteurs IoT"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">Composants matériels</h3>
            <div className="grid gap-4">
              {hardware.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Application intelligente
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Workflow */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Badge variant="secondary" className="px-6 py-3 text-base">
              Capteurs
            </Badge>
            <div className="text-2xl text-primary">→</div>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              ESP32
            </Badge>
            <div className="text-2xl text-primary">→</div>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              Cloud
            </Badge>
            <div className="text-2xl text-primary">→</div>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              Application
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
