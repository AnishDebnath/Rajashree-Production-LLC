import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    onCollaborateClick: () => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string) => void;
}

export default function Navbar({ onCollaborateClick, activeTab, setActiveTab, onShowMessage }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: 'home' },
        { name: 'Projects', path: 'projects' },
        { name: 'Albums', path: 'albums' },
        { name: 'Artists', path: 'artists' },
        { name: 'About', path: 'about' },
        { name: 'Services', path: 'services' },
        { name: 'News', path: 'blogs' },
    ];

    const handleNavClick = (item: typeof navItems[0]) => {
        if (
            item.path === 'home' ||
            item.path === 'projects' ||
            item.path === 'albums' ||
            item.path === 'artists' ||
            item.path === 'about' ||
            item.path === 'services' ||
            item.path === 'blogs' ||
            item.path === 'contact'
        ) {
            setActiveTab(item.path);
        } else {
            onShowMessage(`The "${item.name}" page design is coming soon! For now, explore our beautiful cinematic Project Portfolio.`);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300"
            >
                <div
                    className={`w-full rounded-full transition-all duration-300 relative ${isScrolled
                        ? 'bg-surface-dark/80 backdrop-blur-xl py-2.5 px-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
                        : 'bg-surface-dark/35 backdrop-blur-md py-3.5 px-7'
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Desktop - Logo + Nav + CTA */}
                        <div className="hidden md:flex items-center justify-between w-full">
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center gap-2.5 cursor-pointer group shrink-0"
                                onClick={() => setActiveTab('home')}
                            >
                                <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-accent-red shadow-md shadow-accent-red/20 transition-transform duration-300 group-hover:scale-105">
                                    <span className="font-display font-black text-white text-sm">R</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display font-bold tracking-tight text-white text-sm leading-none group-hover:text-gold transition-colors duration-300">
                                        Rajashree
                                    </span>
                                    <span className="font-sans text-[7px] tracking-[0.25em] text-gold font-bold uppercase mt-0.5 leading-none">
                                        PRODUCTION LLP
                                    </span>
                                </div>
                            </motion.div>

                            {/* Desktop Nav Items */}
                            <nav className="flex items-center gap-6">
                                {navItems.map((item, index) => {
                                    const isActive = item.path === activeTab;
                                    return (
                                        <motion.button
                                            key={item.path}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                            onClick={() => handleNavClick(item)}
                                            className={`relative font-sans text-[11px] font-bold tracking-wider uppercase transition-colors duration-200 py-1 ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                                                }`}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-red rounded-full"
                                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </nav>

                            {/* "Let's Talk" Button */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center shrink-0"
                            >
                                <button
                                    onClick={onCollaborateClick}
                                    className="group relative inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_15px_rgba(0,0,0,0.4)] cursor-pointer"
                                >
                                    Let's Talk
                                    <span className="text-xs font-sans transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                </button>
                            </motion.div>
                        </div>

                        {/* Mobile logo + toggle */}
                        <div className="md:hidden flex items-center gap-2.5">
                            <div className="flex items-center gap-2 cursor-pointer group shrink-0" onClick={() => setActiveTab('home')}>
                                <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-accent-red shadow-md shadow-accent-red/20">
                                    <span className="font-display font-black text-white text-[11px]">R</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display font-bold tracking-tight text-white text-xs leading-none group-hover:text-gold transition-colors">Rajashree</span>
                                    <span className="font-sans text-[6px] tracking-[0.2em] text-gold font-bold uppercase leading-none mt-px">PRODUCTION LLP</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-1.5 text-neutral-400 hover:text-white focus:outline-none rounded-full hover:bg-white/5 transition-colors"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Slim gold scroll progress bar at the bottom side of the navbar */}
                    <div className="absolute bottom-0 left-8 right-8 h-[2.5px] bg-white/5 overflow-hidden rounded-full">
                        <motion.div
                            className="h-full bg-gold origin-left rounded-full"
                            style={{ scaleX }}
                        />
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-40 bg-surface-dark/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.8)] md:hidden"
                    >
                        <nav className="flex flex-col gap-3">
                            {navItems.map((item, index) => {
                                const isActive = item.path === activeTab;
                                return (
                                    <motion.button
                                        key={item.path}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.03 }}
                                        onClick={() => handleNavClick(item)}
                                        className={`font-sans text-xs font-bold tracking-widest uppercase text-left py-2.5 px-4 rounded-xl transition-colors ${isActive ? 'text-accent-red bg-white/5' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.name}
                                    </motion.button>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
