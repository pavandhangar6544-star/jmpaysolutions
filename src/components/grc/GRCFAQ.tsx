import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is a GRC platform?",
    answer:
      "A GRC (Governance, Risk, and Compliance) platform is software that helps organizations manage corporate governance, enterprise risk management, and regulatory compliance in an integrated manner.",
  },
  {
    question: "Which compliance frameworks are supported?",
    answer:
      "We support ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS, NIST, and custom frameworks. The platform is flexible enough to accommodate any regulatory requirement.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes 4-8 weeks depending on organization size and complexity, including data migration, configuration, training, and go-live.",
  },
  {
    question: "Can we customize risk assessment frameworks?",
    answer:
      "Yes, the platform is fully customizable. You can define custom risk scoring methodologies, assessment templates, and compliance frameworks specific to your needs.",
  },
  {
    question: "Is data secure in the GRC platform?",
    answer:
      "Yes, we implement enterprise-grade security including end-to-end encryption, role-based access control, audit logging, and compliance with data protection regulations.",
  },
  {
    question: "Can we generate custom reports?",
    answer:
      "Yes, the platform includes a report builder that allows you to create custom reports, dashboards, and visualizations based on your specific requirements.",
  },
  {
    question: "Does it integrate with other systems?",
    answer:
      "Yes, we provide APIs and pre-built integrations with SIEM tools, ticketing systems, document management platforms, and other enterprise applications.",
  },
  {
    question: "What kind of support is provided?",
    answer:
      "We provide 24/7 technical support, dedicated account management, implementation assistance, user training, and ongoing consultation services.",
  },
];

export function GRCFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
            <span
              className="text-sm text-emerald-600"
              style={{ fontWeight: 600 }}
            >
              FAQ
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#475569]">
            Everything you need to know about our GRC platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span
                  className="text-lg text-[#0f172a] pr-8"
                  style={{ fontWeight: 600 }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-[#64748b] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-white border border-slate-200 rounded-2xl">
          <h3
            className="text-xl text-[#0f172a] mb-2"
            style={{ fontWeight: 700 }}
          >
            Still have questions?
          </h3>
          <p className="text-[#64748b] mb-6">
            Our GRC experts are here to help with your implementation
          </p>
          <button
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
            style={{ fontWeight: 600 }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
