import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is BBPS?",
    answer:
      "Bharat Bill Payment System (BBPS) is an RBI conceptualized and NPCI operated platform that offers interoperable and accessible bill payment services to customers across India through a network of agents.",
  },
  {
    question: "Which billers are supported?",
    answer:
      "We support 1000+ billers across categories including electricity, water, gas, DTH, telephone, broadband, insurance, loan repayments, credit card bills, municipal taxes, and more.",
  },
  {
    question: "How long does integration take?",
    answer:
      "Integration typically takes 2-3 weeks including BBPS agent registration, API integration, testing, and go-live. We provide full technical support throughout the process.",
  },
  {
    question: "Is BBPS integration secure?",
    answer:
      "Yes, BBPS is RBI approved and NPCI operated with bank-grade security. All transactions are encrypted and compliant with regulatory requirements.",
  },
  {
    question: "Can customers fetch their bill automatically?",
    answer:
      "Yes, with bill fetch API, customers can automatically retrieve their bill amount, due date, and biller details by simply entering their customer ID.",
  },
  {
    question: "What payment modes are supported?",
    answer:
      "BBPS supports multiple payment modes including UPI, Net Banking, Debit Card, Credit Card, and wallet payments through the integrated payment gateway.",
  },
  {
    question: "How do settlements work?",
    answer:
      "Settlements are processed through NPCI with automated reconciliation. Funds are settled to your nodal account as per the settlement cycle defined by your banking partner.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 technical support, dedicated account management, API documentation, sandbox environment for testing, and regular system updates.",
  },
];

export function BBPSFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <span
              className="text-sm text-purple-600"
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
            Everything you need to know about BBPS integration
          </p>
        </div>

        {/* FAQ Accordion */}
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
                  className={`flex-shrink-0 text-purple-600 transition-transform duration-300 ${
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

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-white border border-slate-200 rounded-2xl">
          <h3
            className="text-xl text-[#0f172a] mb-2"
            style={{ fontWeight: 700 }}
          >
            Still have questions?
          </h3>
          <p className="text-[#64748b] mb-6">
            Our team is here to help with your BBPS integration
          </p>
          <button
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
            style={{ fontWeight: 600 }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
