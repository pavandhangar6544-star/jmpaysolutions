import { Globe, Smartphone, Laptop, Cloud } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom web applications and corporate websites built with modern frameworks and best practices.',
    features: ['Responsive design', 'SEO optimization', 'CMS integration', 'Performance focused'],
    color: 'blue',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS & Android apps, or cross-platform solutions using React Native and Flutter.',
    features: ['iOS & Android', 'Cross-platform', 'App Store deployment', 'Push notifications'],
    color: 'teal',
  },
  {
    icon: Laptop,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to solve your specific business challenges and workflows.',
    features: ['Requirement analysis', 'Custom architecture', 'Scalable solutions', 'Ongoing support'],
    color: 'purple',
  },
  {
    icon: Cloud,
    title: 'Cloud & AWS Services',
    description: 'Cloud migration, infrastructure management, and DevOps on AWS, Azure, and Google Cloud.',
    features: ['Cloud migration', 'AWS certified', 'Auto-scaling', 'Cost optimization'],
    color: 'green',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-4">
            <span className="text-sm text-[#14b8a6]" style={{ fontWeight: 600 }}>OUR SERVICES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            End-to-End Development Services
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            From concept to deployment, we build scalable solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              blue: { bg: 'bg-blue-50', icon: 'text-[#1e40af]', border: 'border-blue-100' },
              teal: { bg: 'bg-teal-50', icon: 'text-[#14b8a6]', border: 'border-teal-100' },
              purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100' },
              green: { bg: 'bg-green-50', icon: 'text-[#10b981]', border: 'border-green-100' },
            }[service.color];

            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center border ${colorClasses.border}`}>
                    <Icon className={colorClasses.icon} size={32} />
                  </div>

                  <div>
                    <h3 className="text-2xl text-[#0f172a] mb-3" style={{ fontWeight: 700 }}>
                      {service.title}
                    </h3>
                    <p className="text-[#64748b] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[#475569]">
                        <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.icon.replace('text-', 'bg-')}`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
