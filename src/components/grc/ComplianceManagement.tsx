import {
  Play,
  Shield,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export function ComplianceManagement() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Visual placeholder */}
              <div className="aspect-video bg-gradient-to-br from-emerald-900 to-slate-900 relative">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>

                {/* Mock compliance flow */}
                <div className="absolute inset-0 p-6 flex items-center justify-center opacity-50">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Risk Assessment */}
                    <div className="bg-white rounded-lg p-3 w-28 shadow-xl">
                      <div className="w-16 h-16 bg-orange-200 rounded mx-auto mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                    {/* Compliance Check */}
                    <div className="bg-white rounded-lg p-3 w-28 shadow-xl">
                      <div className="h-2 bg-slate-200 rounded mb-2"></div>
                      <div className="h-6 bg-emerald-500 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                    {/* Report */}
                    <div className="bg-white rounded-lg p-3 w-28 shadow-xl">
                      <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Feature badges */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-600 text-white rounded-full text-xs flex items-center gap-1"
                  style={{ fontWeight: 600 }}
                >
                  <Shield size={14} />
                  Secure
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs flex items-center gap-1"
                  style={{ fontWeight: 600 }}
                >
                  <AlertTriangle size={14} />
                  Risk Tracking
                </div>
              </div>

              {/* Progress bar */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
                <div className="flex-1 h-1 bg-slate-700 rounded-full">
                  <div className="w-2/3 h-full bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-xs text-slate-400">2:15</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <span
                className="text-sm text-emerald-600"
                style={{ fontWeight: 600 }}
              >
                COMPLIANCE MANAGEMENT
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl text-[#0f172a]"
              style={{ fontWeight: 700, lineHeight: "1.2" }}
            >
              Automated Compliance & Risk Tracking
            </h2>

            <p className="text-lg text-[#475569] leading-relaxed">
              Streamline compliance management with automated risk assessments,
              policy tracking, and real-time compliance monitoring.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#0f172a] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Risk Identification
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    Automatically identify and assess risks across your
                    organization
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                  <FileCheck className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#0f172a] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Compliance Monitoring
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    Track compliance status against multiple regulatory
                    frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#0f172a] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Automated Reporting
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    Generate compliance reports and audit trails automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
