import { Header } from "../Header";
import { Footer } from "../Footer";
import { WebDevHero } from "./WebDevHero";
import { WebDevServices } from "./WebDevServices";
import { WebDevTech } from "./WebDevTech";
import { WhyChooseWebDev } from "./WhyChooseWebDev";
import { WebDevCTA } from "./WebDevCTA";

export function WebDevPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <WebDevHero />
        <WebDevServices />
        <WebDevTech />
        <WhyChooseWebDev />
        <WebDevCTA />
      </main>
      <Footer />
    </div>
  );
}
