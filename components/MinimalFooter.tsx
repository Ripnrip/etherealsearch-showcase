"use client";

export function MinimalFooter() {
  return (
    <footer className="py-6 px-6 border-t border-white/5 bg-[#030712]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <span className="text-sm text-gray-500">EtherealSearch</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-400 transition-colors">API</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Docs</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
        </div>

        <p className="text-xs text-gray-700">
          © 2024 EtherealSearch
        </p>
      </div>
    </footer>
  );
}
