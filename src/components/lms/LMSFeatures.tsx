import { Smartphone, Globe, Code, Zap, Users, BarChart3 } from "lucide-react";

export function LMSFeatures() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Advanced LMS Capabilities
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Powerful features for modern online learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Smartphone,
              title: "Mobile Learning",
              desc: "Native mobile apps for iOS and Android",
            },
            {
              icon: Globe,
              title: "Multi-Language",
              desc: "Support for multiple languages and localization",
            },
            {
              icon: Code,
              title: "API Integration",
              desc: "RESTful APIs for custom integrations",
            },
            {
              icon: Zap,
              title: "Live Classes",
              desc: "Virtual classrooms with video conferencing",
            },
            {
              icon: Users,
              title: "Social Learning",
              desc: "Discussion forums and peer collaboration",
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              desc: "Detailed learning analytics and insights",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3
                  className="text-xl text-[#0f172a] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
