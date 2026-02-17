import { Tablet, Cloud, Wifi, Zap, Users, BarChart3 } from "lucide-react";

export function VisitorManagementFeatures() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Advanced Features
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Powerful capabilities for modern reception areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Tablet,
              title: "iPad Check-in Kiosk",
              desc: "Self-service check-in kiosks for visitors",
            },
            {
              icon: Cloud,
              title: "Cloud-Based",
              desc: "Access from anywhere with cloud platform",
            },
            {
              icon: Wifi,
              title: "WiFi Access",
              desc: "Generate temporary WiFi credentials for guests",
            },
            {
              icon: Zap,
              title: "Integrations",
              desc: "Connect with Slack, Google Workspace, and more",
            },
            {
              icon: Users,
              title: "Multi-Location",
              desc: "Manage multiple offices from one dashboard",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              desc: "Visitor insights and detailed reports",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-teal-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
