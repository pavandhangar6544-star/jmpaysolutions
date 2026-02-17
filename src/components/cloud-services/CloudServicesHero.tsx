import { ArrowRight, Cloud, Server, Lock, Gauge } from "lucide-react";

export function CloudServicesHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 border border-sky-400/30 rounded-full">
              <Cloud className="text-sky-300" size={18} />
              <span
                className="text-sm text-sky-200"
                style={{ fontWeight: 600 }}
              >
                CLOUD & AWS SERVICES
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              Cloud Migration & AWS Infrastructure Services
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Transform your infrastructure with cloud solutions. Expert AWS
              consulting, migration, DevOps, and managed services to scale your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Start Migration
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}
              >
                Free Assessment
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { icon: Cloud, label: "AWS Certified" },
                { icon: Server, label: "Infrastructure" },
                { icon: Lock, label: "Secure" },
                { icon: Gauge, label: "Optimized" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                  >
                    <Icon className="text-sky-400 mx-auto mb-2" size={24} />
                    <div
                      className="text-sm text-white"
                      style={{ fontWeight: 600 }}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-xl border border-white/10 flex items-center justify-center">
                <Cloud className="text-sky-400" size={80} />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "EC2",
                  "S3",
                  "Lambda",
                  "RDS",
                  "CloudFront",
                  "ECS",
                  "EKS",
                  "Route53",
                ].map((service, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-white/10 text-center"
                  >
                    <div
                      className="text-white text-sm"
                      style={{ fontWeight: 600 }}
                    >
                      {service}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
