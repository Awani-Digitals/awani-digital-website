import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { easeInOut, motion } from "motion/react";
import { useRouter } from "next/navigation";
interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  published_at: string;
  category: string;
  image_url: string;
  read_time: string;
  slug: string;
  openDeleteConfirm?: (id: string, title: string) => void;
}

const BlogCardVariants = {
  initial: {
    opacity: 0,
    x: 80,
    y: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: easeInOut,
      duration: 0.4,
    },
  },
};

export function BlogCard({
  id,
  title,
  excerpt,
  author,
  published_at,
  category,
  image_url,
  read_time,
  slug,
  openDeleteConfirm,
}: BlogCardProps) {
  const router = useRouter();

  return (
    <motion.div
      variants={BlogCardVariants}
      viewport={{ once: true }}
      className="group bg-[#faf5ff] rounded-lg overflow-hidden shadow-lg max-w-[350px] w-full relative"
    >
      <Link
        href={`/blogs/${slug}`}
        className="group bg-[#faf5ff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 max-w-[350px] w-full "
      >
        <div className="relative overflow-hidden h-56">
          <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#f73444] text-[#faf5ff] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {category}
            </span>
          </div>

          {/* {openDeleteConfirm !== undefined && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                openDeleteConfirm(id, title);
              }}
              className="bg-primary rounded-md px-3 py-1.5 absolute top-4 right-4 text-white "
            >
              <Trash2 size={20} />
            </button>
          )} */}
        </div>

        <div className="p-6">
          <h3 className="text-[#20201e] text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#f73444] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#20201e] flex items-center justify-center text-[#faf5ff] font-semibold text-sm">
                {author.charAt(0)}
              </div>
              <div>
                <p className="text-[#20201e] text-sm font-medium">{author}</p>
                <p className="text-gray-500 text-xs">{published_at}</p>
              </div>
            </div>

            <span className="text-gray-500 text-xs">{read_time}</span>
          </div>
        </div>
      </Link>

      {openDeleteConfirm !== undefined && (
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/blogs/edit-blog/${id}`);
            }}
            className="bg-primary rounded-md px-3 py-1.5  text-white z-20"
          >
            <Pencil size={15} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openDeleteConfirm(id, title);
            }}
            className="bg-primary rounded-md px-3 py-1.5  text-white z-20"
          >
            <Trash2 size={15} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
