export default function LiquidBackground() {
    return (
        <div className="fixed inset-0 -z-0 bg-[#050505] overflow-hidden">
            {/* Mancha Púrpura - Más intensa */}
            <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/30 blur-[130px] animate-pulse" />

            {/* Mancha Azul - Movimiento más lento */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-blue-600/20 blur-[150px] animate-bounce"
                 style={{ animationDuration: '20s' }} />

            {/* El "grano" de la imagen para ese look JetBrains */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    )
}