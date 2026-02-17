import { ArrowRight, Receipt, Zap, CheckCircle2, Building } from "lucide-react";

export function BBPSHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full">
              <Receipt className="text-purple-300" size={18} />
              <span
                className="text-sm text-purple-200"
                style={{ fontWeight: 600 }}
              >
                BHARAT BILL PAYMENT SYSTEM
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              BBPS Platform for Seamless Bill Payments
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Integrate India's official Bharat Bill Payment System for
              electricity, water, gas, telecom, and more. Enable your customers
              to pay all their bills in one place.
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
                <Receipt className="text-green-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Multi-Biller
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle2
                  className="text-blue-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  RBI Approved
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Zap className="text-teal-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Instant
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Building className="text-purple-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  1000+ Billers
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Mock BBPS dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div
                      className="text-white text-lg mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      Bill Payment Dashboard
                    </div>
                    <div className="text-slate-400 text-sm">
                      Track all bill payments
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                    style={{ fontWeight: 600 }}
                  >
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Today's Bills
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      ₹2.3L
                    </div>
                    <div className="text-green-400 text-xs mt-1">+12.5%</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Success Rate
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      98.9%
                    </div>
                    <div className="text-green-400 text-xs mt-1">+1.8%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          ⚡
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          ₹1,250
                        </div>
                        <div className="text-slate-400 text-xs">
                          Electricity Bill
                        </div>
                      </div>
                    </div>
                    <span className="text-green-400 text-xs">Success</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          💧
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          ₹680
                        </div>
                        <div className="text-slate-400 text-xs">Water Bill</div>
                      </div>
                    </div>
                    <span className="text-green-400 text-xs">Success</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          🔥
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          ₹850
                        </div>
                        <div className="text-slate-400 text-xs">Gas Bill</div>
                      </div>
                    </div>
                    <span className="text-green-400 text-xs">Success</span>
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
