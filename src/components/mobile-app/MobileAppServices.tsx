import {
  Smartphone,
  ShoppingBag,
  Heart,
  Utensils,
  Camera,
  Users,
} from "lucide-react";

export function MobileAppServices() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl text-[#0f172a] mb-4"
            style={{ fontWeight: 700 }}
          >
            Mobile App Development Services
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Native and cross-platform solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ShoppingBag,
              title: "E-Commerce Apps",
              desc: "Shopping apps with payment integration",
            },
            {
              icon: Users,
              title: "Social Networking",
              desc: "Social media and community apps",
            },
            {
              icon: Utensils,
              title: "Food Delivery",
              desc: "On-demand delivery applications",
            },
            {
              icon: Heart,
              title: "Health & Fitness",
              desc: "Health tracking and wellness apps",
            },
            {
              icon: Camera,
              title: "Photo & Video",
              desc: "Media sharing and editing apps",
            },
            {
              icon: Smartphone,
              title: "Business Apps",
              desc: "Enterprise mobile solutions",
            },
          ].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-pink-200 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
