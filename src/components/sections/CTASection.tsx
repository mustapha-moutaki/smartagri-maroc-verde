import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Investissez dans l'avenir de l'agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rejoignez-nous pour révolutionner l'agriculture marocaine et créer un impact durable
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-transparent hover:shadow-xl transition-all animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-primary-light mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">ROI attractif</h3>
            <p className="text-muted-foreground">
              Marché de 300M DH avec croissance annuelle de 25%
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-transparent hover:shadow-xl transition-all animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-secondary to-secondary-light mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Impact social</h3>
            <p className="text-muted-foreground">
              85% des agriculteurs marocains concernés
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-transparent hover:shadow-xl transition-all animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Avantage compétitif</h3>
            <p className="text-muted-foreground">
              50% moins cher avec technologie supérieure
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contactez-nous</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nom complet
                </label>
                <Input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Parlez-nous de votre intérêt..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" variant="cta" className="w-full" size="lg">
                Envoyer le message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Investment Details */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Informations d'investissement</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Montant recherché</p>
                    <p className="text-muted-foreground">500 000 - 1 000 000 DH</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Valorisation</p>
                    <p className="text-muted-foreground">À discuter selon apport</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ROI projeté</p>
                    <p className="text-muted-foreground">200-300% sur 3 ans</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Utilisation fonds</p>
                    <p className="text-muted-foreground">Production, marketing, R&D</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:contact@smartagrimaroc.ma" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@smartagrimaroc.ma
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+212600000000" className="text-muted-foreground hover:text-primary transition-colors">
                    +212 6 00 00 00 00
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    Casablanca, Maroc
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2025 SmartAgri Maroc. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};
