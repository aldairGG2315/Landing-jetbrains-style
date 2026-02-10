import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const palabras = ["desarrollo de juegos", "aplicaciones móviles", "desarrollo web", "ingeniería de software"];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex((prev) => (prev + 1) % palabras.length), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative z-10 pt-32">
            <div className="max-w-5xl">
                <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
                    No importa si haces <br />
                    <div className="relative h-[1.1em] my-4 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={palabras[index]}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="absolute inset-0 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
                            >
                                {palabras[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    tenemos una solución para ti.
                </h1>

                <div className="mt-16 max-w-2xl mx-auto">
                    <p className="text-gray-400 text-xl font-medium border-l-4 border-purple-500 pl-6 text-left italic">
                        "Esta plataforma es un escaparate tecnológico diseñado para ingenieros que buscan herramientas de alto rendimiento,
                        combinando estética minimalista con potencia bruta."
                    </p>
                </div>
            </div>
        </section>
    );
}