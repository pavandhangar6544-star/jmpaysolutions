import { Header } from "../Header";
import { Footer } from "../Footer";
import { CustomSoftwareHero } from "./CustomSoftwareHero";
import { CustomSoftwareServices } from "./CustomSoftwareServices";
import { CustomSoftwareTech } from "./CustomSoftwareTech";
import { WhyChooseCustomSoftware } from "./WhyChooseCustomSoftware";
import { CustomSoftwareCTA } from "./CustomSoftwareCTA";

export function CustomSoftwarePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CustomSoftwareHero />
        <CustomSoftwareServices />
        <CustomSoftwareTech />
        <WhyChooseCustomSoftware />
        <CustomSoftwareCTA />
      </main>
      <Footer />
    </div>
  );
}
