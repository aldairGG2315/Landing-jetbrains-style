import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 px-8 relative z-10" id="contact">
            <div className="max-w-4xl mx-auto relative">
                {/* Fondo decorativo para el formulario */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl -z-10 rounded-full transform -rotate-6 scale-y-75 opacity-50" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black tracking-tighter uppercase italic mb-2">
                            Inicia un Proyecto
                        </h2>
                        <p className="text-gray-400">¿Tienes una idea desafiante? Hablemos de ingeniería.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input type="text" placeholder="Tu Nombre" className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input type="email" placeholder="Tu Email Profesional" className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
                            </div>
                        </div>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-6 text-gray-500 w-5 h-5" />
                            <textarea rows="5" placeholder="Detalles del Proyecto o Consulta..." className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"></textarea>
                        </div>
                        <button type="submit" className="group w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-lg font-bold uppercase tracking-widest relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Enviar Mensaje <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}