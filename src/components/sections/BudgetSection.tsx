import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export const BudgetSection = () => {
  const budgetData = [
    { name: "Capteurs", value: 450, percent: 25, color: "hsl(145, 65%, 35%)" },
    { name: "ESP32 & modules", value: 350, percent: 19, color: "hsl(200, 85%, 45%)" },
    { name: "Solaire & batterie", value: 600, percent: 33, color: "hsl(35, 65%, 55%)" },
    { name: "Relais & vannes", value: 200, percent: 11, color: "hsl(145, 55%, 55%)" },
    { name: "Boîtier & câbles", value: 220, percent: 12, color: "hsl(200, 75%, 65%)" },
  ];

  const total = budgetData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section id="budget" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Budget & ROI"
          subtitle="Un investissement rentable en quelques mois"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Budget Breakdown */}
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Coût prototype</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} DH`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
              <p className="text-sm text-muted-foreground mb-1">Coût total prototype</p>
              <p className="text-3xl font-bold text-foreground">{total} DH</p>
            </div>
          </Card>

          {/* ROI Calculation */}
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Retour sur investissement</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <p className="text-sm text-muted-foreground mb-2">Économies mensuelles (1 hectare)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Eau:</span>
                    <span className="font-semibold">300-400 DH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Électricité:</span>
                    <span className="font-semibold">150-200 DH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Productivité (+20%):</span>
                    <span className="font-semibold">500-800 DH</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold text-base">
                    <span>Total mensuel:</span>
                    <span className="text-primary">950-1400 DH</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-center">
                <p className="text-lg mb-2">ROI atteint en</p>
                <p className="text-4xl font-bold mb-1">3-4 mois</p>
                <p className="text-sm opacity-90">Pour une exploitation de 1 hectare</p>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Prix de vente estimé: <span className="font-semibold text-foreground">2 500-3 000 DH</span></p>
                <p className="mt-1">40-50% moins cher que la concurrence</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison with competitors */}
        <Card className="p-8 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Comparaison avec la concurrence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Critère</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">SmartAgri Maroc</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Concurrence</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Prix</td>
                  <td className="text-center py-3 px-4 font-semibold text-primary">2 500-3 000 DH</td>
                  <td className="text-center py-3 px-4">5 000-8 000 DH</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Support multilingue</td>
                  <td className="text-center py-3 px-4 text-primary">✓ Darija inclus</td>
                  <td className="text-center py-3 px-4">✗</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Alimenté solaire</td>
                  <td className="text-center py-3 px-4 text-primary">✓ Inclus</td>
                  <td className="text-center py-3 px-4">Option payante</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">IA prédictive</td>
                  <td className="text-center py-3 px-4 text-primary">✓ 85% précision</td>
                  <td className="text-center py-3 px-4">Basique</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Installation</td>
                  <td className="text-center py-3 px-4 text-primary">Plug & Play</td>
                  <td className="text-center py-3 px-4">Technicien requis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
