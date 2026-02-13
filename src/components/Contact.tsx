import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>GET IN TOUCH</span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[#0f172a]" style={{ fontWeight: 700, lineHeight: '1.2' }}>
              Let's Build Something Amazing Together
            </h2>

            <p className="text-lg text-[#475569]">
              Ready to transform your business with our solutions? Talk to our sales team 
              or request a personalized demo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#1e40af]" size={22} />
                </div>
                <div>
                  <div className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>Email Us</div>
                  <a href="mailto:sales@jmpaysolutions.com" className="text-[#475569] hover:text-[#1e40af]">
                    sales@jmpaysolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#14b8a6]" size={22} />
                </div>
                <div>
                  <div className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>Call Us</div>
                  <a href="tel:+911234567890" className="text-[#475569] hover:text-[#1e40af]">
                    +91 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#10b981]" size={22} />
                </div>
                <div>
                  <div className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>Visit Us</div>
                  <p className="text-[#475569]">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
                <MessageSquare size={20} />
                Request Demo
              </button>
              <button className="px-8 py-4 bg-white text-[#1e40af] border-2 border-[#1e40af] rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl text-[#0f172a] mb-6" style={{ fontWeight: 700 }}>
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#334155] mb-2" style={{ fontWeight: 600 }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#334155] mb-2" style={{ fontWeight: 600 }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#334155] mb-2" style={{ fontWeight: 600 }}>
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-[#334155] mb-2" style={{ fontWeight: 600 }}>
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm text-[#334155] mb-2" style={{ fontWeight: 600 }}>
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm text-[#334155] mb-2" style={{ fontWeight: 600 }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2" 
                style={{ fontWeight: 600 }}
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
