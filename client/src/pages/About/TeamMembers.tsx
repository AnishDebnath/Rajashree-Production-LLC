import { motion } from 'motion/react';
import { Facebook, Linkedin } from 'lucide-react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import type { TeamMember } from '../../data/about/team';

interface TeamMembersSectionProps {
    teamMembers: TeamMember[];
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
}

export default function TeamMembersSection({ teamMembers, onShowMessage }: TeamMembersSectionProps) {
    return (
        <section className="relative py-16 z-10 bg-transparent" id="fantastic-team">
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-section-heading">
                        Peek Behind the Curtain: Meet Our Fantastic Team!
                    </h2>
                    <div className="w-16 h-[1.5px] bg-gold mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {teamMembers.slice(0, 3).map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex justify-center"
                        >
                            <ThreeDCardEffect
                                tiltMaxAngle={8}
                                className="group cursor-pointer select-none relative w-full max-w-xs sm:max-w-none aspect-3/4"
                            >
                                {/* Background image covering the full card */}
                                <div
                                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold/30 shadow-xl bg-neutral-950 transition-all duration-300"
                                    style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.9] group-hover:brightness-100"
                                        loading="lazy"
                                    />

                                    {/* Clean Dark Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent z-10 pointer-events-none"
                                        style={{ transform: 'translateZ(5px)' }}
                                    />
                                </div>

                                {/* Sleek Top-Right Floating Social Media Buttons */}
                                <div
                                    className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
                                    style={{ transform: 'translateZ(30px)' }}
                                >
                                    <a
                                        href={member.facebook}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onShowMessage(`Connecting with ${member.name} on Facebook...`, 'info');
                                        }}
                                        className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300 shadow-md hover:scale-110"
                                        title="Facebook"
                                    >
                                        <Facebook className="w-3.5 h-3.5" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onShowMessage(`Connecting with ${member.name} on LinkedIn...`, 'info');
                                        }}
                                        className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300 shadow-md hover:scale-110"
                                        title="LinkedIn"
                                    >
                                        <Linkedin className="w-3.5 h-3.5" />
                                    </a>
                                </div>

                                {/* Clean text overlay */}
                                <div
                                    className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end pointer-events-none text-left"
                                    style={{ transform: 'translateZ(25px)' }}
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-medium mb-1">
                                        {member.role}
                                    </span>
                                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-gold transition-colors duration-200">
                                        {member.name}
                                    </h3>
                                </div>
                            </ThreeDCardEffect>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
