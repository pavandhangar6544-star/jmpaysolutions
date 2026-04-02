import {
  Award,
  Zap,
  DollarSign,
  Shield,
  TrendingUp,
  Headphones,
} from "lucide-react";

export function WhyChooseCloud() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Our Cloud Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "AWS Certified Team",
              desc: "Certified AWS Solutions Architects and DevOps Engineers",
            },
            {
              icon: Zap,
              title: "Rapid Deployment",
              desc: "Quick setup and migration with minimal downtime",
            },
            {
              icon: DollarSign,
              title: "Cost Efficient",
              desc: "Optimize cloud spending and reduce infrastructure costs",
            },
            {
              icon: TrendingUp,
              title: "Auto-Scaling",
              desc: "Scale automatically based on demand",
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "Bank-level security and compliance",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "Round-the-clock monitoring and support",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
