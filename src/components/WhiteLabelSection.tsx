import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, Palette, Lock, Zap, Code, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Your logo, colors, and domain - complete white-label experience',
  },
  {
    icon: Lock,
    title: 'High Security',
    description: 'PCI-DSS compliant with end-to-end encryption',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second transaction processing',
  },
  {
    icon: Code,
    title: 'APIs & SDKs',
    description: 'Developer-friendly integration tools',
  },
  {
    icon: BarChart3,
    title: 'Merchant Dashboard',
    description: 'Real-time analytics and reporting',
  },
];

export function WhiteLabelSection() {
  return (
    <section id="payment-gateway" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-sm text-blue-300" style={{ fontWeight: 600 }}>WHITE-LABEL PAYMENT GATEWAY</span>
            </div>

            <h2 className="text-4xl lg:text-5xl" style={{ fontWeight: 700, lineHeight: '1.2' }}>
              Launch Your Own Branded Payment Gateway
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Complete white-label payment solution with your branding, your domain, and your customer experience. 
              Built on enterprise-grade infrastructure.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Fully customizable UI with your brand identity',
                'Dedicated merchant dashboard & admin panel',
                'Support for UPI, Cards, Net Banking, Wallets',
                'Instant settlements & automated reconciliation',
                'Complete API documentation & SDK support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-green-400" size={20} />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg" style={{ fontWeight: 600 }}>
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all" style={{ fontWeight: 600 }}>
                View Demo
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                    <div>
                      <div className="text-sm text-white" style={{ fontWeight: 600 }}>Your Brand</div>
                      <div className="text-xs text-slate-400">Payment Dashboard</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs" style={{ fontWeight: 600 }}>
                    Live
                  </div>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 mb-1">Today</div>
                    <div className="text-lg text-white" style={{ fontWeight: 700 }}>₹2.4L</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 mb-1">Success</div>
                    <div className="text-lg text-green-400" style={{ fontWeight: 700 }}>98.5%</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 mb-1">Orders</div>
                    <div className="text-lg text-blue-400" style={{ fontWeight: 700 }}>142</div>
                  </div>
                </div>

                {/* Mock Transactions */}
                <div className="space-y-2 pt-2">
                  {[1, 2, 3].map((_, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg"></div>
                        <div>
                          <div className="text-sm text-white" style={{ fontWeight: 600 }}>₹{(Math.random() * 10000).toFixed(0)}</div>
                          <div className="text-xs text-slate-400">UPI Payment</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs" style={{ fontWeight: 600 }}>
                        Success
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h4 className="text-white mb-2" style={{ fontWeight: 600 }}>{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
