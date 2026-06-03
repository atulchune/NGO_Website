"use client";

import { useEffect, useState } from "react";
import UniversalPlayer from "../ui/UniversalPlayer";

export default function AudioNewsBar() {
  const [latestNews, setLatestNews] = useState<any[]>([]);
  const [audioUrls, setAudioUrls] = useState({
    liveKirtan: "",
    dailyMukhwak: "",
    mukhwakKatha: ""
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

        // Fetch Marquee News
        const newsRes = await fetch(`${API_URL}/api/v1/content/latest-updates`);
        if (newsRes.ok) {
          const newsData = await newsRes.json();
          if (newsData.success && newsData.data) {
            setLatestNews(newsData.data);
          }
        }

        // Fetch Audios (Resolving concurrently)
        const [kirtanRes, mukhwakRes, kathaRes] = await Promise.all([
          fetch(`${API_URL}/api/v1/media?category=LIVE_KIRTAN&limit=1`),
          fetch(`${API_URL}/api/v1/media?category=DAILY_MUKHWAK&limit=1`),
          fetch(`${API_URL}/api/v1/media?category=MUKHWAK_KATHA&limit=1`)
        ]);

        const getUrl = async (res: Response) => {
          if (!res.ok) return "";
          const data = await res.json();
          if (data.success && data.data && data.data.length > 0) {
            return data.data[0].url || data.data[0].fileUrl || "";
          }
          return "";
        };

        setAudioUrls({
          liveKirtan: await getUrl(kirtanRes),
          dailyMukhwak: await getUrl(mukhwakRes),
          mukhwakKatha: await getUrl(kathaRes)
        });

      } catch (error) {
        console.error("Failed to fetch audio/news data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#0b1633] flex flex-col z-40 relative">
      {/* Top row - Audio Players */}
      <div className="bg-[#0f245c] border-b border-white/10 py-3">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">

          <div className="flex items-center gap-4 w-full lg:w-1/3">
            <span className="text-white text-xs font-bold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">Live Kirtan</span>
            <div className="flex-1">
              <UniversalPlayer
                id="live-kirtan-daily"
                url={audioUrls.liveKirtan}
                type="audio"
                className="h-10 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-1/3">
            <span className="text-white text-xs font-bold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">Daily Mukhwak</span>
            <div className="flex-1">
              <UniversalPlayer
                id="daily-mukhwak"
                url={audioUrls.dailyMukhwak}
                type="audio"
                className="h-10 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-1/3">
            <span className="text-white text-xs font-bold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">Mukhwak Katha</span>
            <div className="flex-1">
              <UniversalPlayer
                id="mukhwak-katha"
                url={audioUrls.mukhwakKatha}
                type="audio"
                className="h-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row - Latest Updates Marquee */}
      <div className="bg-[#0b1633] border-b border-white/20">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-2 flex items-center overflow-hidden">
          <div className="bg-white text-primary text-xs font-bold uppercase px-3 py-1 shadow-sm z-20 shrink-0 mr-4">
            LATEST UPDATES
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div className="whitespace-nowrap animate-marquee text-sm font-medium inline-block">
              {latestNews.length > 0 ? latestNews.map((news) => (
                <a href={news.link || `/news#${news.id}`} key={news.id} className="inline-flex items-center hover:opacity-80 transition-opacity mr-8">
                  <span className="text-accent mr-3">✦</span>
                  <span className="text-white">{news.title}</span>
                </a>
              )) : (
                <span className="text-white/70 text-xs inline-block">Loading latest updates...</span>
              )}

              {/* Duplicate for seamless scrolling */}
              {/* {latestNews.length > 0 && latestNews.map((news) => (
                <a href={news.link || `/news#${news.id}`} key={`dup-${news.id}`} className="inline-flex items-center hover:opacity-80 transition-opacity mr-8">
                  <span className="text-accent mr-3">✦</span>
                  <span className="text-white">{news.title}</span>
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
