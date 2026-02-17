import {
  Globe,
  ShoppingCart,
  Briefcase,
  Users,
  FileText,
  BarChart3,
} from "lucide-react";

export function WebDevServices() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Our Web Development Services
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Comprehensive web solutions for every business need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Corporate Websites",
              desc: "Professional business websites with modern design",
            },
            {
              icon: ShoppingCart,
              title: "E-Commerce Development",
              desc: "Full-featured online stores with payment integration",
            },
            {
              icon: Briefcase,
              title: "Web Applications",
              desc: "Custom web apps with complex functionality",
            },
            {
              icon: Users,
              title: "Portals & Dashboards",
              desc: "User portals and admin dashboards",
            },
            {
              icon: FileText,
              title: "Landing Pages",
              desc: "High-converting landing pages for campaigns",
            },
            {
              icon: BarChart3,
              title: "CMS Development",
              desc: "Custom content management systems",
            },
          ].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-violet-200 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-violet-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3
                  className="text-xl text-[#0f172a] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                <p className="text-[#64748b]">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
