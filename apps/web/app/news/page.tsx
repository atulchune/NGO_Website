import { Calendar } from "lucide-react";
import Link from "next/link";
import { Pagination } from "@/components/ui/Pagination";
import { getContent } from "@/lib/api";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  
  // Fetch real data from the backend
  const newsData = await getContent('NEWS', itemsPerPage, currentPage);
  
  // Fallback to empty states if API fails
  const currentNews = newsData?.data || [];
  const totalPages = newsData?.totalPages || 1;

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-12 border-b-2 border-primary pb-4">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1 block">Media Center</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Latest News & Updates</h1>
          <p className="text-gray-600 mt-4 max-w-2xl text-lg">Stay informed about our latest initiatives, community programs, and the impact we are making together.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  {news.category || "General"}
                </div>
                <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-secondary" /> {new Date(news.createdAt).toLocaleDateString()}
                </span>
                <h2 className="font-bold text-primary text-xl group-hover:text-secondary transition-colors mb-4 line-clamp-2">
                  <Link href={`/news/${news.id}`}>{news.title}</Link>
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
                  {news.content}
                </p>
                <Link href={`/news/${news.id}`} className="text-secondary font-bold text-sm hover:text-primary transition-colors flex items-center gap-1 mt-auto">
                  Read Full Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/news" />}
      </div>
    </main>
  );
}
