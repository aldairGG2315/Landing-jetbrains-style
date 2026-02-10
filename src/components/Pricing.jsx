import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const planes = [
    {
        nombre: "Estudiante",
        precioMensual: 0,
        precioAnual: 0,
        features: ["Acceso a herramientas básicas", "Comunidad de Discord", "Recursos de aprendizaje gratuitos"],
        popular: false
    },
    {
        nombre: "Pro Engineer",
        precioMensual: 29,
        precioAnual: 290, // Ahorro de 2 meses
        features: ["Todo lo de Estudiante", "IDE NEXUS Ultimate", "Prioridad en soporte", "Cursos avanzados de C# y SQL"],
        popular: true
    },
    {
        nombre: "Teams",
        precioMensual: 99,
        precioAnual: 990,
        features: ["Todo lo de Pro", "Licencias para 5 usuarios", "Gestión de equipos", "API Access privado"],
        popular: false
    }
];

export default function Pricing() {
    const [esAnual, setEsAnual] = useState(true);

    return (
        <section className="py-24 px-8 relative z-10" id="pricing">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
                        Planes Flexibles
                    </h2>
                    <p className="text-gray-400 text-lg">Herramientas profesionales a tu alcance.</p>

                    {/* Switch Mensual / Anual */}
                    <div className="flex items-center justify-center mt-8 gap-4">
                        <span className={`text-sm font-bold ${!esAnual ? 'text-white' : 'text-gray-500'}`}>Mensual</span>
                        <button
                            onClick={() => setEsAnual(!esAnual)}
                            className="w-14 h-8 bg-purple-900/50 rounded-full p-1 relative backdrop-blur-sm border border-purple-500/30 transition-colors hover:border-purple-400"
                        >
                            <motion.div
                                animate={{ x: esAnual ? 24 : 0 }}
                                className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-sm"
                            />
                        </button>
                        <span className={`text-sm font-bold ${esAnual ? 'text-white' : 'text-gray-500'}`}>
              Anual <span className="text-purple-400 text-xs ml-1">(Ahorra 20%)</span>
            </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {planes.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`p-8 rounded-3xl backdrop-blur-xl border relative transition-all ${plan.popular ? 'bg-purple-900/20 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-black uppercase px-3 py-1 rounded-full">
                  Más Popular
                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                            <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-black tracking-tighter">
                  ${esAnual ? plan.precioAnual : plan.precioMensual}
                </span>
                                <span className="text-gray-400 mb-1">/ {esAnual ? 'año' : 'mes'}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-purple-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90' : 'bg-white/10 hover:bg-white/20 border border-white/10'}`}>
                                Comenzar Ahora
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}