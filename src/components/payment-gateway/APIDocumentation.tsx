import { Code, FileJson, Key, Webhook, BookOpen, ExternalLink } from 'lucide-react';

export function APIDocumentation() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-sm text-blue-200" style={{ fontWeight: 600 }}>
                FOR DEVELOPERS
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl" style={{ fontWeight: 700, lineHeight: '1.2' }}>
              Developer-Friendly API Documentation
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Integrate our payment gateway using REST APIs with clear documentation, 
              sample requests, and webhook guides.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                  <Code className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>REST API Support</h4>
                  <p className="text-sm text-slate-400">
                    Simple, intuitive REST APIs with predictable resource-oriented URLs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-400/30">
                  <FileJson className="text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>JSON Request/Response</h4>
                  <p className="text-sm text-slate-400">
                    All API requests and responses are in JSON format
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                  <Key className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>Authentication Methods</h4>
                  <p className="text-sm text-slate-400">
                    Secure API key authentication with optional OAuth 2.0 support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-400/30">
                  <Webhook className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>Webhook Handling</h4>
                  <p className="text-sm text-slate-400">
                    Real-time event notifications for payment status updates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-400/30">
                  <BookOpen className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>SDK Support</h4>
                  <p className="text-sm text-slate-400">
                    Available for Node.js, Python, PHP, Java, and more
                  </p>
                </div>
              </div>
            </div>

            <button className="group px-8 py-4 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center gap-2" style={{ fontWeight: 600 }}>
              View API Documentation
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right - Code Sample */}
          <div className="relative">
            <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Code editor header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-400 text-sm">payment_request.json</div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-slate-400">// POST /api/v1/payments</div>
                  <div className="text-slate-300">{'{'}</div>
                  <div className="pl-4">
                    <span className="text-blue-400">"amount"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"1299.00"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"currency"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"INR"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"payment_method"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"upi"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"order_id"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"ORD-12345"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"customer"</span>
                    <span className="text-slate-300">: {'{'}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-blue-400">"name"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"John Doe"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-blue-400">"email"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"john@example.com"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-blue-400">"phone"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"+919876543210"</span>
                  </div>
                  <div className="pl-4 text-slate-300">{'}'}</div>
                  <div className="text-slate-300">{'}'}</div>
                  
                  <div className="pt-4 text-slate-400">// Response</div>
                  <div className="text-slate-300">{'{'}</div>
                  <div className="pl-4">
                    <span className="text-blue-400">"status"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"success"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"payment_id"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"PAY-ABC123"</span>
                    <span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"redirect_url"</span>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-400">"..."</span>
                  </div>
                  <div className="text-slate-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
