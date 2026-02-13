import { Shield, Zap, Users, HeadphonesIcon, Code, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Secure & Scalable Architecture',
    description: 'Built on enterprise-grade infrastructure with bank-level security and unlimited scalability.',
  },
  {
    icon: Code,
    title: 'API-First & Cloud-Native',
    description: 'Modern microservices architecture with comprehensive APIs for seamless integration.',
  },
  {
    icon: Users,
    title: 'Enterprise & Startup Friendly',
    description: 'Solutions designed for businesses of all sizes - from startups to large enterprises.',
  },
  {
    icon: HeadphonesIcon,
    title: 'End-to-End Support',
    description: '24/7 technical support and dedicated account management for your success.',
  },
  {
    icon: Zap,
    title: 'White-Label Ready Solutions',
    description: 'Complete customization with your branding for a seamless customer experience.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Trusted by leading businesses across India with millions of transactions processed.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-100 rounded-full mb-4">
            <span className="text-sm text-[#10b981]" style={{ fontWeight: 600 }}>WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Built for Modern Businesses
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            The perfect combination of cutting-edge technology, security, and support
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl text-[#0f172a]" style={{ fontWeight: 700 }}>
                    {reason.title}
                  </h3>
                  
                  <p className="text-[#64748b] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl">
          <div className="text-center">
            <div className="text-4xl text-white mb-2" style={{ fontWeight: 700 }}>500K+</div>
            <div className="text-slate-300">Transactions Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-white mb-2" style={{ fontWeight: 700 }}>99.99%</div>
            <div className="text-slate-300">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-white mb-2" style={{ fontWeight: 700 }}>1000+</div>
            <div className="text-slate-300">Active Merchants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-white mb-2" style={{ fontWeight: 700 }}>24/7</div>
            <div className="text-slate-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
