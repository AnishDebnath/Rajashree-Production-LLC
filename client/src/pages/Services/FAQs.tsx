import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/services';

interface FAQsSectionProps {
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
}

export default function FAQsSection({ onShowMessage }: FAQsSectionProps) {
    const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

    return (
        <section
            className="relative z-20 bg-transparent pt-24 pb-8 px-6 md:px-12"
            id="services-faq-section"
        >
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="font-sans font-bold text-2xl text-white tracking-tight">
                        Frequently Asked Questions (FAQs)
                    </h2>
                    <div className="h-0.5 w-12 bg-gold mx-auto" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openFaqIdx === i;
                        const serialNum = String(i + 1).padStart(2, '0');
                        return (
                            <div
                                key={i}
                                className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? 'border-gold/30 bg-neutral-950/70'
                                    : 'border-white/5 hover:border-gold/20 bg-neutral-950/40 hover:bg-neutral-950/70'
                                    }`}
                            >
                                {/* Left sliding active indicator bar */}
                                <div
                                    className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gold transition-transform duration-300 origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0'
                                        }`}
                                />

                                <button
                                    onClick={() => {
                                        setOpenFaqIdx(isOpen ? null : i);
                                        onShowMessage(`Reading FAQ: "${faq.q}"`, 'info');
                                    }}
                                    className="w-full flex items-center justify-between text-left px-6 py-5 font-sans font-medium text-xs sm:text-sm text-neutral-200 hover:text-white transition-colors relative z-10 animate-none"
                                >
                                    <div className="flex items-center gap-x-5 transition-transform duration-300 group-hover:translate-x-1.5">
                                        <span className="font-mono text-xs text-gold/60 font-semibold tracking-wider">
                                            {serialNum}
                                        </span>
                                        <span className={`transition-colors duration-200 pr-4 ${isOpen ? 'text-gold font-semibold' : 'group-hover:text-gold'}`}>
                                            {faq.q}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-gold' : ''
                                            }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-1 border-t border-white/5">
                                                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-3xl border-l border-gold/20 pl-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
