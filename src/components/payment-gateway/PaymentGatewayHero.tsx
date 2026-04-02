import { ArrowRight, Shield, Cloud, CheckCircle2, Server } from "lucide-react";

export function PaymentGatewayHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <Shield className="text-blue-300" size={18} />
              <span
                className="text-sm text-blue-200"
                style={{ fontWeight: 600 }}
              >
                PAYMENT GATEWAY
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              Enterprise-Grade Payment Gateway Infrastructure
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              A fully secure, API-first, white-label payment gateway designed
              for enterprises, fintech startups, and growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Request Demo
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}
              >
                Get API Access
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Shield className="text-green-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Secure
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle2
                  className="text-blue-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  White-Label
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Cloud className="text-teal-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Cloud Ready
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Server className="text-purple-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Bank Integrated
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Mock payment dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div
                      className="text-white text-lg mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      Payment Dashboard
                    </div>
                    <div className="text-slate-400 text-sm">
                      Real-time monitoring
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                    style={{ fontWeight: 600 }}
                  >
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Today's Revenue
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      ₹5.2L
                    </div>
                    <div className="text-green-400 text-xs mt-1">+15.3%</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Success Rate
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      99.2%
                    </div>
                    <div className="text-green-400 text-xs mt-1">+2.1%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          UPI
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          ₹2,499
                        </div>
                        <div className="text-slate-400 text-xs">
                          Order #12345
                        </div>
                      </div>
                    </div>
                    <div
                      className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs"
                      style={{ fontWeight: 600 }}
                    >
                      Success
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          QR
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          ₹1,299
                        </div>
                        <div className="text-slate-400 text-xs">
                          Order #12344
                        </div>
                      </div>
                    </div>
                    <div
                      className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs"
                      style={{ fontWeight: 600 }}
                    >
                      Success
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
