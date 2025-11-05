import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export const ImpactSection = () => {
  const savingsData = [
    { category: "Eau", avant: 100, apres: 65, économie: 35 },
    { category: "Énergie", avant: 100, apres: 70, économie: 30 },
    { category: "Coûts", avant: 100, apres: 72, économie: 28 },
  ];

  const environmentalData = [
    { name: "CO2 réduit", value: 25, color: "hsl(145, 65%, 35%)" },
    { name: "Eau économisée", value: 35, color: "hsl(200, 85%, 45%)" },
    { name: "Productivité", value: 40, color: "hsl(35, 65%, 55%)" },
  ];

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Impact & Résultats"
          subtitle="Des économies mesurables et un impact environnemental positif"
          centered
        />

        {/* Before/After Comparison */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Économies par hectare
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(145, 20%, 88%)" />
              <XAxis dataKey="category" stroke="hsl(150, 25%, 15%)" />
              <YAxis stroke="hsl(150, 25%, 15%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(145, 20%, 88%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Bar dataKey="avant" fill="hsl(0, 84.2%, 60.2%)" name="Avant" radius={[8, 8, 0, 0]} />
              <Bar dataKey="apres" fill="hsl(145, 65%, 35%)" name="Après" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Environmental Impact */}
          <Card className="p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Impact environnemental
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={environmentalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {environmentalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Key Metrics */}
          <Card className="p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Bénéfices clés</h3>
            <div className="space-y-6">
              {[
                { label: "Réduction consommation eau", value: "20-40%", color: "from-secondary to-secondary-light" },
                { label: "Économie d'énergie", value: "30%", color: "from-primary to-primary-light" },
                { label: "Réduction émissions CO2", value: "-25%", color: "from-accent to-accent/80" },
                { label: "Augmentation productivité", value: "+15-25%", color: "from-primary to-secondary" },
              ].map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${metric.color} text-white font-bold`}>
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
