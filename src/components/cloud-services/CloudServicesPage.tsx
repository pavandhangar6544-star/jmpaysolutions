import { Header } from "../Header";
import { Footer } from "../Footer";
import { CloudServicesHero } from "./CloudServicesHero";
import { CloudServicesOfferings } from "./CloudServicesOfferings";
import { CloudTech } from "./CloudTech";
import { WhyChooseCloud } from "./WhyChooseCloud";
import { CloudServicesCTA } from "./CloudServicesCTA";

export function CloudServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CloudServicesHero />
        <CloudServicesOfferings />
        <CloudTech />
        <WhyChooseCloud />
        <CloudServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
