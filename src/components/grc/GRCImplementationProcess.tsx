import {
  FileText,
  Building2,
  Server,
  Code2,
  Zap,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Requirements Gathering",
    description: "Understand your GRC needs",
    items: [
      "Risk assessment scope",
      "Compliance frameworks",
      "Policy requirements",
      "Stakeholder identification",
    ],
    color: "emerald",
  },
  {
    number: 2,
    icon: Building2,
    title: "Platform Configuration",
    description: "Configure GRC modules",
    items: [
      "Risk framework setup",
      "Compliance templates",
      "Audit workflows",
      "User roles & permissions",
    ],
    color: "blue",
  },
  {
    number: 3,
    icon: Server,
    title: "Data Migration",
    description: "Import existing data",
    items: [
      "Historical risks",
      "Policy documents",
      "Audit records",
      "Control mappings",
    ],
    color: "teal",
  },
  {
    number: 4,
    icon: Code2,
    title: "Integration",
    description: "Connect with systems",
    items: [
      "SIEM integration",
      "Ticketing systems",
      "Document management",
      "Third-party tools",
    ],
    color: "orange",
  },
  {
    number: 5,
    icon: Zap,
    title: "Go Live",
    description: "Launch GRC platform",
    items: ["User training", "Process documentation", "Support setup"],
    color: "green",
  },
  {
    number: 6,
    icon: CheckCircle,
    title: "Done 🚀",
    description: "GRC system operational",
    items: ["Active monitoring", "Compliance tracking", "Risk management"],
    color: "emerald",
  },
];

export function GRCImplementationProcess() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span
              className="text-sm text-emerald-600"
              style={{ fontWeight: 600 }}
            >
              IMPLEMENTATION
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            GRC Implementation Process
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Structured approach to deploy enterprise GRC platform
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-blue-200 to-green-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              const colorClasses = {
                emerald: { bg: "bg-emerald-600", border: "border-emerald-200" },
                blue: { bg: "bg-blue-500", border: "border-blue-200" },
                teal: { bg: "bg-teal-500", border: "border-teal-200" },
                orange: { bg: "bg-orange-500", border: "border-orange-200" },
                green: { bg: "bg-green-500", border: "border-green-200" },
              }[
                step.color as "emerald" | "blue" | "teal" | "orange" | "green"
              ] || {
                bg: "bg-emerald-600",
                border: "border-emerald-200",
              };

              return (
                <div key={index} className="relative">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                  >
                    <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                      <div
                        className={`bg-white border-2 ${colorClasses.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="text-white" size={32} />
                          </div>
                          <div className="flex-1">
                            <div
                              className="text-sm text-[#64748b] mb-1"
                              style={{ fontWeight: 600 }}
                            >
                              STEP {step.number}
                            </div>
                            <h3
                              className="text-2xl text-[#0f172a] mb-2"
                              style={{ fontWeight: 700 }}
                            >
                              {step.title}
                            </h3>
                            <p className="text-[#64748b]">{step.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 ml-20">
                          {step.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-[#475569]"
                            >
                              <div
                                className={`w-1.5 h-1.5 ${colorClasses.bg} rounded-full`}
                              ></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`hidden lg:flex ${isEven ? "lg:col-start-2" : "lg:col-start-1"} justify-center`}
                    >
                      <div
                        className={`w-24 h-24 ${colorClasses.bg} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                      >
                        <span
                          className="text-4xl text-white"
                          style={{ fontWeight: 700 }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
