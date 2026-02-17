import { Header } from "../Header";
import { Footer } from "../Footer";
import { LMSHero } from "./LMSHero";
import { LMSOverview } from "./LMSOverview";
import { LearningExperience } from "./LearningExperience";
import { LMSFeatures } from "./LMSFeatures";
import { WhyChooseLMS } from "./WhyChooseLMS";
import { LMSFAQ } from "./LMSFAQ";
import { LMSCTA } from "./LMSCTA";

export function LMSPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LMSHero />
        <LMSOverview />
        <LearningExperience />
        <LMSFeatures />
        <WhyChooseLMS />
        <LMSFAQ />
        <LMSCTA />
      </main>
      <Footer />
    </div>
  );
}
