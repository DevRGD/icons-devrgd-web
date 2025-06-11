import { GitHub, Terminal, Alphabet, Layer, Home, User, Settings } from '@/icons';

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-16 bg-slate-100 p-8 md:p-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">Universal Content System</h1>
        <p className="mt-3 text-lg text-slate-600">A flexible, type-safe system for icons and text.</p>
      </div>

      {/* --- Section 1: Showcase Grid --- */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* User Avatar Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <Alphabet
            letter="R"
            className="h-20 w-20 rounded-full bg-purple-100 text-5xl text-purple-600 ring-4 ring-purple-100"
          />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">User Avatar</h3>
            <p className="text-sm text-slate-500">Initials</p>
          </div>
        </div>

        {/* Social Link Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <GitHub className="h-20 w-20 rounded-lg bg-gray-900 p-2 text-6xl text-white transition-transform hover:scale-110" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">Social Link</h3>
            <p className="text-sm text-slate-500">GitHub</p>
          </div>
        </div>

        {/* Feature Icon Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <Home className="h-20 w-20 rounded-lg border-2 border-sky-400 bg-sky-50 p-2 text-5xl text-sky-500" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">Dashboard</h3>
            <p className="text-sm text-slate-500">Home</p>
          </div>
        </div>

        {/* Multi-Character Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <Alphabet letter="RGD" className="h-20 w-28 rounded-lg bg-teal-500 text-4xl font-black text-white" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">Project ID</h3>
            <p className="text-sm text-slate-500">Multi-Letter</p>
          </div>
        </div>

        {/* Layer Icon Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <Layer className="h-20 w-20 rounded-full bg-indigo-100 p-2 text-5xl text-indigo-500" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">API Layers</h3>
            <p className="text-sm text-slate-500">Mixed Style</p>
          </div>
        </div>

        {/* Settings Icon Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <Settings className="h-20 w-20 rounded-lg bg-slate-200 text-5xl text-slate-600 transition-transform hover:rotate-90" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">Configuration</h3>
            <p className="text-sm text-slate-500">Settings</p>
          </div>
        </div>

        {/* User Icon Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <User className="h-20 w-20 rounded-lg bg-rose-50 p-2 text-5xl text-rose-500" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">User Profile</h3>
            <p className="text-sm text-slate-500">Account</p>
          </div>
        </div>

        {/* Terminal Icon Example */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
          <Terminal className="h-20 w-20 rounded-lg border-2 border-dashed border-slate-400 p-2 text-5xl text-slate-500" />
          <div className="text-center">
            <h3 className="font-semibold text-slate-800">Developer API</h3>
            <p className="text-sm text-slate-500">Terminal</p>
          </div>
        </div>
      </div>
    </main>
  );
}
