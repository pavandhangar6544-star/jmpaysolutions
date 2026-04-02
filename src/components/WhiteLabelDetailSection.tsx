import { 
  FileText, 
  Palette, 
  Server, 
  Code2, 
  Zap, 
  CheckCircle, 
  Play,
  Shield,
  Smartphone,
  Tag
} from 'lucide-react';
// import VideoPlayer from "./ui/VideoPlayer";
import VideoPlayer from './ui/VideoPlayer';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Client Data Collection',
    description: 'We collect essential branding and technical details of your company.',
    details: [
      'Company Name',
      'Company Logo',
      'Contact Number & Support Details',
      'Domain Information',
      'Cloud Server Details',
      'Bank API / Acquirer Details'
    ],
    color: 'blue'
  },
  {
    number: 2,
    icon: Palette,
    title: 'White-Label Configuration',
    description: 'We configure our payment gateway software with your company\'s branding and identity.',
    details: [
      'Apply company logo & brand colors',
      'Configure domain & environment',
      'Prepare merchant-facing dashboards',
      'Enable required payment methods'
    ],
    color: 'teal'
  },
  {
    number: 3,
    icon: Server,
    title: 'Deployment on Server',
    description: 'The white-label payment gateway is securely deployed on your server or cloud infrastructure.',
    details: [
      'Client Cloud (AWS / Private Cloud)',
      'High-availability & secure setup',
      'Production-ready environment'
    ],
    color: 'purple'
  },
  {
    number: 4,
    icon: Code2,
    title: 'Bank API Integration',
    description: 'We integrate and test bank / acquirer APIs for live transaction processing.',
    details: [
      'API authentication',
      'Payment request & response mapping',
      'Webhook & callback handling',
      'Security & compliance checks'
    ],
    color: 'orange'
  },
  {
    number: 5,
    icon: Zap,
    title: 'Go Live with Payments',
    description: 'Real transactions start flowing through your branded payment gateway.',
    details: [
      'QR Code Payments',
      'UPI Intent',
      'Net Banking',
      'Cards (Debit / Credit)'
    ],
    color: 'green'
  },
  {
    number: 6,
    icon: CheckCircle,
    title: 'Done 🚀',
    description: 'Your fully branded, white-label payment gateway is live and ready for merchants.',
    details: [
      'Your brand',
      'Your domain',
      'Your dashboard',
      'Your merchants',
      'Our technology powering it all'
    ],
    color: 'blue'
  }
];

