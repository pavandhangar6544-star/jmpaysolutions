import { ArrowRight, Globe, Smartphone, Zap, Code } from "lucide-react";

export function WebDevHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-blue-900">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-400/30 rounded-full">
              <Globe className="text-violet-300" size={18} />
              <span
                className="text-sm text-violet-200"
                style={{ fontWeight: 600 }}
              >
                WEBSITE DEVELOPMENT
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              Custom Website Development Services
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Build stunning, high-performance websites with modern
              technologies. From landing pages to complex web applications, we
              deliver solutions that drive results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}
              >
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { icon: Globe, label: "Responsive" },
                { icon: Zap, label: "Fast" },
                { icon: Smartphone, label: "Mobile-First" },
                { icon: Code, label: "Modern Stack" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                  >
                    <Icon className="text-violet-400 mx-auto mb-2" size={24} />
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
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-xl border border-white/10 flex items-center justify-center">
                {/* <Globe className="text-violet-400" size={80} /> */}
                <img src="/public/images/Custom-Website-Development.webp" alt="" className="w-full h-full rounded-xl"/>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  "React",
                  "Next.js",
                  "Tailwind",
                  "TypeScript",
                  "Node.js",
                  "AWS",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="p-2 bg-white/5 rounded text-center border border-white/10"
                  >
                    <div
                      className="text-white text-xs"
                      style={{ fontWeight: 600 }}
                    >
                      {tech}
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
