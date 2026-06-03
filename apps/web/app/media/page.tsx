import { Play, Mic } from "lucide-react";
import { Pagination } from "@/components/ui/Pagination";
import { getMedia } from "@/lib/api";
import UniversalPlayer from "@/components/ui/UniversalPlayer";

export default async function MediaPage({
  searchParams,
}: {
  searchParams: { page?: string, tab?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const activeTab = searchParams.tab || 'videos'; // 'videos' or 'audios'
  const itemsPerPage = 12;

  // Fetch real data from the backend
  const mediaType = activeTab === 'videos' ? 'VIDEO' : 'AUDIO';
  const mediaData = await getMedia(mediaType, undefined, itemsPerPage, currentPage);
  
  // Fallback to empty states if API fails
  const displayItems = mediaData?.data || [];
  const totalPages = mediaData?.totalPages || 1;

  // Helper to extract YouTube ID for thumbnail
  const getYouTubeThumbnail = (url: string) => {
    try {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
      if (match && match[1]) {
        return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
      }
    } catch (e) {}
    return "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600";
  };

  return (
    <main className="min-h-screen bg-white pt-8 pb-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">

        <div className="text-center mb-12 border-b border-gray-100 pb-12">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Media Library</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Discover Videos & Audios</h1>

          <div className="inline-flex bg-gray-100 p-1.5 rounded-full">
            <a
              href="?tab=videos"
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-colors ${activeTab === 'videos' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-primary'}`}
            >
              <Play className="w-4 h-4" /> Videos
            </a>
            <a
              href="?tab=audios"
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-colors ${activeTab === 'audios' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-primary'}`}
            >
              <Mic className="w-4 h-4" /> Audios
            </a>
          </div>
        </div>

        {activeTab === 'videos' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {displayItems.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-video mb-4 bg-gray-100 flex items-center justify-center">
                  <UniversalPlayer
                    id={`media-video-${video.id}`}
                    url={video.url || ""}
                    type="video"
                    light={video.sourceType === 'YOUTUBE' || video.sourceType === 'LIVE_STREAM' ? getYouTubeThumbnail(video.url) : false}
                    className="w-full h-full object-cover"
                  />
                  {video.isLive && (
                    <div className="absolute top-3 left-3 z-20 text-xs font-bold bg-red-600 text-white px-2 py-1 rounded shadow-sm animate-pulse pointer-events-none">
                      LIVE
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 pointer-events-none">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur text-primary rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-primary text-lg line-clamp-2 group-hover:text-secondary transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayItems.map((audio: any) => (
              <div
                key={audio.id}
                className="bg-gray-50 p-4 rounded-2xl flex items-center gap-5 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-200"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm bg-primary/10 flex items-center justify-center">
                  <Mic className="w-8 h-8 text-primary" />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-primary text-base truncate group-hover:text-secondary transition-colors">{audio.title}</h4>
                  <p className="text-sm text-gray-500 truncate mt-1">Audio Track</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/media" />}
      </div>
    </main>
  );
}