export function WhiteLabelDetailSection() {
  return (
    <div className="bg-white">
      {/* Video Showcase Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>
                  🎬 VIDEO SHOWCASE
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl text-[#0f172a]" style={{ fontWeight: 700, lineHeight: '1.2' }}>
                Seamless Checkout. Powerful Payments.
              </h2>

              <p className="text-lg text-[#475569] leading-relaxed">
                Watch how customers complete payments using QR code, UPI intent, and other smart payment 
                options through a fast, secure, and enterprise-grade checkout experience.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-[#1e40af]" size={20} />
                  </div>
                  <span className="text-[#334155]" style={{ fontWeight: 600 }}>Fast Checkout</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-[#10b981]" size={20} />
                  </div>
                  <span className="text-[#334155]" style={{ fontWeight: 600 }}>Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="text-[#14b8a6]" size={20} />
                  </div>
                  <span className="text-[#334155]" style={{ fontWeight: 600 }}>Mobile Friendly</span>
                </div>
              </div>
            </div>

            {/* Right Content - Video Player Mockup */}
            <div className="relative">
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                {/* Video placeholder with checkout flow */}
                {/* <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative"> */}
                  {/* Play button overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <Play className="text-white ml-1" size={32} fill="white" />
                    </div>
                  </div> */}

                  {/* Mock checkout screens */}
                  {/* <div className="absolute inset-0 p-8 flex items-center justify-center opacity-60">
                    <div className="bg-white rounded-xl p-6 w-64 shadow-xl">
                      <div className="text-center mb-4">
                        <div className="text-2xl text-[#0f172a]" style={{ fontWeight: 700 }}>₹1,299</div>
                        <div className="text-sm text-[#64748b]">Total Amount</div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 rounded-lg flex items-center gap-2">
                          <div className="w-8 h-8 bg-[#1e40af] rounded"></div>
                          <span className="text-sm text-[#0f172a]" style={{ fontWeight: 600 }}>UPI</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
                          <div className="w-8 h-8 bg-slate-300 rounded"></div>
                          <span className="text-sm text-[#64748b]">Card</span>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Floating badges */}
                  {/* <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500 text-white rounded-full text-xs flex items-center gap-1" style={{ fontWeight: 600 }}>
                    <Shield size={14} />
                    Secure
                  </div> */}
                  {/* <div className="absolute top-4 right-4 px-3 py-1.5 bg-blue-500 text-white rounded-full text-xs flex items-center gap-1" style={{ fontWeight: 600 }}>
                    <Zap size={14} />
                    Fast
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-teal-500 text-white rounded-full text-xs flex items-center gap-1" style={{ fontWeight: 600 }}>
                    <Smartphone size={14} />
                    Mobile
                  </div>
                </div> */}

                {/* Video progress bar */}
                {/* <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
                  <div className="flex-1 h-1 bg-slate-700 rounded-full">
                    <div className="w-1/3 h-full bg-[#1e40af] rounded-full"></div>
                  </div>
                  <span className="text-xs text-slate-400">2:15</span>
                </div>
              </div> */}

              {/* Floating tag */}
              {/* <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-lg shadow-xl border border-slate-200 flex items-center gap-2">
                <Tag className="text-[#1e40af]" size={18} />
                <span className="text-sm text-[#0f172a]" style={{ fontWeight: 600 }}>White-Label</span>
              </div> */}

            <VideoPlayer src="/Video/video1.mp4"/>
            </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
              <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>
                🏷️ WHITE-LABEL PAYMENT GATEWAY – HOW IT WORKS
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
              Launch Your Own Branded Payment Gateway in Simple Steps
            </h2>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              We provide a fully white-label, enterprise-ready payment gateway that runs under your brand, 
              your domain, and your infrastructure.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-teal-200 to-green-200 -translate-x-1/2"></div>

            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                const colorClasses = {
                  blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                  teal: { bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100' },
                  purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
                  orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
                  green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
                }[step.color];

                return (
                  <div key={index} className="relative">
                    <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Step Content */}
                      <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="text-white" size={28} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`inline-block px-2 py-1 ${colorClasses.light} ${colorClasses.text} rounded text-sm`} style={{ fontWeight: 700 }}>
                                  Step {step.number}
                                </span>
                              </div>
                              <h3 className="text-2xl text-[#0f172a]" style={{ fontWeight: 700 }}>
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          
                          <p className="text-[#64748b] mb-4 leading-relaxed">
                            {step.description}
                          </p>

                          <div className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}></div>
                                <span className="text-sm text-[#475569]">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Step Number Circle (center on desktop) */}
                      <div className={`hidden lg:flex ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} justify-center`}>
                        <div className={`relative w-24 h-24 ${colorClasses.bg} rounded-full flex items-center justify-center shadow-2xl`}>
                          <span className="text-4xl text-white" style={{ fontWeight: 700 }}>{step.number}</span>
                          {index < steps.length - 1 && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-current to-transparent opacity-30"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl shadow-2xl">
              <div className="text-3xl lg:text-4xl text-white mb-3" style={{ fontWeight: 700 }}>
                Your Brand. Your Gateway. Our Technology.
              </div>
              <p className="text-xl text-slate-300 mb-6">
                From Branding to Live Payments — We Handle Everything
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg" style={{ fontWeight: 600 }}>
                  Get Started Now
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all" style={{ fontWeight: 600 }}>
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}