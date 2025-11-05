import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { TargetUsersSection } from "@/components/sections/TargetUsersSection";
import { BudgetSection } from "@/components/sections/BudgetSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ConclusionSection } from "@/components/sections/ConclusionSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ObjectivesSection />
      <SolutionSection />
      <ImpactSection />
      <AdvantagesSection />
      <ArchitectureSection />
      <TargetUsersSection />
      <BudgetSection />
      <RoadmapSection />
      <ResultsSection />
      <ConclusionSection />
      <CTASection />
    </div>
  );
};

export default Index;
