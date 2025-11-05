import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  trend?: string;
  color?: "green" | "blue" | "orange";
}

export const StatCard = ({ icon: Icon, value, label, trend, color = "green" }: StatCardProps) => {
  const colorClasses = {
    green: "from-primary to-primary-light",
    blue: "from-secondary to-secondary-light",
    orange: "from-accent to-accent/80",
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all animate-fade-in-up">
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]} mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
        {trend && (
          <p className="text-xs font-medium text-primary mt-2">{trend}</p>
        )}
      </div>
    </Card>
  );
};
