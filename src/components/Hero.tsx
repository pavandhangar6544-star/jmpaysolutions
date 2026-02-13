import { ArrowRight, Shield, Cloud, CheckCircle2, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <Award className="text-[#1e40af]" size={18} />
              <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>
                Enterprise-Grade FinTech Solutions
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl tracking-tight text-[#0f172a]" style={{ fontWeight: 700, lineHeight: '1.1' }}>
              Powering Digital Payments & Enterprise Solutions
            </h1>
            
            <p className="text-xl text-[#475569] leading-relaxed">
              Transform your business with our comprehensive suite of FinTech products, 
              SaaS solutions, and cloud services. Built for scale, security, and success.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-[#10b981]" size={16} />
                </div>
                <span className="text-[#334155]">White-Label Payment Gateway Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-[#10b981]" size={16} />
                </div>
                <span className="text-[#334155]">PCI-DSS Certified & Highly Secure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-[#10b981]" size={16} />
                </div>
                <span className="text-[#334155]">Cloud-Native & API-First Architecture</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-[#1e40af] border-2 border-[#1e40af] rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
                Request Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Shield className="text-[#10b981]" size={20} />
                <span className="text-sm text-[#64748b]">PCI-DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="text-[#14b8a6]" size={20} />
                <span className="text-sm text-[#64748b]">Cloud Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-[#1e40af]" size={20} />
                <span className="text-sm text-[#64748b]">White-Label Ready</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
              {/* Dashboard mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="text-sm text-[#64748b]">Total Transactions</div>
                    <div className="text-3xl text-[#0f172a]" style={{ fontWeight: 700 }}>₹24.8M</div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-[#10b981] rounded-full text-sm" style={{ fontWeight: 600 }}>
                    +12.5%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-sm text-[#64748b] mb-1">Success Rate</div>
                    <div className="text-2xl text-[#1e40af]" style={{ fontWeight: 700 }}>99.8%</div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-xl">
                    <div className="text-sm text-[#64748b] mb-1">Active Users</div>
                    <div className="text-2xl text-[#14b8a6]" style={{ fontWeight: 700 }}>15.2K</div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1e40af] rounded-lg flex items-center justify-center">
                        <Shield className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-[#0f172a]" style={{ fontWeight: 600 }}>Payment Gateway</div>
                        <div className="text-xs text-[#64748b]">Active</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#14b8a6] rounded-lg flex items-center justify-center">
                        <Cloud className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-[#0f172a]" style={{ fontWeight: 600 }}>Cloud Services</div>
                        <div className="text-xs text-[#64748b]">Running</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
              <div className="text-sm text-[#64748b]">Uptime</div>
              <div className="text-2xl text-[#10b981]" style={{ fontWeight: 700 }}>99.99%</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
              <div className="text-sm text-[#64748b]">API Calls/min</div>
              <div className="text-2xl text-[#1e40af]" style={{ fontWeight: 700 }}>50K+</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
