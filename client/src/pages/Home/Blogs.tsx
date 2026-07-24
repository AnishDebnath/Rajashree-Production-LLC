import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import type { BlogPost } from '../../data/blogs';

interface BlogsSectionProps {
    blogsData: BlogPost[];
    onSelectBlog?: (blog: BlogPost) => void;
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
}

export default function BlogsSection({ blogsData, onSelectBlog, setActiveTab, onShowMessage }: BlogsSectionProps) {
    return (
        <section className="relative py-24 md:py-32 bg-transparent z-20">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-4">
                    <div className="space-y-3">
                        <h2 className="font-sans font-bold text-3xl sm:text-4.5xl text-white tracking-tight leading-[1.1]">
                            Dive Into Our Blogs
                        </h2>
                        <div className="h-0.5 w-16 bg-gold" />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            setActiveTab('blogs');
                            window.scrollTo({ top: 0, behavior: 'instant' });
                            onShowMessage("Showing entire filmmaking blog catalog!", "info");
                        }}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-white text-black font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300 shrink-0"
                    >
                        <span>Read All Blogs</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogsData.slice(0, 3).map((blog) => (
                        <div key={blog.id} className="w-full flex" id={`blog-card-${blog.id}`}>
                            <ThreeDCardEffect
                                onClick={() => {
                                    if (onSelectBlog) {
                                        onSelectBlog(blog);
                                    } else {
                                        setActiveTab('blogs');
                                        window.scrollTo({ top: 0, behavior: 'instant' });
                                    }
                                    onShowMessage(`Opening blog: "${blog.title}"`, "info");
                                }}
                                className="group cursor-pointer select-none bg-transparent flex flex-col w-full"
                                tiltMaxAngle={10}
                            >
                                <div
                                    className="relative aspect-16/10.5 rounded-3xl overflow-hidden bg-neutral-950 shadow-lg"
                                    style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        referrerPolicy="no-referrer"
                                        className="object-cover w-full h-full scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out filter brightness-[0.93] group-hover:brightness-100"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col justify-start" style={{ transform: 'translateZ(15px)' }}>
                                    <span className="font-sans text-[11px] font-bold tracking-[0.14em] text-gold uppercase block leading-none transition-colors duration-300">
                                        {blog.category}
                                    </span>
                                    <h3 className="font-sans font-semibold text-lg sm:text-[19px] text-white group-hover:text-neutral-100 transition-colors tracking-tight mt-3 mb-2.5 h-14 line-clamp-2 overflow-hidden text-ellipsis leading-snug">
                                        {blog.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mt-1">
                                        <span>{blog.author}</span>
                                        <span className="text-neutral-800">â€¢</span>
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </ThreeDCardEffect>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
