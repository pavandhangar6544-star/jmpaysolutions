import { Play, Video, FileText, Award } from "lucide-react";

export function LearningExperience() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-slate-900 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
                <div className="flex-1 h-1 bg-slate-700 rounded-full">
                  <div className="w-1/2 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-xs text-slate-400">5:30</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <span
                className="text-sm text-blue-600"
                style={{ fontWeight: 600 }}
              >
                LEARNING EXPERIENCE
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#0f172a]"
              style={{ fontWeight: 700, lineHeight: "1.2" }}
            >
              Engaging & Interactive Learning
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              Deliver engaging courses with videos, quizzes, assignments, and
              interactive content.
            </p>
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: Video,
                  title: "Video Lessons",
                  desc: "HD video streaming with playback controls",
                },
                {
                  icon: FileText,
                  title: "Rich Content",
                  desc: "Documents, presentations, and multimedia",
                },
                {
                  icon: Award,
                  title: "Gamification",
                  desc: "Badges, points, and leaderboards",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4
                        className="text-[#0f172a] mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#64748b]">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
