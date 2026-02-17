import { Play, Zap, Receipt, CheckCircle2, FileText } from "lucide-react";

export function BillPaymentExperience() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Visual placeholder */}
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-slate-900 relative">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>

                {/* Mock bill payment flow */}
                <div className="absolute inset-0 p-8 flex items-center justify-center opacity-50">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Fetch Bill */}
                    <div className="bg-white rounded-lg p-4 w-32 shadow-xl">
                      <div className="w-20 h-20 bg-purple-200 rounded mx-auto mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                    {/* View Bill */}
                    <div className="bg-white rounded-lg p-4 w-32 shadow-xl">
                      <div className="h-3 bg-slate-200 rounded mb-2"></div>
                      <div className="h-8 bg-purple-500 rounded mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                    {/* Success */}
                    <div className="bg-white rounded-lg p-4 w-32 shadow-xl">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Feature badges */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 bg-purple-600 text-white rounded-full text-xs flex items-center gap-1"
                  style={{ fontWeight: 600 }}
                >
                  <Zap size={14} />
                  Quick
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white rounded-full text-xs flex items-center gap-1"
                  style={{ fontWeight: 600 }}
                >
                  <CheckCircle2 size={14} />
                  Verified
                </div>
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 bg-blue-500 text-white rounded-full text-xs flex items-center gap-1"
                  style={{ fontWeight: 600 }}
                >
                  <Receipt size={14} />
                  Receipt Generated
                </div>
              </div>

              {/* Progress bar */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
                <div className="flex-1 h-1 bg-slate-700 rounded-full">
                  <div className="w-1/3 h-full bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-xs text-slate-400">1:30</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full">
              <span
                className="text-sm text-purple-600"
                style={{ fontWeight: 600 }}
              >
                BILL PAYMENT FLOW
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl text-[#0f172a]"
              style={{ fontWeight: 700, lineHeight: "1.2" }}
            >
              Smart Bill Fetch & Payment Flow
            </h2>

            <p className="text-lg text-[#475569] leading-relaxed">
              Fetch bill details automatically from billers and enable customers
              to pay instantly with complete transparency.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#0f172a] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Auto Bill Fetch
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    Automatically retrieve bill amount, due date, and biller
                    details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Receipt className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#0f172a] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Bill Presentment
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    Display complete bill details before payment confirmation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <h4
                    className="text-[#0f172a] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Instant Confirmation
                  </h4>
                  <p className="text-sm text-[#64748b]">
                    Real-time payment status with instant receipt generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
