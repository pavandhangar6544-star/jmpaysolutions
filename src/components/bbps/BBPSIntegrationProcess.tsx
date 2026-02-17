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
    title: "Get BBPS Agent ID",
    description: "Register as BBPS agent and obtain credentials",
    items: [
      "BBPS registration",
      "Agent ID & credentials",
      "Biller list access",
      "API documentation",
    ],
    color: "purple",
  },
  {
    number: 2,
    icon: Building2,
    title: "Choose Billers",
    description: "Select billers and categories",
    items: [
      "Select biller categories",
      "Configure active billers",
      "Set payment limits",
      "Enable bill fetch",
    ],
    color: "blue",
  },
  {
    number: 3,
    icon: Server,
    title: "API Integration",
    description: " Integrate BBPS APIs",
    items: [
      "Authentication setup",
      "Bill fetch API",
      "Payment initiation",
      "Status check API",
    ],
    color: "teal",
  },
  {
    number: 4,
    icon: Code2,
    title: "Test Payments",
    description: "Test with sandbox environment",
    items: [
      "Sandbox testing",
      "Bill fetch test",
      "Payment simulation",
      "Webhook testing",
    ],
    color: "orange",
  },
  {
    number: 5,
    icon: Zap,
    title: "Go Live",
    description: "Launch production BBPS service",
    items: [
      "Production credentials",
      "Real biller integration",
      "Customer onboarding",
    ],
    color: "green",
  },
  {
    number: 6,
    icon: CheckCircle,
    title: "Done 🚀",
    description: "BBPS platform ready",
    items: ["All billers active", "Real-time payments", "Support enabled"],
    color: "purple",
  },
];

export function BBPSIntegrationProcess() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <span
              className="text-sm text-purple-600"
              style={{ fontWeight: 600 }}
            >
              INTEGRATION PROCESS
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Launch BBPS in 6 Simple Steps
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            From registration to go-live, we guide you through the entire
            process
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 via-teal-200 via-orange-200 to-green-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              const colorClasses = {
                purple: {
                  bg: "bg-purple-600",
                  light: "bg-purple-50",
                  border: "border-purple-200",
                },
                blue: {
                  bg: "bg-blue-500",
                  light: "bg-blue-50",
                  border: "border-blue-200",
                },
                teal: {
                  bg: "bg-teal-500",
                  light: "bg-teal-50",
                  border: "border-teal-200",
                },
                orange: {
                  bg: "bg-orange-500",
                  light: "bg-orange-50",
                  border: "border-orange-200",
                },
                green: {
                  bg: "bg-green-500",
                  light: "bg-green-50",
                  border: "border-green-200",
                },
              }[step.color];

              return (
                <div key={index} className="relative">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                  >
                    {/* Content Card */}
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

                    {/* Step Number Badge (hidden on mobile) */}
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
