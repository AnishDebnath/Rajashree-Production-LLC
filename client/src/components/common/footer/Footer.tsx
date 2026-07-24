import React from 'react';
import { Play, ArrowUpRight, MapPin, Mail, Phone, Clock, Instagram, Youtube, Video, Linkedin } from 'lucide-react';

interface FooterProps {
    onCollaborateClick: () => void;
    onShowMessage: (msg: string) => void;
    setActiveTab: (tab: string) => void;
    transparentBg?: boolean;
}

export default function Footer({ onCollaborateClick, onShowMessage, setActiveTab, transparentBg = false }: FooterProps) {
    const handleLinkClick = (name: string) => {
        const key = name.toLowerCase();
        if (key === 'projects' || key === 'home') {
            setActiveTab('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (key === 'albums') {
            setActiveTab('albums');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (key === 'artists') {
            setActiveTab('artists');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (key === 'about') {
            setActiveTab('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (key === 'services') {
            setActiveTab('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (key === 'contact') {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            onShowMessage(`The "${name}" page is currently under production. Our creative team is polishing the edit!`);
        }
    };

    const socialLinks = [
        {
            name: 'Instagram',
            url: '#instagram',
            stats: '245K',
            icon: Instagram,
            color: 'text-pink-500',
            hoverColor: 'group-hover:text-pink-400',
            borderColor: 'hover:border-pink-500/40',
            badgeColor: 'text-pink-400 bg-pink-500/10',
            glow: 'hover:shadow-pink-500/5',
        },
        {
            name: 'YouTube',
            url: '#youtube',
            stats: '1.2M',
            icon: Youtube,
            color: 'text-red-600',
            hoverColor: 'group-hover:text-red-500',
            borderColor: 'hover:border-red-600/40',
            badgeColor: 'text-red-400 bg-red-600/10',
            glow: 'hover:shadow-red-600/5',
        },
        {
            name: 'Vimeo',
            url: '#vimeo',
            stats: '48K',
            icon: Video,
            color: 'text-sky-400',
            hoverColor: 'group-hover:text-sky-300',
            borderColor: 'hover:border-sky-400/40',
            badgeColor: 'text-sky-400 bg-sky-400/10',
            glow: 'hover:shadow-sky-400/5',
        },
        {
            name: 'LinkedIn',
            url: '#linkedin',
            stats: '15K',
            icon: Linkedin,
            color: 'text-blue-600',
            hoverColor: 'group-hover:text-blue-500',
            borderColor: 'hover:border-blue-600/40',
            badgeColor: 'text-blue-400 bg-blue-600/10',
            glow: 'hover:shadow-blue-600/5',
        },
    ];

    return (
        <footer
            className={`relative z-30 w-full select-none text-neutral-400 font-sans ${transparentBg ? 'bg-transparent pt-4 pb-10' : 'bg-[#0b0b0c] pt-24 pb-10 shadow-[0_-15px_40px_rgba(0,0,0,0.8)]'
                }`}
        >
            {/* Seamless Melt/Blend Transition with the CTA's Fixed Background at the top */}
            {!transparentBg && (
                <div className="absolute left-0 right-0 h-64 pointer-events-none z-10 overflow-hidden" style={{ top: '-224px' }}>
                    <div
                        className="w-full h-full absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(to top, #0b0b0c 0%, #0b0b0c 20%, rgba(11, 11, 12, 0.85) 30%, rgba(11, 11, 12, 0) 100%)',
                        }}
                    />
                    <div
                        className="w-full h-48 absolute bottom-8 backdrop-blur-xs"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                        }}
                    />
                    <div
                        className="w-full h-32 absolute bottom-8 backdrop-blur-md"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                        }}
                    />
                </div>
            )}

            <div className="max-w-6xl mx-auto px-6 relative z-20">
                {/* Dark Box Style Footer Card */}
                <div className="bg-[#0f0f11]/90 backdrop-blur-md rounded-3xl sm:rounded-4xl p-8 sm:p-10 md:p-14 text-neutral-400 shadow-[0_32px_80px_rgba(0,0,0,0.6)] border border-white/5 flex flex-col gap-12 relative z-10">
                    {/* Top Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                        {/* Brand column */}
                        <div className="md:col-span-6 flex flex-col gap-6 text-left">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-accent-red shadow-lg shadow-accent-red/20">
                                    <Play className="w-4.5 h-4.5 text-white fill-white ml-0.5" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="font-display font-extrabold tracking-tight text-white text-base leading-none">
                                        StoryStream
                                    </span>
                                    <span className="font-mono text-[8px] tracking-[0.3em] text-accent-red font-bold uppercase leading-none mt-1">
                                        STUDIOS
                                    </span>
                                </div>
                            </div>

                            <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                                We are a premium cinematic production house dedicated to shaping unforgettable visual experiences.
                                Collaborating globally to direct, produce, and edit legacy content.
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
                                </span>
                                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-bold">
                                    STUDIO STATUS: LIVE IN PRODUCTION
                                </span>
                            </div>
                        </div>

                        {/* Links columns */}
                        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 md:pl-8">
                            {/* Directory */}
                            <div className="flex flex-col gap-4 text-left">
                                <h4 className="font-mono text-[10px] tracking-widest text-white font-bold uppercase">Directory</h4>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        { name: 'HOME', label: 'Home' },
                                        { name: 'PROJECTS', label: 'Our Works' },
                                        { name: 'ALBUMS', label: 'Photo Albums' },
                                        { name: 'ARTISTS', label: 'Our Artists' },
                                        { name: 'ABOUT', label: 'About Us' },
                                        { name: 'SERVICES', label: 'Our Services' },
                                        { name: 'CONTACT', label: 'Get in Touch' },
                                    ].map((link) => (
                                        <li key={link.name}>
                                            <button
                                                onClick={() => handleLinkClick(link.name)}
                                                className="group flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-all text-left text-neutral-400 hover:text-white cursor-pointer"
                                            >
                                                <span>{link.label}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent-red" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Connect */}
                            <div className="flex flex-col gap-4 text-left">
                                <h4 className="font-mono text-[10px] tracking-widest text-white font-bold uppercase">Connect</h4>
                                <div className="flex flex-col gap-3.5 text-xs text-neutral-400 font-semibold leading-relaxed">
                                    <div className="flex items-start gap-2.5">
                                        <MapPin className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                                        <span>123 Artistic Lane, NY, USA</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Mail className="w-4 h-4 text-accent-red shrink-0" />
                                        <a href="mailto:contact@storystream.com" className="hover:text-white transition-colors">
                                            contact@storystream.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Phone className="w-4 h-4 text-accent-red shrink-0" />
                                        <a href="tel:+14165551234" className="hover:text-white transition-colors">
                                            (416) 555-1234
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-2.5 text-neutral-500">
                                        <Clock className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                                        <span>
                                            Mon - Fri
                                            <br />
                                            9:00 AM - 5:00 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Channels */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 pt-8 border-t border-white/5">
                        {socialLinks.map((soc) => {
                            const IconComp = soc.icon;
                            return (
                                <a
                                    key={soc.name}
                                    href={soc.url}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onShowMessage(`Connecting to StoryStream's official ${soc.name} page...`);
                                    }}
                                    className={`group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0d0d0f] hover:bg-[#131316] border border-white/5 ${soc.borderColor} transition-all duration-300 shadow-md ${soc.glow} text-[11px] sm:text-xs`}
                                >
                                    <IconComp
                                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${soc.color} transition-all duration-300 group-hover:scale-110`}
                                    />
                                    <span className="font-bold text-neutral-300 group-hover:text-white transition-colors">{soc.name}</span>
                                    <span className="text-neutral-700 select-none text-[9px] sm:text-xs">•</span>
                                    <span
                                        className={`font-mono text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full ${soc.badgeColor} transition-all duration-300`}
                                    >
                                        {soc.stats}
                                    </span>
                                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-[11px] font-semibold text-neutral-500">
                        <div>© {new Date().getFullYear()} StoryStream Studios. All Right Reserved</div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onShowMessage(`Viewing our ${item}...`);
                                    }}
                                    className="hover:text-neutral-300 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
