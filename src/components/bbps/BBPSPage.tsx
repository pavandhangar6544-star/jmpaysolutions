import { Header } from "../Header";
import { Footer } from "../Footer";
import { BBPSHero } from "./BBPSHero";
import { BBPSOverview } from "./BBPSOverview";
import { BillPaymentExperience } from "./BillPaymentExperience";
import { BBPSIntegrationProcess } from "./BBPSIntegrationProcess";
import { BBPSTechnicalArchitecture } from "./BBPSTechnicalArchitecture";
import { BBPSAPIDocumentation } from "./BBPSAPIDocumentation";
import { WhyChooseBBPS } from "./WhyChooseBBPS";
import { BBPSFAQ } from "./BBPSFAQ";
import { BBPSCTA } from "./BBPSCTA";

export function BBPSPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BBPSHero />
        <BBPSOverview />
        <BillPaymentExperience />
        <BBPSIntegrationProcess />
        <BBPSTechnicalArchitecture />
        <BBPSAPIDocumentation />
        <WhyChooseBBPS />
        <BBPSFAQ />
        <BBPSCTA />
      </main>
      <Footer />
    </div>
  );
}
