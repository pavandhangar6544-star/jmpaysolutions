import { Award, Zap, Users, TrendingUp, Shield, Code } from "lucide-react";

export function WhyChooseMobileApp() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Us for Mobile Apps
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "App Store Success",
              desc: "Apps approved and featured on App Store & Play Store",
            },
            {
              icon: Zap,
              title: "Performance Optimized",
              desc: "Fast and smooth user experience",
            },
            {
              icon: Users,
              title: "User-Centric Design",
              desc: "Intuitive UI/UX that users love",
            },
            {
              icon: TrendingUp,
              title: "Scalable Architecture",
              desc: "Built to handle millions of users",
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              desc: "Industry-standard security practices",
            },
            {
              icon: Code,
              title: "Maintenance & Support",
              desc: "Ongoing updates and technical support",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
