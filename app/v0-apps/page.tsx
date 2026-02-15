import Image from "next/image";

const apps = [
  {
    name: "v0 Explorer",
    description: "Multi-modal search for engineering documents",
    url: "https://v0-ethereal-explorer.vercel.app",
    icon: "🌌",
    color: "from-emerald-400 to-cyan-400",
    screenshot: "/v0-showcase/v0-explorer-showcase.mp4"
  },
  {
    name: "v0 Eye",
    description: "AI vision and document intelligence platform",
    url: "https://v0-ethereal-eye.vercel.app",
    icon: "👁️",
    color: "from-yellow-400 to-red-400",
    screenshot: "/v0-showcase/ethereal-v0-login-2026-02-14.png"
  },
  {
    name: "v0 Insight",
    description: "Analytics dashboard for RAG pipelines",
    url: "https://v0-ethereal-insight.vercel.app",
    icon: "📊",
    color: "from-violet-400 to-pink-400",
    screenshot: "/v0-showcase/ethereal-insight-v0-login-page-2026-02-14.png"
  },
  {
    name: "EtherealSearch",
    description: "Original agentic RAG showcase",
    url: "https://etherealsearch-showcase.vercel.app",
    icon: "🔍",
    color: "from-blue-400 to-purple-400",
    screenshot: "/v0-showcase/01-hero.png"
  }
];

export default function V0AppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center py-16 px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          V0 Apps Showcase
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Four Revolutionary AI-Powered Applications
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <div key={app.name} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all">
              <div className={`h-2 bg-gradient-to-r ${app.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${app.color} flex items-center justify-center text-2xl`}>
                    {app.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{app.name}</h2>
                </div>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="aspect-video bg-black/20 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={app.screenshot}
                    alt={app.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  View Live App →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
