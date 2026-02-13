import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl tracking-tight mb-4" style={{ fontWeight: 600 }}>
              <span className="text-white">JMPay</span>
              <span className="text-[#3b82f6]">Solutions</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading provider of payment gateway solutions, SaaS products, and enterprise software for modern businesses.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1e40af] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1e40af] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1e40af] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1e40af] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>Products</h3>
            <ul className="space-y-3">
              <li><a href="#payment-gateway" className="hover:text-[#3b82f6] transition-colors">Payment Gateway</a></li>
              <li><a href="#bbps" className="hover:text-[#3b82f6] transition-colors">BBPS</a></li>
              <li><a href="#grc" className="hover:text-[#3b82f6] transition-colors">eGRC Platform</a></li>
              <li><a href="#lms" className="hover:text-[#3b82f6] transition-colors">LMS</a></li>
              <li><a href="#visitor-management" className="hover:text-[#3b82f6] transition-colors">Visitor Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>Services</h3>
            <ul className="space-y-3">
              <li><a href="#web-dev" className="hover:text-[#3b82f6] transition-colors">Website Development</a></li>
              <li><a href="#mobile-dev" className="hover:text-[#3b82f6] transition-colors">Mobile App Development</a></li>
              <li><a href="#custom-software" className="hover:text-[#3b82f6] transition-colors">Custom Software</a></li>
              <li><a href="#cloud-services" className="hover:text-[#3b82f6] transition-colors">Cloud & AWS Services</a></li>
              <li><a href="#about" className="hover:text-[#3b82f6] transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-0.5 text-[#3b82f6]" />
                <a href="mailto:sales@jmpaysolutions.com" className="hover:text-[#3b82f6] transition-colors">
                  sales@jmpaysolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-0.5 text-[#3b82f6]" />
                <a href="tel:+911234567890" className="hover:text-[#3b82f6] transition-colors">
                  +91 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-[#3b82f6]" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2026 JMPaySolutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#3b82f6] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}