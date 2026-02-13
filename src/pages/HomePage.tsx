import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { WhiteLabelSection } from '../components/WhiteLabelSection';
import { WhiteLabelDetailSection } from '../components/WhiteLabelDetailSection';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TechStack } from '../components/TechStack';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhiteLabelSection />
        <WhiteLabelDetailSection />
        <Services />
        <WhyChooseUs />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
