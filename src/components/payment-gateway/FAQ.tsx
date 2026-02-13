import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is a white-label payment gateway?',
    answer: 'A white-label payment gateway is a fully customizable payment processing solution that operates under your brand name, logo, and domain. You get all the technology and infrastructure while maintaining your brand identity throughout the customer experience.',
  },
  {
    question: 'Can I use my own domain and branding?',
    answer: 'Yes, absolutely! Our white-label solution allows you to use your own domain name, company logo, brand colors, and custom UI. The entire payment gateway will look and feel like it\'s built in-house by your team.',
  },
  {
    question: 'How long does integration take?',
    answer: 'Integration typically takes 1-2 weeks depending on your requirements. The process includes data collection, branding configuration, deployment, bank API integration, and testing. We provide full technical support throughout the integration process.',
  },
  {
    question: 'Do you support custom bank APIs?',
    answer: 'Yes, we support integration with custom bank APIs and payment aggregators. Our team will work with you to integrate your preferred banking partners and ensure seamless transaction processing.',
  },
  {
    question: 'Is the system cloud deployable?',
    answer: 'Yes, our payment gateway can be deployed on your choice of cloud infrastructure including AWS, Azure, Google Cloud, or private cloud. We provide a production-ready, secure, and scalable deployment setup.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We support all major payment methods including UPI, QR Code payments, UPI Intent, Net Banking, Debit Cards, Credit Cards, and digital wallets. Additional payment methods can be enabled based on your requirements.',
  },
  {
    question: 'Is PCI-DSS compliance included?',
    answer: 'Yes, our payment gateway is built with PCI-DSS compliance in mind. We implement bank-grade security measures including end-to-end encryption, tokenization, and secure data handling practices.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide 24/7 technical support, dedicated account management, regular system updates, and comprehensive documentation. Our team is available via email, phone, and chat to assist with any technical or operational issues.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#475569]">
            Everything you need to know about our payment gateway
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
                <span className="text-lg text-[#0f172a] pr-8" style={{ fontWeight: 600 }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-[#1e40af] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
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
          <h3 className="text-xl text-[#0f172a] mb-2" style={{ fontWeight: 700 }}>
            Still have questions?
          </h3>
          <p className="text-[#64748b] mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button className="px-8 py-3 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-colors" style={{ fontWeight: 600 }}>
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
