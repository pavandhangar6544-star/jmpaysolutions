import {
  Shield,
  FileCheck,
  AlertTriangle,
  BarChart3,
  FileText,
  Eye,
  Users,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate organizational risks with automated workflows",
  },
  {
    icon: FileCheck,
    title: "Compliance Tracking",
    description:
      "Monitor regulatory compliance across ISO, SOC2, GDPR, and industry standards",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive risk scoring and prioritization framework",
  },
  {
    icon: BarChart3,
    title: "Audit Management",
    description: "Plan, execute, and track internal and external audits",
  },
  {
    icon: FileText,
    title: "Policy Management",
    description:
      "Centralized repository for policies, procedures, and controls",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Live dashboards for risk exposure and compliance status",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Collaborate with teams and third-party auditors",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Enterprise-grade security with role-based access control",
  },
];

export function GRCOverview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span
              className="text-sm text-emerald-600"
              style={{ fontWeight: 600 }}
            >
              FEATURES
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Complete GRC Platform Features
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Integrated governance, risk, and compliance management in one
            unified platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3
                  className="text-lg text-[#0f172a] mb-2"
                  style={{ fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
