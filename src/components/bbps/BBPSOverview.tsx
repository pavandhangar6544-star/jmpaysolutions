import {
  Zap,
  Receipt,
  CreditCard,
  Smartphone,
  FileText,
  Eye,
  Webhook,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Electricity Bills",
    description:
      "Pay electricity bills from state electricity boards across India",
  },
  {
    icon: Receipt,
    title: "Water & Gas Bills",
    description: "Municipal water bills and piped gas connection payments",
  },
  {
    icon: Smartphone,
    title: "Telecom & DTH",
    description: "Mobile, landline, broadband, and DTH recharge services",
  },
  {
    icon: CreditCard,
    title: "Loan & Credit Card",
    description: "EMI payments, credit card bills, and loan repayments",
  },
  {
    icon: FileText,
    title: "Fetch Bill Details",
    description: "Automatically fetch bill amount and due date from billers",
  },
  {
    icon: Eye,
    title: "Bill Presentment",
    description: "View complete bill details before payment processing",
  },
  {
    icon: Webhook,
    title: "Real-Time Status",
    description: "Instant payment confirmation with transaction receipts",
  },
  {
    icon: Shield,
    title: "RBI Compliant",
    description: "Fully compliant with NPCI BBPS regulations and standards",
  },
];

export function BBPSOverview() {
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
              FEATURES
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Complete Bill Payment Infrastructure
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Connect with 1000+ billers across India through a single API
            integration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
