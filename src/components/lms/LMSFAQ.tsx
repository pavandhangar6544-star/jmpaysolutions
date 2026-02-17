import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is an LMS?",
    answer:
      "A Learning Management System (LMS) is software that enables the creation, delivery, and tracking of online courses and training programs.",
  },
  {
    question: "Can I customize the platform?",
    answer:
      "Yes, we offer white-label options with custom branding, domain, and UI customization to match your brand identity.",
  },
  {
    question: "Is it SCORM compliant?",
    answer:
      "Yes, our LMS supports SCORM 1.2, SCORM 2004, xAPI (Tin Can), and LTI standards for seamless content integration.",
  },
  {
    question: "Can I integrate with other tools?",
    answer:
      "Yes, we provide RESTful APIs and pre-built integrations with popular tools like Zoom, Google Workspace, Salesforce, and more.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes, we offer native mobile apps for both iOS and Android, allowing learners to access courses on any device.",
  },
  {
    question: "What kind of support is provided?",
    answer:
      "We provide 24/7 email and chat support, comprehensive documentation, video tutorials, and dedicated account management for enterprise clients.",
  },
];

export function LMSFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#475569]">
            Common questions about our LMS platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
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
                  className={`text-blue-600 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
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
