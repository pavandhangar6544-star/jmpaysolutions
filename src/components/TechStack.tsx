import { Cloud, Lock, Cpu, Database, Server, Workflow } from 'lucide-react';

const technologies = [
  {
    icon: Cloud,
    name: 'AWS Cloud',
    description: 'Scalable cloud infrastructure',
  },
  {
    icon: Workflow,
    name: 'Microservices',
    description: 'Modern architecture',
  },
  {
    icon: Server,
    name: 'REST APIs',
    description: 'Developer-friendly',
  },
  {
    icon: Lock,
    name: 'Security',
    description: 'PCI-DSS compliant',
  },
  {
    icon: Database,
    name: 'Big Data',
    description: 'Real-time analytics',
  },
  {
    icon: Cpu,
    name: 'AI/ML',
    description: 'Smart automation',
  },
];

export function TechStack() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <span className="text-sm text-purple-600" style={{ fontWeight: 600 }}>TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Built on Modern Technology
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver robust, scalable solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-[#1e40af]" size={32} />
                </div>
                <h4 className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>{tech.name}</h4>
                <p className="text-xs text-[#64748b]">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tech Details */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-xl">
            <div className="text-3xl mb-2" style={{ fontWeight: 700, background: 'linear-gradient(135deg, #1e40af 0%, #14b8a6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Cloud-Native
            </div>
            <p className="text-[#64748b]">
              Built from the ground up for cloud deployment with auto-scaling and high availability
            </p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl">
            <div className="text-3xl mb-2" style={{ fontWeight: 700, background: 'linear-gradient(135deg, #1e40af 0%, #14b8a6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              API-First
            </div>
            <p className="text-[#64748b]">
              Comprehensive REST APIs with detailed documentation and SDKs for multiple languages
            </p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl">
            <div className="text-3xl mb-2" style={{ fontWeight: 700, background: 'linear-gradient(135deg, #1e40af 0%, #14b8a6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Enterprise-Ready
            </div>
            <p className="text-[#64748b]">
              Battle-tested infrastructure handling millions of transactions with 99.99% uptime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
