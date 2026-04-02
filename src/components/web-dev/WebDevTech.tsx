import { Code } from "lucide-react";

export function WebDevTech() {
  const technologies = {
    Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "PHP", "Java", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD", "Kubernetes"],
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Modern Technology Stack
          </h2>
          <p className="text-xl text-[#475569]">
            We use the latest technologies to build scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-violet-200 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-violet-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Code className="text-white" size={32} />
              </div>
              <h3
                className="text-xl text-[#0f172a] mb-4"
                style={{ fontWeight: 700 }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
