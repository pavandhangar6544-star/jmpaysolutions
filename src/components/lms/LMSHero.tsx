import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Users,
} from "lucide-react";

export function LMSHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <GraduationCap className="text-blue-300" size={18} />
              <span
                className="text-sm text-blue-200"
                style={{ fontWeight: 600 }}
              >
                LEARNING MANAGEMENT SYSTEM
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl"
              style={{ fontWeight: 700, lineHeight: "1.1" }}
            >
              Enterprise LMS Platform for Digital Learning
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive learning management system to create,deliver, and
              track online courses, training programs, and employee development
              initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Request Demo
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}
              >
                Start Free Trial
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <GraduationCap
                  className="text-blue-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Courses
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <BookOpen className="text-green-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Content Library
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle2
                  className="text-teal-400 mx-auto mb-2"
                  size={24}
                />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Assessments
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Users className="text-purple-400 mx-auto mb-2" size={24} />
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>
                  Multi-User
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div
                      className="text-white text-lg mb-1"
                      style={{ fontWeight: 700 }}
                    >
                      Learning Dashboard
                    </div>
                    <div className="text-slate-400 text-sm">
                      Course Progress
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                    style={{ fontWeight: 600 }}
                  >
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Active Courses
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      42
                    </div>
                    <div className="text-green-400 text-xs mt-1">
                      +8 this month
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-slate-400 text-xs mb-1">
                      Completion Rate
                    </div>
                    <div
                      className="text-white text-2xl"
                      style={{ fontWeight: 700 }}
                    >
                      87%
                    </div>
                    <div className="text-green-400 text-xs mt-1">+12%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      icon: "📚",
                      title: "Web Development",
                      progress: "75%",
                      color: "blue",
                    },
                    {
                      icon: "🎨",
                      title: "UI/UX Design",
                      progress: "60%",
                      color: "purple",
                    },
                    {
                      icon: "💼",
                      title: "Project Management",
                      progress: "90%",
                      color: "green",
                    },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{course.icon}</span>
                          <span
                            className="text-white text-sm"
                            style={{ fontWeight: 600 }}
                          >
                            {course.title}
                          </span>
                        </div>
                        <span className="text-slate-400 text-xs">
                          {course.progress}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${course.color}-500`}
                          style={{ width: course.progress }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
