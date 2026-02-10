export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/40 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
                <span className="font-black text-xl tracking-tighter uppercase italic">Nexus_Dev</span>
            </div>

            <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Herramientas</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Ecosistema</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Comunidad</a>
            </div>

            <button className="px-6 py-2 bg-white text-black text-xs font-black uppercase rounded-full hover:bg-purple-500 hover:text-white transition-all">
                Empezar Ahora
            </button>
        </nav>
    );
}