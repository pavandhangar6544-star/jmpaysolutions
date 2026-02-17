import { ArrowRight, MessageSquare } from "lucide-react";

export function MobileAppCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-pink-900 via-slate-900 to-pink-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2
            className="text-4xl lg:text-5xl text-white"
            style={{ fontWeight: 700, lineHeight: "1.2" }}
          >
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's create an amazing mobile experience for your users on iOS and
            Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all shadow-lg flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <MessageSquare size={20} />
              Get Started
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all"
              style={{ fontWeight: 600 }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
