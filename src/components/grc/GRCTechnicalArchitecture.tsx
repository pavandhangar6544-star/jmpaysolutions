import { ArrowRight, Database, Shield, Cloud, Lock } from "lucide-react";

export function GRCTechnicalArchitecture() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span
              className="text-sm text-emerald-600"
              style={{ fontWeight: 600 }}
            >
              ARCHITECTURE
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Secure GRC Architecture
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Enterprise-grade architecture with role-based access control
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-200 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Database size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  Users
                </div>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-emerald-600" size={40} />
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Shield size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  GRC Platform
                </div>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-emerald-600" size={40} />
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Cloud size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  Data Storage
                </div>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-emerald-600" size={40} />
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Lock size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  Reports
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Role-Based Access",
              desc: "Granular access control and permissions",
            },
            {
              title: "Cloud Deployment",
              desc: "Secure cloud hosting with high availability",
            },
            {
              title: "Data Encryption",
              desc: "End-to-end encryption for sensitive data",
            },
            {
              title: "Audit Logs",
              desc: "Complete activity logging and tracking",
            },
            {
              title: "API Integration",
              desc: "Connect with existing enterprise systems",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-[#0f172a] mb-2" style={{ fontWeight: 700 }}>
                {feature.title}
              </h4>
              <p className="text-sm text-[#64748b]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
