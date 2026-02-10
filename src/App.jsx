import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CodeSkills from './components/CodeSkills' // Nuevo
import Pricing from './components/Pricing'       // Nuevo
import Contact from './components/Contact'       // Nuevo
import LiquidBackground from './components/LiquidBackground'

function App() {
    return (
        <main className="relative min-h-screen text-white bg-[#050505] selection:bg-purple-500/30 overflow-x-hidden">
            <LiquidBackground />
            <Navbar />

            {/* Contenedor para el contenido principal */}
            <div className="relative z-10">
                <Hero />
                <Features />
                {/* Nuevas secciones añadidas en orden lógico */}
                <CodeSkills />
                <Pricing />
                <Contact />
            </div>

            <footer className="py-12 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em] relative z-10 border-t border-white/5">
                © 2026 Nexus Engineering Lab — Desarrollado con React & Tailwind
            </footer>
        </main>
    )
}

export default App