import {
  ArrowRight,
  UserCheck,
  QrCode,
  CheckCircle2,
  Shield,
} from "lucide-react";

export function VisitorManagementHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900">
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
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full">
              <UserCheck className="text-teal-300" size={18} />
              <span
                className="text-sm text-teal-200"
                style={{ fontWeight: 600 }}
              >
                VISITOR MANAGEMENT SYSTEM
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              Smart Visitor Management System for Modern Workplaces
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Streamline visitor check-ins, enhance security, and create
              professional first impressions with our cloud-based visitor
              management platform.
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
                Get Started
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <QrCode className="text-teal-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  QR Check-in
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <UserCheck className="text-blue-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Pre-Registration
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle2
                  className="text-green-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Badge Printing
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Shield className="text-purple-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Secure
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div
                      className="text-white text-lg mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      Visitor Dashboard
                    </div>
                    <div className="text-slate-400 text-sm">
                      Today's Check-ins
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
                      Today's Visitors
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      24
                    </div>
                    <div className="text-green-400 text-xs mt-1">
                      +8 since morning
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Active Now
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      12
                    </div>
                    <div className="text-blue-400 text-xs mt-1">
                      In premises
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      name: "John Smith",
                      company: "Tech Corp",
                      time: "10:30 AM",
                      status: "checked-in",
                    },
                    {
                      name: "Sarah Johnson",
                      company: "Design Studio",
                      time: "11:15 AM",
                      status: "waiting",
                    },
                    {
                      name: "Mike Wilson",
                      company: "Consulting LLC",
                      time: "11:45 AM",
                      status: "checked-in",
                    },
                  ].map((visitor, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                          <span
                            className="text-white text-xs"
                            style={{ fontWeight: 600 }}
                          >
                            {visitor.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div
                            className="text-white text-sm"
                            style={{ fontWeight: 600 }}
                          >
                            {visitor.name}
                          </div>
                          <div className="text-slate-400 text-xs">
                            {visitor.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-300 text-xs">
                          {visitor.time}
                        </div>
                        <div
                          className={`text-xs ${visitor.status === "checked-in" ? "text-green-400" : "text-yellow-400"}`}
                        >
                          {visitor.status === "checked-in"
                            ? "Checked In"
                            : "Waiting"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
