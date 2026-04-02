import {
  Shield,
  Zap,
  Cloud,
  Headphones,
  TrendingUp,
  Award,
} from "lucide-react";

export function WhyChooseVisitorManagement() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Our System
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Easy to Use",
              desc: "Intuitive interface for visitors and staff",
            },
            {
              icon: Shield,
              title: "Secure",
              desc: "Enterprise-grade security and data protection",
            },
            {
              icon: Zap,
              title: "Quick Setup",
              desc: "Get started in minutes with minimal setup",
            },
            {
              icon: Cloud,
              title: "Cloud-Based",
              desc: "No hardware installation required",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "Dedicated support team always available",
            },
            {
              icon: TrendingUp,
              title: "Scalable",
              desc: "Grows with your organization",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-teal-200 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
