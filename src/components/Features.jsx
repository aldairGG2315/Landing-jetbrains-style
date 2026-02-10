import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Zap, Code2 } from 'lucide-react';

const caracteristicas = [
    {
        titulo: "Rendimiento Extremo",
        desc: "Optimizado para hardware de alto nivel como tu serie RTX.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        titulo: "Arquitectura Pro",
        desc: "Código modular diseñado para escalabilidad en ingeniería.",
        icon: <Code2 className="w-6 h-6" />
    },
    {
        titulo: "Entorno Seguro",
        desc: "Protocolos de seguridad integrados en cada línea de código.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        titulo: "Consola Nativa",
        desc: "Herramientas de línea de comandos para desarrolladores reales.",
        icon: <Terminal className="w-6 h-6" />
    }
];

export default function Features() {
    return (
        <section className="py-20 px-8 max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caracteristicas.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                        className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md transition-all group hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                    >
                        <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{f.titulo}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}