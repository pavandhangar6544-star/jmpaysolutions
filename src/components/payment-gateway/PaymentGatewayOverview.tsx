import { 
  Smartphone, 
  CreditCard, 
  Building2, 
  QrCode, 
  BarChart3, 
  Eye, 
  Webhook, 
  Lock 
} from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'UPI & QR Code Payments',
    description: 'Accept payments via UPI apps and dynamic QR codes with instant confirmation',
  },
  {
    icon: QrCode,
    title: 'Intent-Based Payments',
    description: 'Direct UPI intent integration for seamless app-to-app payment experience',
  },
  {
    icon: Building2,
    title: 'Net Banking',
    description: 'Support for all major banks with secure net banking payment flows',
  },
  {
    icon: CreditCard,
    title: 'Debit & Credit Cards',
    description: 'Accept all major card networks with PCI-DSS compliant processing',
  },
  {
    icon: BarChart3,
    title: 'Merchant Dashboard',
    description: 'Comprehensive dashboard for transaction monitoring and analytics',
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    description: 'Live transaction tracking with instant status updates and alerts',
  },
  {
    icon: Webhook,
    title: 'Webhooks & Callbacks',
    description: 'Automated notifications and callback handling for payment events',
  },
  {
    icon: Lock,
    title: 'High Security & Encryption',
    description: 'Bank-grade security with end-to-end encryption and tokenization',
  },
];

export function PaymentGatewayOverview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>FEATURES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Complete Digital Payment Infrastructure
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Everything you need to process payments securely and efficiently
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg text-[#0f172a] mb-2" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
