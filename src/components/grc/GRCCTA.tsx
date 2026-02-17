import { ArrowRight, MessageSquare } from "lucide-react";

export function GRCCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
            <span
              className="text-sm text-emerald-200"
              style={{ fontWeight: 600 }}
            >
              GET STARTED TODAY
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl text-white"
            style={{ fontWeight: 700, lineHeight: "1.2" }}
          >
            Ready to Transform Your GRC Program?
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Streamline governance, manage risks effectively, and ensure
            compliance with our comprehensive eGRC platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <MessageSquare size={20} />
              Talk to Sales
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Request Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Multi-Framework</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">Automated Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
