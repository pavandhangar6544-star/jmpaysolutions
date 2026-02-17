import { Shield, Zap, Code, Headphones, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "RBI Approved",
    description:
      "Fully compliant with NPCI BBPS regulations and RBI guidelines",
  },
  {
    icon: Shield,
    title: "1000+ Billers",
    description:
      "Access to all major billers across electricity, water, gas, telecom, and more",
  },
  {
    icon: Zap,
    title: "Instant Bill Fetch",
    description: "Real-time bill amount and due date retrieval from billers",
  },
  {
    icon: Headphones,
    title: "Full Support",
    description: "24/7 technical support with dedicated account management",
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Simple REST APIs with comprehensive documentation and SDKs",
  },
  {
    icon: TrendingUp,
    title: "Scalable Platform",
    description:
      "Handle millions of bill payments with auto-scaling infrastructure",
  },
];

export function WhyChooseBBPS() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Why Choose Our BBPS Platform
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Complete bill payment infrastructure with enterprise-grade
            reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                1000+
              </div>
              <div className="text-slate-300">Active Billers</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                98.9%
              </div>
              <div className="text-slate-300">Success Rate</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                1M+
              </div>
              <div className="text-slate-300">Daily Transactions</div>
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
