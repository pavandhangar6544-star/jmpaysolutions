import { ArrowRight, Database, Shield, Cloud, Lock } from "lucide-react";

export function BBPSTechnicalArchitecture() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <span
              className="text-sm text-purple-600"
              style={{ fontWeight: 600 }}
            >
              TECHNICAL ARCHITECTURE
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            BBPS Integration Architecture
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Secure connection between your platform and NPCI BBPS network
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-200 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            {/* Customer App */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Database size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  Your App
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">
                Customer Interface
              </div>
            </div>

            {/* Arrow */}
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-purple-600" size={40} />
            </div>

            {/* BBPS Agent */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Shield size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  BBPS Agent
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">
                Your BBPS System
              </div>
            </div>

            {/* Arrow */}
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-purple-600" size={40} />
            </div>

            {/* NPCI BBPS */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Cloud size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  NPCI BBPS
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">
                BBPS Network
              </div>
            </div>

            {/* Arrow */}
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-purple-600" size={40} />
            </div>

            {/* Billers */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Lock size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>
                  Billers
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">
                1000+ Providers
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Secure APIs", desc: "Encrypted communication with NPCI" },
            {
              title: "Real-Time Sync",
              desc: "Instant bill fetch and payment status",
            },
            {
              title: "Auto Reconciliation",
              desc: "Automated settlement matching",
            },
            {
              title: "Webhook Support",
              desc: "Real-time payment notifications",
            },
            { title: "Compliance Ready", desc: "RBI and NPCI compliant" },
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
