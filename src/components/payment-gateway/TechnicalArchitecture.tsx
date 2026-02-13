import { ArrowRight, Database, Shield, Cloud, Lock } from 'lucide-react';

export function TechnicalArchitecture() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <span className="text-sm text-purple-600" style={{ fontWeight: 600 }}>
              TECHNICAL ARCHITECTURE
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Secure & Scalable Architecture
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Built on modern cloud infrastructure with enterprise-grade security
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-200 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            {/* Merchant */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Database size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>Merchant</div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">Your System</div>
            </div>

            {/* Arrow */}
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-[#1e40af]" size={40} />
            </div>

            {/* Gateway */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Shield size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>Gateway</div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">Payment Processing</div>
            </div>

            {/* Arrow */}
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-[#1e40af]" size={40} />
            </div>

            {/* Bank API */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Cloud size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>Bank API</div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">Bank Processing</div>
            </div>

            {/* Arrow */}
            <div className="rotate-90 lg:rotate-0">
              <ArrowRight className="text-[#1e40af]" size={40} />
            </div>

            {/* Success Response */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <Lock size={40} />
                <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>Response</div>
              </div>
              <div className="text-center mt-3 text-sm text-[#64748b]">Secure Callback</div>
            </div>
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: 'API-First Architecture', desc: 'RESTful APIs with comprehensive documentation' },
            { title: 'Cloud-Ready Deployment', desc: 'Deploy on AWS, Azure, or private cloud' },
            { title: 'High Availability', desc: '99.99% uptime with auto-scaling' },
            { title: 'Data Encryption', desc: 'End-to-end encryption with TLS 1.3' },
            { title: 'Role-Based Access', desc: 'Granular access control and permissions' },
          ].map((feature, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-[#0f172a] mb-2" style={{ fontWeight: 700 }}>{feature.title}</h4>
              <p className="text-sm text-[#64748b]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
