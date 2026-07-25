import React from 'react';

export const Watermark: React.FC = () => {
    return (
        <a
            href="https://www.mindtrixmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 text-center flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
        >
            <img src="/watermark.png" alt="Mindtrix Media" className="w-28 object-contain" />
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">
                Growing Together with <span className="text-gold">♥</span> Mindtrix Media
            </p>
        </a>
    );
};
