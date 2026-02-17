import { Award, Zap, Users, TrendingUp, Shield, Code } from "lucide-react";

export function WhyChooseWebDev() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Expert Team",
              desc: "Experienced developers and designers",
            },
            {
              icon: Zap,
              title: "Fast Delivery",
              desc: "Agile development with quick turnaround",
            },
            {
              icon: Users,
              title: "Client-Focused",
              desc: "Your satisfaction is our priority",
            },
            {
              icon: TrendingUp,
              title: "Scalable Solutions",
              desc: "Built to grow with your business",
            },
            {
              icon: Shield,
              title: "Quality Assured",
              desc: "Rigorous testing and QA processes",
            },
            {
              icon: Code,
              title: "Clean Code",
              desc: "Maintainable and well-documented code",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-violet-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
