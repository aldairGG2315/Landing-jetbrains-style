export default function AboutMe() {
    return (
        <section className="py-20 px-8 bg-gradient-to-b from-transparent to-purple-900/10 relative z-10">
            <div className="max-w-4xl mx-auto border border-white/10 p-10 rounded-3xl backdrop-blur-md bg-black/20">
                <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase italic">Perfil del Desarrollador</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                    Estudiante de <span className="text-purple-400 font-bold">Ingeniería de Software</span> enfocado en crear soluciones
                    eficientes y visualmente impactantes. Apasionado por el ecosistema de **desarrollo web**,
                    la arquitectura en **C#** y la optimización de bases de datos en **SQL Server**.
                </p>
                <div className="flex gap-4">
                    <a href="TU_LINK_A_PAGINA_PRINCIPAL" className="text-xs font-black uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                        ← Volver al Portal Principal
                    </a>
                </div>
            </div>
        </section>
    );
}