import {
  Target,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Headphones,
} from "lucide-react";

export function WhyChooseCustomSoftware() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Custom Software
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Perfect Fit",
              desc: "Built exactly for your business needs",
            },
            {
              icon: Zap,
              title: "Competitive Edge",
              desc: "Unique features your competitors don't have",
            },
            {
              icon: Users,
              title: "User-Centric",
              desc: "Designed around your team's workflow",
            },
            {
              icon: TrendingUp,
              title: "Scalable Growth",
              desc: "Grows with your business",
            },
            {
              icon: Shield,
              title: "Full Ownership",
              desc: "Complete control of your software",
            },
            {
              icon: Headphones,
              title: "Dedicated Support",
              desc: "24/7 maintenance and updates",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3
                  className="text-xl text-[#0f172a] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p className="text-[#64748b]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
