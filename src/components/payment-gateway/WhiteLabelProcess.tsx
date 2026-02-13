import { FileText, Palette, Server, Code2, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Client Data Collection',
    description: 'We collect essential branding and technical details',
    items: ['Company Name', 'Logo', 'Contact Details', 'Domain Information', 'Cloud Server Details', 'Bank API Details'],
    color: 'blue',
  },
  {
    number: 2,
    icon: Palette,
    title: 'White-Label Configuration',
    description: 'Configure the gateway with your branding',
    items: ['Apply branding', 'Configure dashboard', 'Set domain', 'Enable payment modes'],
    color: 'teal',
  },
  {
    number: 3,
    icon: Server,
    title: 'Deployment',
    description: 'Deploy on your infrastructure',
    items: ['Deploy on client cloud/server', 'Secure environment setup', 'Production-ready infrastructure'],
    color: 'purple',
  },
  {
    number: 4,
    icon: Code2,
    title: 'Bank API Integration',
    description: 'Connect with bank payment systems',
    items: ['API authentication', 'Request/response mapping', 'Webhook integration', 'Security testing'],
    color: 'orange',
  },
  {
    number: 5,
    icon: Zap,
    title: 'Go Live',
    description: 'Start processing real transactions',
    items: ['QR & UPI enabled', 'Real transaction testing', 'Merchant onboarding'],
    color: 'green',
  },
  {
    number: 6,
    icon: CheckCircle,
    title: 'Done 🚀',
    description: 'Fully operational white-label gateway',
    items: ['Running under client brand', 'Merchant dashboard active', 'Support enabled'],
    color: 'blue',
  },
];

export function WhiteLabelProcess() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>
              WHITE-LABEL SOLUTION
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Launch Your Own Branded Payment Gateway
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Your brand. Your domain. Your merchants. Powered by our infrastructure.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-teal-200 via-purple-200 via-orange-200 to-green-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              const colorClasses = {
                blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200' },
                teal: { bg: 'bg-teal-500', light: 'bg-teal-50', border: 'border-teal-200' },
                purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200' },
                orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200' },
                green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200' },
              }[step.color];

              return (
                <div key={index} className="relative">
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content Card */}
                    <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className={`bg-white border-2 ${colorClasses.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="text-white" size={32} />
                          </div>
                          <div className="flex-1">
                            <div className={`inline-block px-3 py-1 ${colorClasses.light} rounded-full text-sm mb-2`} style={{ fontWeight: 700 }}>
                              Step {step.number}
                            </div>
                            <h3 className="text-2xl text-[#0f172a]" style={{ fontWeight: 700 }}>
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-[#64748b] mb-4 text-lg">
                          {step.description}
                        </p>

                        <ul className="space-y-2">
                          {step.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}></div>
                              <span className="text-[#475569]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Step Number Circle (center on desktop) */}
                    <div className={`hidden lg:flex ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} justify-center`}>
                      <div className={`relative w-24 h-24 ${colorClasses.bg} rounded-full flex items-center justify-center shadow-2xl z-10`}>
                        <span className="text-4xl text-white" style={{ fontWeight: 700 }}>{step.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
