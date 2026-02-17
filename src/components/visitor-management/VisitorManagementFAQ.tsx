import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does visitor check-in work?",
    answer:
      "Visitors can check-in using an iPad kiosk at reception, through a QR code sent via email, or through pre-registration by the host.",
  },
  {
    question: "Can we customize visitor badges?",
    answer:
      "Yes, you can fully customize badge templates with your logo, visitor information, QR codes, and any required security information.",
  },
  {
    question: "Does it work offline?",
    answer:
      "The system requires internet connection for cloud sync, but basic check-in functionality works offline and syncs when reconnected.",
  },
  {
    question: "Can we integrate with access control?",
    answer:
      "Yes, we provide APIs to integrate with most access control systems for automatic door access provisioning.",
  },
  {
    question: "Is visitor data secure?",
    answer:
      "Yes, all data is encrypted in transit and at rest. We comply with GDPR and other data protection regulations.",
  },
  {
    question: "Can we track evacuation?",
    answer:
      "Yes, the system provides real-time visibility of who is in the building for emergency evacuation purposes.",
  },
];

export function VisitorManagementFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span
                  className="text-lg text-[#0f172a] pr-8"
                  style={{ fontWeight: 600 }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-teal-600 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${openIndex === i ? "max-h-96" : "max-h-0"}`}
              >
                <div className="px-6 pb-5 text-[#64748b]">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
