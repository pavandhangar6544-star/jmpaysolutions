import { CreditCard, FileText, Shield, GraduationCap, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const products = [
  {
    icon: CreditCard,
    name: 'Payment Gateway',
    category: 'White-Label Solution',
    description: 'Fully customizable payment gateway with your brand identity. Accept payments across multiple channels with enterprise-grade security.',
    features: ['Custom branding & domain', 'Multi-currency support', 'Merchant dashboard', 'API & SDK integration'],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    link: '/payment-gateway',
  },
  {
    icon: FileText,
    name: 'BBPS',
    category: 'Bill Payment System',
    description: 'Bharat Bill Payment System integration for seamless bill payments across utilities, telecom, and more.',
    features: ['Pan-India coverage', 'Real-time settlements', 'Multiple billers', 'Instant confirmation'],
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    name: 'eGRC Platform',
    category: 'Compliance Management',
    description: 'Enterprise Governance, Risk & Compliance platform to streamline regulatory requirements and risk management.',
    features: ['Compliance tracking', 'Risk assessment', 'Audit trails', 'Reporting & analytics'],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: GraduationCap,
    name: 'LMS',
    category: 'School Management',
    description: 'Comprehensive Learning Management System for educational institutions with student, faculty, and admin portals.',
    features: ['Student management', 'Fee collection', 'Attendance tracking', 'Parent portal'],
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: UserCheck,
    name: 'Visitor Management',
    category: 'Access Control',
    description: 'Smart visitor management system with pre-registration, QR codes, and real-time tracking for secure premises.',
    features: ['Digital check-in', 'QR code badges', 'Host notifications', 'Analytics dashboard'],
    color: 'green',
    gradient: 'from-green-500 to-green-600',
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>OUR PRODUCTS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
            Enterprise-Grade SaaS Products
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Comprehensive suite of ready-to-deploy solutions built for modern businesses
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Category Badge */}
                  <div>
                    <div className="inline-block px-3 py-1 bg-slate-100 rounded-full mb-3">
                      <span className="text-xs text-[#64748b]" style={{ fontWeight: 600 }}>
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-2xl text-[#0f172a] mb-3" style={{ fontWeight: 700 }}>
                      {product.name}
                    </h3>
                    <p className="text-[#64748b] leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  {product.link ? (
                    <Link to={product.link} className="group/btn flex items-center gap-2 text-[#1e40af] hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
                      Learn More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button className="group/btn flex items-center gap-2 text-[#1e40af] hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
                      Learn More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}