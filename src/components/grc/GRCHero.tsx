import {
  ArrowRight,
  Shield,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export function GRCHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
              <Shield className="text-emerald-300" size={18} />
              <span
                className="text-sm text-emerald-200"
                style={{ fontWeight: 600 }}
              >
                GOVERNANCE, RISK & COMPLIANCE
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              Enterprise GRC Platform for Risk & Compliance Management
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive eGRC solution to manage governance, mitigate risks,
              ensure compliance, and streamline audit processes across your
              organization.
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
                Contact Sales
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
                <FileCheck className="text-blue-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Compliant
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle2
                  className="text-emerald-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Automated
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <AlertTriangle
                  className="text-orange-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Risk Alerts
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Mock GRC dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div
                      className="text-white text-lg mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      GRC Dashboard
                    </div>
                    <div className="text-slate-400 text-sm">
                      Risk & Compliance Overview
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
                      Active Risks
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      24
                    </div>
                    <div className="text-orange-400 text-xs mt-1">
                      3 High Priority
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Compliance Rate
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      94%
                    </div>
                    <div className="text-green-400 text-xs mt-1">
                      +5% this month
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          🔴
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          Data Privacy Risk
                        </div>
                        <div className="text-slate-400 text-xs">
                          High Priority
                        </div>
                      </div>
                    </div>
                    <span className="text-red-400 text-xs">Action Needed</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          🟡
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          ISO Compliance
                        </div>
                        <div className="text-slate-400 text-xs">
                          Medium Priority
                        </div>
                      </div>
                    </div>
                    <span className="text-yellow-400 text-xs">In Progress</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span
                          className="text-white text-xs"
                          style={{ fontWeight: 600 }}
                        >
                          🟢
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white text-sm"
                          style={{ fontWeight: 600 }}
                        >
                          Security Audit
                        </div>
                        <div className="text-slate-400 text-xs">
                          Low Priority
                        </div>
                      </div>
                    </div>
                    <span className="text-green-400 text-xs">Resolved</span>
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
