import {
  GraduationCap,
  BookOpen,
  Video,
  FileText,
  Award,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Course Creation",
    description: "Easy-to-use course builder with multimedia support",
  },
  {
    icon: Video,
    title: "Video Hosting",
    description: "Integrated video hosting and streaming capabilities",
  },
  {
    icon: FileText,
    title: "Content Management",
    description: "Organize documents, presentations, and resources",
  },
  {
    icon: Award,
    title: "Certificates & Badges",
    description: "Automated certificate generation and digital badges",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Manage learners, instructors, and administrators",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Track progress, engagement, and performance metrics",
  },
  {
    icon: BookOpen,
    title: "Assessments & Quizzes",
    description: "Create tests, quizzes, and assignments",
  },
  {
    icon: Shield,
    title: "SCORM Compliant",
    description: "Support for SCORM, xAPI, and LTI standards",
  },
];

export function LMSOverview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-600" style={{ fontWeight: 600 }}>
              FEATURES
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Complete Learning Management Features
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Everything you need to deliver engaging online learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3
                  className="text-lg text-[#0f172a] mb-2"
                  style={{ fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
