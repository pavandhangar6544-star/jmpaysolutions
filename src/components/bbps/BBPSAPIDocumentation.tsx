import {
  Code,
  FileJson,
  Key,
  Webhook,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export function BBPSAPIDocumentation() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-block px-4 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-full">
              <span
                className="text-sm text-purple-200"
                style={{ fontWeight: 600 }}
              >
                FOR DEVELOPERS
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl"
              style={{ fontWeight: 700, lineHeight: "1.2" }}
            >
              Simple BBPS API Integration
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Easy-to-use REST APIs for bill fetch, payment processing, and
              status tracking with comprehensive documentation and SDK support.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                  <Code className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Bill Fetch API
                  </h4>
                  <p className="text-sm text-slate-400">
                    Fetch bill details by customer ID with biller information
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                  <FileJson className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Payment Initiation
                  </h4>
                  <p className="text-sm text-slate-400">
                    Process bill payments with instant confirmation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-400/30">
                  <Key className="text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Status Check API
                  </h4>
                  <p className="text-sm text-slate-400">
                    Real-time payment status and transaction history
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-400/30">
                  <Webhook className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Webhook Notifications
                  </h4>
                  <p className="text-sm text-slate-400">
                    Automated callbacks for payment status updates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-400/30">
                  <BookOpen className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    SDK Libraries
                  </h4>
                  <p className="text-sm text-slate-400">
                    Ready-to-use SDKs for Node.js, Python, PHP, and Java
                  </p>
                </div>
              </div>
            </div>

            <button
              className="group px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg flex items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              View API Docs
              <ExternalLink
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
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
                <span className="text-xs text-slate-400">fetch-bill.js</span>
              </div>

              {/* Code content */}
              <div className="p-6 text-sm font-mono">
                <div className="space-y-2">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">response</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-yellow-300">fetch</span>(
                    <span className="text-green-300">
                      'api/bbps/fetch-bill'
                    </span>
                    , {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">method</span>:{" "}
                    <span className="text-green-300">'POST'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">headers</span>: {"{"}
                  </div>
                  <div className="pl-8">
                    <span className="text-green-300">'API-Key'</span>:{" "}
                    <span className="text-orange-300">
                      process.env.BBPS_KEY
                    </span>
                    ,
                  </div>
                  <div className="pl-8">
                    <span className="text-green-300">'Content-Type'</span>:{" "}
                    <span className="text-green-300">'application/json'</span>
                  </div>
                  <div className="pl-4">{"}"}, </div>
                  <div className="pl-4">
                    <span className="text-blue-300">body</span>:{" "}
                    <span className="text-yellow-300">JSON.stringify</span>(
                    {"{"}
                  </div>
                  <div className="pl-8">
                    <span className="text-blue-300">billerId</span>:{" "}
                    <span className="text-green-300">'ELEC001'</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-blue-300">customerId</span>:{" "}
                    <span className="text-green-300">'123456789'</span>
                  </div>
                  <div className="pl-4">{"}"})</div>
                  <div>{"}"});</div>
                  <div className="pt-2">
                    <span className="text-slate-500">// Response</span>
                  </div>
                  <div>{"{"}</div>
                  <div className="pl-4">
                    <span className="text-blue-300">billAmount</span>:{" "}
                    <span className="text-orange-300">1250.00</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">dueDate</span>:{" "}
                    <span className="text-green-300">'2026-02-25'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">customerName</span>:{" "}
                    <span className="text-green-300">'John Doe'</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
