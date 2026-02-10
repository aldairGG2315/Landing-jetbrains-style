import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LiquidBackground from './components/LiquidBackground'

function App() {
    return (
        <main className="relative min-h-screen text-white bg-[#050505] selection:bg-purple-500/30">
            <LiquidBackground />
            <Navbar />

            <div className="relative">
                <Hero />
                <Features />
            </div>

            <footer className="py-12 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em]">
                © 2026 Nexus Engineering Lab — Built with WebStorm
            </footer>
        </main>
    )
}

export default App