import {
  BarChart3,
  FileText,
  PieChart,
  TrendingUp,
  Download,
  Calendar,
} from "lucide-react";

export function GRCReportingFeatures() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-white">
            <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
              <span
                className="text-sm text-emerald-200"
                style={{ fontWeight: 600 }}
              >
                REPORTING & ANALYTICS
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl"
              style={{ fontWeight: 700, lineHeight: "1.2" }}
            >
              Comprehensive GRC Reporting
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Generate detailed compliance reports, risk assessments, and audit
              trails with customizable dashboards and automated reporting.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: "Risk Dashboards",
                  desc: "Visual risk heat maps and trend analysis",
                },
                {
                  icon: FileText,
                  title: "Compliance Reports",
                  desc: "Automated regulatory compliance reporting",
                },
                {
                  icon: PieChart,
                  title: "Audit Reports",
                  desc: "Comprehensive audit findings and recommendations",
                },
                {
                  icon: TrendingUp,
                  title: "Trend Analysis",
                  desc: "Historical data analysis and forecasting",
                },
                {
                  icon: Download,
                  title: "Export Options",
                  desc: "Export reports in PDF, Excel, and CSV formats",
                },
                {
                  icon: Calendar,
                  title: "Scheduled Reports",
                  desc: "Automated report generation and distribution",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                      <Icon className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <h4
                        className="text-white mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 p-6">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl border border-white/20 flex items-center justify-center">
                  <BarChart3 className="text-emerald-400" size={64} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-white/10 rounded-lg border border-white/20 p-3">
                    <div className="text-slate-400 text-xs mb-2">
                      Compliance Rate
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      94%
                    </div>
                  </div>
                  <div className="h-24 bg-white/10 rounded-lg border border-white/20 p-3">
                    <div className="text-slate-400 text-xs mb-2">
                      Open Risks
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      24
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
