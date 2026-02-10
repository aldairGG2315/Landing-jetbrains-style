import { motion } from 'framer-motion';

const codeSnippets = [
    {
        language: "C# / .NET Core",
        code: `public class IngenieroSoftware : Persona
{
    public string Especialidad { get; set; } = "Full Stack";
    public List<string> Stack { get; } = new() { "React", "C#", "SQL" };

    public void DesarrollarSolucion()
    {
        Console.WriteLine("Construyendo software robusto y escalable...");
        // Implementando patrones de diseño...
    }
}`
    },
    {
        language: "SQL Server (T-SQL)",
        code: `CREATE PROCEDURE sp_OptimizarRendimiento
    @ProyectoID INT
AS
BEGIN
    -- Análisis de planes de ejecución
    SELECT * FROM Proyectos WHERE ID = @ProyectoID;

    -- Indexación y optimización de consultas
    PRINT 'Base de datos optimizada para alto tráfico.';
END;`
    }
];

export default function CodeSkills() {
    return (
        <section className="py-24 px-8 relative z-10 bg-black/30" id="skills">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-black mb-12 text-center tracking-tighter uppercase italic">
                    <span className="text-purple-500">&lt;</span> Núcleo de Ingeniería <span className="text-purple-500">/&gt;</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {codeSnippets.map((snippet, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.01 }}
                            className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl"
                        >
                            {/* Barra de título del "IDE" */}
                            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-xs text-gray-400 font-mono">{snippet.language}</span>
                            </div>
                            {/* Área de código */}
                            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
                <code>
                  {snippet.code.split('\n').map((line, j) => (
                      <div key={j} className="table-row">
                          <span className="table-cell text-right pr-4 text-gray-600 select-none">{j + 1}</span>
                          <span className="table-cell" dangerouslySetInnerHTML={{
                              __html: line
                                  .replace(/(public|class|string|List|new|void|CREATE|PROCEDURE|INT|AS|BEGIN|SELECT|FROM|WHERE|PRINT|END)/g, '<span class="text-purple-400 font-bold">$1</span>')
                                  .replace(/(".+")/g, '<span class="text-green-400">$1</span>')
                                  .replace(/(\/\/.*|--.*)/g, '<span class="text-gray-500 italic">$1</span>')
                          }} />
                      </div>
                  ))}
                </code>
              </pre>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}