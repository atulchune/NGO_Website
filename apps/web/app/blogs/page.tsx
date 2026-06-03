import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { Pagination } from "@/components/ui/Pagination";
import { getContent } from "@/lib/api";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 8;
  
  // Fetch real data from the backend
  const blogData = await getContent('BLOG', itemsPerPage, currentPage);
  
  // Fallback to empty states if API fails
  const currentBlogs = blogData?.data || [];
  const totalPages = blogData?.totalPages || 1;

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Insights & Reflections</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Blogs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Read inspiring stories, spiritual reflections, and insightful articles written by our community members and leaders.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row border border-gray-100"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-3/5">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-full"><Calendar className="w-3.5 h-3.5 text-secondary" /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-full"><User className="w-3.5 h-3.5 text-primary" /> {blog.author || "Guest"}</span>
                </div>
                <h2 className="font-bold text-primary text-2xl group-hover:text-secondary transition-colors mb-3 line-clamp-2">
                  <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {blog.content}
                </p>
                <Link href={`/blogs/${blog.id}`} className="text-primary font-bold text-sm hover:text-secondary transition-colors">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/blogs" />}
      </div>
    </main>
  );
}
