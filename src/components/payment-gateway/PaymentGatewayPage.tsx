import { Header } from '../Header';
import { Footer } from '../Footer';
import { PaymentGatewayHero } from './PaymentGatewayHero';
import { PaymentGatewayOverview } from './PaymentGatewayOverview';
import { CheckoutExperience } from './CheckoutExperience';
import { WhiteLabelProcess } from './WhiteLabelProcess';
import { TechnicalArchitecture } from './TechnicalArchitecture';
import { APIDocumentation } from './APIDocumentation';
import { WhyChooseGateway } from './WhyChooseGateway';
import { FAQ } from './FAQ';
import { PaymentGatewayCTA } from './PaymentGatewayCTA';

export function PaymentGatewayPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PaymentGatewayHero />
        <PaymentGatewayOverview />
        <CheckoutExperience />
        <WhiteLabelProcess />
        <TechnicalArchitecture />
        <APIDocumentation />
        <WhyChooseGateway />
        <FAQ />
        <PaymentGatewayCTA />
      </main>
      <Footer />
    </div>
  );
}
