import { Upload, Server, Shield, Cog, BarChart, Container } from "lucide-react";

export function CloudServicesOfferings() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Cloud & AWS Services
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Comprehensive cloud solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Upload,
              title: "Cloud Migration",
              desc: "Seamless migration from on-premise to cloud",
            },
            {
              icon: Server,
              title: "Infrastructure as Code",
              desc: "Terraform and CloudFormation automation",
            },
            {
              icon: Container,
              title: "Container Services",
              desc: "Docker, ECS, EKS, and Kubernetes",
            },
            {
              icon: Cog,
              title: "DevOps & CI/CD",
              desc: "Automated pipelines and deployment",
            },
            {
              icon: Shield,
              title: "Security & Compliance",
              desc: "AWS security best practices and auditing",
            },
            {
              icon: BarChart,
              title: "Cost Optimization",
              desc: "Reduce cloud spending and maximize ROI",
            },
          ].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-sky-200 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
