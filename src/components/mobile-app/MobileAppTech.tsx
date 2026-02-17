import { Code } from "lucide-react";

export function MobileAppTech() {
  const technologies = {
    "Native iOS": [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Core Data",
      "Push Notifications",
    ],
    "Native Android": [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Firebase",
      "Material Design",
    ],
    "Cross-Platform": ["React Native", "Flutter", "Expo", "Redux", "GraphQL"],
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Mobile Technologies We Use
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div
              key={category}
              className="bg-white border border-slate-200 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
                    className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-lg text-sm"
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
