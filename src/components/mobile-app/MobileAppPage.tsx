import { Header } from "../Header";
import { Footer } from "../Footer";
import { MobileAppHero } from "./MobileAppHero";
import { MobileAppServices } from "./MobileAppServices";
import { MobileAppTech } from "./MobileAppTech";
import { WhyChooseMobileApp } from "./WhyChooseMobileApp";
import { MobileAppCTA } from "./MobileAppCTA";

export function MobileAppPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MobileAppHero />
        <MobileAppServices />
        <MobileAppTech />
        <WhyChooseMobileApp />
        <MobileAppCTA />
      </main>
      <Footer />
    </div>
  );
}
