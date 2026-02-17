import { Shield, Zap, Code, Headphones, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Enterprise-Grade",
    description:
      "Comprehensive GRC platform trusted by enterprise organizations",
  },
  {
    icon: Shield,
    title: "Multi-Framework Support",
    description: "Support for ISO, SOC2, GDPR, HIPAA, and custom frameworks",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline compliance and risk management processes",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 technical support with GRC consultation services",
  },
  {
    icon: Code,
    title: "Customizable",
    description: "Flexible platform that adapts to your organization needs",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution",
    description: "Grow from startup to enterprise with seamless scaling",
  },
];

export function WhyChooseGRC() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-100 rounded-full mb-4">
            <span
              className="text-sm text-[#10b981]"
              style={{ fontWeight: 600 }}
            >
              WHY CHOOSE US
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Our GRC Platform
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Comprehensive governance, risk, and compliance management solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3
                  className="text-xl text-[#0f172a] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-900 to-blue-900 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                500+
              </div>
              <div className="text-slate-300">Organizations</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                98%
              </div>
              <div className="text-slate-300">Compliance Rate</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                10K+
              </div>
              <div className="text-slate-300">Risks Managed</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                24/7
              </div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
