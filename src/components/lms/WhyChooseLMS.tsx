import { Shield, Zap, Code, Headphones, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "SCORM Compliant",
    description: "Full support for SCORM, xAPI, and LTI standards",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security with role-based access",
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Intuitive interface for learners and administrators",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team and comprehensive documentation",
  },
  {
    icon: Code,
    title: "Customizable",
    description: "White-label solution with custom branding options",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Grow from 10 to 10,000+ users seamlessly",
  },
];

export function WhyChooseLMS() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Why Choose Our LMS
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Enterprise-ready learning platform with modern features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3
                  className="text-xl text-[#0f172a] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                10K+
              </div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                500+
              </div>
              <div className="text-slate-300">Courses</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                95%
              </div>
              <div className="text-slate-300">Satisfaction</div>
            </div>
            <div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontWeight: 700 }}
              >
                24/7
              </div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
