import {
  UserCheck,
  QrCode,
  Bell,
  Camera,
  FileText,
  Users,
  Clock,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Check-in",
    description: "Contactless visitor registration with QR codes",
  },
  {
    icon: UserCheck,
    title: "Pre-Registration",
    description: "Allow hosts to pre-register visitors in advance",
  },
  {
    icon: Camera,
    title: "Photo Capture",
    description: "Capture visitor photos for security and identification",
  },
  {
    icon: FileText,
    title: "Badge Printing",
    description: "Automatic visitor badge printing with custom templates",
  },
  {
    icon: Bell,
    title: "Host Notifications",
    description: "Instant SMS/email notifications to hosts",
  },
  {
    icon: Users,
    title: "Visitor Tracking",
    description: "Real-time tracking of visitors in premises",
  },
  {
    icon: Clock,
    title: "Visit History",
    description: "Complete audit trail of all visitor activities",
  },
  {
    icon: Shield,
    title: "Watchlist Screening",
    description: "Screen visitors against custom watchlists",
  },
];

export function VisitorManagementOverview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-4">
            <span className="text-sm text-teal-600" style={{ fontWeight: 600 }}>
              FEATURES
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Complete Visitor Management Solution
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            From check-in to check-out, manage every aspect of visitor
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xl hover:border-teal-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
