import { BlogPost } from '../../data/blogs';
import ThreeDCardEffect from '../ThreeDCardEffect';

interface BlogCardProps {
    blog: BlogPost;
    onClick: () => void;
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
    return (
        <ThreeDCardEffect
            onClick={onClick}
            className="group cursor-pointer select-none bg-transparent flex flex-col w-full"
            tiltMaxAngle={10}
        >
            {/* Image Container with Smooth Concentric Rounded Corners and translateZ */}
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

            {/* Snug Meta details below the image with translateZ */}
            <div
                className="mt-4 flex flex-col justify-start"
                style={{ transform: 'translateZ(15px)' }}
            >
                <span className="font-sans text-[11px] font-bold tracking-[0.14em] text-gold uppercase block leading-none transition-colors duration-300">
                    {blog.category}
                </span>

                <h3 className="font-sans font-semibold text-lg sm:text-[19px] text-white group-hover:text-neutral-100 transition-colors tracking-tight mt-3 mb-2.5 leading-snug">
                    {blog.title}
                </h3>

                {/* Author & Date Metadata */}
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mt-1">
                    <span>{blog.author}</span>
                    <span className="text-neutral-800">&bull;</span>
                    <span>{blog.date}</span>
                </div>
            </div>
        </ThreeDCardEffect>
    );
}