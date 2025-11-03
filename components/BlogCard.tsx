interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export function BlogCard({
  title,
  excerpt,
  author,
  date,
  category,
  imageUrl,
  readTime,
}: BlogCardProps) {
  return (
    <article className="group bg-[#faf5ff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 max-w-[350px] w-full">
      <div className="relative overflow-hidden h-56">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#f73444] text-[#faf5ff] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {category}
          </span>
        </div>
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
              <p className="text-gray-500 text-xs">{date}</p>
            </div>
          </div>

          <span className="text-gray-500 text-xs">{readTime}</span>
        </div>
      </div>
    </article>
  );
}
