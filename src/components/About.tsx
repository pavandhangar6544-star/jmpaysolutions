import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>ABOUT US</span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[#0f172a]" style={{ fontWeight: 700, lineHeight: '1.2' }}>
              Your Trusted Partner in FinTech & SaaS Innovation
            </h2>

            <p className="text-lg text-[#475569] leading-relaxed">
              JMPaySolutions is a leading provider of payment gateway solutions, enterprise software, 
              and cloud services. We empower businesses with cutting-edge technology and white-label 
              products designed for the modern digital economy.
            </p>

            <p className="text-lg text-[#475569] leading-relaxed">
              With expertise spanning FinTech, SaaS development, and cloud infrastructure, we deliver 
              scalable, secure, and innovative solutions that drive business growth and digital transformation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="text-[#1e40af]" size={24} />
                </div>
                <h4 className="text-[#0f172a]" style={{ fontWeight: 600 }}>Our Mission</h4>
                <p className="text-sm text-[#64748b]">
                  Simplify digital payments and empower businesses with world-class technology
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Eye className="text-[#14b8a6]" size={24} />
                </div>
                <h4 className="text-[#0f172a]" style={{ fontWeight: 600 }}>Our Vision</h4>
                <p className="text-sm text-[#64748b]">
                  Be the leading FinTech platform provider across emerging markets
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="text-[#10b981]" size={24} />
                </div>
                <h4 className="text-[#0f172a]" style={{ fontWeight: 600 }}>Our Values</h4>
                <p className="text-sm text-[#64748b]">
                  Innovation, security, customer success, and transparency
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMG9mZmljZXxlbnwxfHx8fDE3NzA1NjM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Enterprise Technology"
                className="w-full h-auto"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e40af] to-[#14b8a6] rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl text-[#0f172a]" style={{ fontWeight: 700 }}>5+ Years</div>
                  <div className="text-sm text-[#64748b]">Industry Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
