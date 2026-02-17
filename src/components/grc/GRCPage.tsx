import { Header } from "../Header";
import { Footer } from "../Footer";
import { GRCHero } from "./GRCHero";
import { GRCOverview } from "./GRCOverview";
import { ComplianceManagement } from "./ComplianceManagement";
import { GRCImplementationProcess } from "./GRCImplementationProcess";
import { GRCTechnicalArchitecture } from "./GRCTechnicalArchitecture";
import { GRCReportingFeatures } from "./GRCReportingFeatures";
import { WhyChooseGRC } from "./WhyChooseGRC";
import { GRCFAQ } from "./GRCFAQ";
import { GRCCTA } from "./GRCCTA";

export function GRCPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GRCHero />
        <GRCOverview />
        <ComplianceManagement />
        <GRCImplementationProcess />
        <GRCTechnicalArchitecture />
        <GRCReportingFeatures />
        <WhyChooseGRC />
        <GRCFAQ />
        <GRCCTA />
      </main>
      <Footer />
    </div>
  );
}
