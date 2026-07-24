export function BrandLogo({ name, symbol }: { name: string; symbol: string }) {
    switch (name) {
        case 'Apex Corp':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3L2 21h20L12 3z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 10l-5 9h10l-5-9z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
                </svg>
            );
        case 'HorizonTech':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" strokeLinecap="round" />
                    <path d="M12 3v18" strokeLinecap="round" strokeDasharray="3 3" />
                </svg>
            );
        case 'CineWave':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4" strokeLinecap="round" />
                </svg>
            );
        case 'Eastern Winds':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 10h15a3 3 0 0 0 0-6H14M2 14h18a3 3 0 0 1 0 6H16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'Vanguard Media':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 11l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'Zenith Group':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 5h14L5 19h14" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
                </svg>
            );
        case 'Nova Digital':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
                </svg>
            );
        case 'PixelForge':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="4" width="6" height="6" rx="1" />
                    <rect x="14" y="4" width="6" height="6" rx="1" />
                    <rect x="4" y="14" width="6" height="6" rx="1" />
                    <rect x="14" y="14" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.3" />
                </svg>
            );
        case 'Stellar Agency':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4-6.3-4.6-6.3 4.6 2.4-7.4-6.3-4.6h7.8L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'Summit Studios':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 20l6-12 5 9 3-6 4 9H3z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                </svg>
            );
        case 'Aether Films':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-30 12 12)" />
                    <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(30 12 12)" />
                </svg>
            );
        case 'Eclipse Media':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9" fill="currentColor" fillOpacity="0.25" />
                </svg>
            );
        case 'Chronos Co':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M12 12l5 5M12 12l-4-7" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" />
                </svg>
            );
        case 'Ignite Brand':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'Aura Interactive':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            );
        case 'Optima Vision':
            return (
                <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.2" />
                </svg>
            );
        default:
            return (
                <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-mono text-[10px] font-bold">
                    {symbol}
                </div>
            );
    }
}
