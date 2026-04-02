import {
  Building2,
  RefreshCw,
  Link,
  Database,
  Cog,
  FileCode,
} from "lucide-react";

export function CustomSoftwareServices() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Custom Software Development Services
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Tailored solutions for your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Enterprise Software",
              desc: "Large-scale business applications and platforms",
            },
            {
              icon: RefreshCw,
              title: "Legacy Modernization",
              desc: "Upgrade and transform outdated systems",
            },
            {
              icon: Link,
              title: "System Integration",
              desc: "Connect disparate systems seamlessly",
            },
            {
              icon: Database,
              title: "Database Solutions",
              desc: "Custom database design and optimization",
            },
            {
              icon: Cog,
              title: "Workflow Automation",
              desc: "Automate business processes and workflows",
            },
            {
              icon: FileCode,
              title: "API Development",
              desc: "RESTful and GraphQL API services",
            },
          ].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-indigo-200 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
