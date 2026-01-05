import React from 'react';

const BackgroundLines = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-full overflow-hidden z-0 bg-[#020510]">
            {/* Base Gradient for depth (Static & Lightweight) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020510] via-[#050510] to-[#0a0f1e]" />

            {/* Static Expanded Glow (Base) */}
            <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] min-w-[800px] min-h-[800px] bg-[#d8cd37]/10 rounded-full blur-[180px] pointer-events-none opacity-60 mix-blend-screen" />

            {/* Right Glow: Deep Blue (Contrast) */}
            <div className="absolute bottom-[10%] -right-[10%] w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] bg-[#074799]/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Overlay Pattern - Static */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 brightness-100 mix-blend-overlay"></div>
        </div>
    );
};

export default BackgroundLines;
