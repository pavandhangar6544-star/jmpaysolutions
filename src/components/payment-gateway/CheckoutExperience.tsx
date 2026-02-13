import { Play, Zap, Smartphone, Shield, CheckCircle2 } from 'lucide-react';

export function CheckoutExperience() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Video Player */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>

                {/* Mock checkout flow screens */}
                <div className="absolute inset-0 p-8 flex items-center justify-center opacity-50">
                  <div className="grid grid-cols-3 gap-4">
                    {/* QR Code Screen */}
                    <div className="bg-white rounded-lg p-4 w-32 shadow-xl">
                      <div className="w-20 h-20 bg-slate-200 rounded mx-auto mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                    {/* UPI Intent Screen */}
                    <div className="bg-white rounded-lg p-4 w-32 shadow-xl">
                      <div className="h-3 bg-blue-200 rounded mb-2"></div>
                      <div className="h-8 bg-blue-500 rounded mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                    {/* Success Screen */}
                    <div className="bg-white rounded-lg p-4 w-32 shadow-xl">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Feature badges */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-blue-500 text-white rounded-full text-xs flex items-center gap-1" style={{ fontWeight: 600 }}>
                  <Zap size={14} />
                  Fast
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white rounded-full text-xs flex items-center gap-1" style={{ fontWeight: 600 }}>
                  <Shield size={14} />
                  Secure
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-teal-500 text-white rounded-full text-xs flex items-center gap-1" style={{ fontWeight: 600 }}>
                  <Smartphone size={14} />
                  Mobile Optimized
                </div>
              </div>

              {/* Video controls */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
                <div className="flex-1 h-1 bg-slate-700 rounded-full">
                  <div className="w-1/3 h-full bg-[#1e40af] rounded-full"></div>
                </div>
                <span className="text-xs text-slate-400">1:45</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-sm text-[#1e40af]" style={{ fontWeight: 600 }}>
                CHECKOUT EXPERIENCE
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[#0f172a]" style={{ fontWeight: 700, lineHeight: '1.2' }}>
              Smart & Seamless Checkout Experience
            </h2>

            <p className="text-lg text-[#475569] leading-relaxed">
              Experience fast and secure payment processing through QR codes, UPI intent, 
              and multi-mode checkout flows.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-[#1e40af]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>Fast Response</h4>
                  <p className="text-sm text-[#64748b]">
                    Sub-second transaction processing with instant payment confirmation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-[#14b8a6]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>Mobile Optimized</h4>
                  <p className="text-sm text-[#64748b]">
                    Responsive design optimized for all devices and screen sizes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#10b981]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#0f172a] mb-1" style={{ fontWeight: 600 }}>Secure Transaction Flow</h4>
                  <p className="text-sm text-[#64748b]">
                    End-to-end encryption with PCI-DSS compliance and fraud detection
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <CheckCircle2 className="text-green-500" size={20} />
              <span className="text-[#475569]">QR Code + UPI Intent + Net Banking + Cards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
