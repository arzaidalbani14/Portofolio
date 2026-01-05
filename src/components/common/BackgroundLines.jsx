import React from 'react';

const BackgroundLines = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-full overflow-hidden z-0 bg-[#020510]">
            {/* Base Gradient for depth (Static & Lightweight) */}
            <div className="absolute inset-0 bg-gradient-radial from-[#0a0f1e] via-[#050510] to-[#020510]" />

            {/* Static Expanded Glow (Base) */}
            <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] min-w-[800px] min-h-[800px] bg-[#d8cd37]/10 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

            {/* Right Glow: Deep Blue (Contrast) */}
            <div className="absolute bottom-[10%] -right-[10%] w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] bg-[#074799]/10 rounded-full blur-[100px] pointer-events-none opacity-60" />

            {/* Overlay Pattern - Static High Quality Noise for Dithering */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default BackgroundLines;
