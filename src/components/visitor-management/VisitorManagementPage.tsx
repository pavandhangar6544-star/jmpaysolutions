import { Header } from "../Header";
import { Footer } from "../Footer";
import { VisitorManagementHero } from "./VisitorManagementHero";
import { VisitorManagementOverview } from "./VisitorManagementOverview";
import { VisitorManagementFeatures } from "./VisitorManagementFeatures";
import { WhyChooseVisitorManagement } from "./WhyChooseVisitorManagement";
import { VisitorManagementFAQ } from "./VisitorManagementFAQ";
import { VisitorManagementCTA } from "./VisitorManagementCTA";

export function VisitorManagementPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <VisitorManagementHero />
        <VisitorManagementOverview />
        <VisitorManagementFeatures />
        <WhyChooseVisitorManagement />
        <VisitorManagementFAQ />
        <VisitorManagementCTA />
      </main>
      <Footer />
    </div>
  );
}
