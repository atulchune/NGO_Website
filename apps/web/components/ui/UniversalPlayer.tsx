"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useMedia } from "@/context/MediaContext";

interface UniversalPlayerProps {
  id: string;
  url: string;
  type: "audio" | "video";
  title?: string;
  className?: string;
  light?: boolean | string;
  controls?: boolean;
}

export default function UniversalPlayer({ id, url, type, title, className, light = false, controls = true }: UniversalPlayerProps) {
  const { currentlyPlayingId, setCurrentlyPlayingId } = useMedia();
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  
  // Mounted check to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If another media starts playing globally, pause this one
  useEffect(() => {
    if (currentlyPlayingId !== id && playing) {
      setPlaying(false);
    }
  }, [currentlyPlayingId, id, playing]);

  const handlePlay = () => {
    setPlaying(true);
    setCurrentlyPlayingId(id);
  };

  const handlePause = () => {
    setPlaying(false);
    if (currentlyPlayingId === id) {
      setCurrentlyPlayingId(null);
    }
  };

  const isAudio = type === 'audio';

  if (!mounted) return <div className={`animate-pulse bg-gray-200 rounded ${isAudio ? 'h-[50px]' : 'aspect-video'} ${className || ''}`} />;

  // Pure HTML5 Audio Player for perfect native styling
  if (isAudio) {
    return (
      <div className={`universal-player-wrapper overflow-hidden bg-white shadow-sm flex items-center justify-center rounded-full ${className || ''}`}>
        <audio 
          ref={playerRef as any}
          src={url || ""} 
          controls={controls}
          className={`w-full h-full ${!url ? 'opacity-40 pointer-events-none' : ''}`}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
          controlsList="nodownload"
        />
      </div>
    );
  }

  const isYouTube = url && (url.includes('youtube.com') || url.includes('youtu.be'));
  const isUpload = url && (url.includes('.mp4') || url.includes('/uploads/'));

  const getYouTubeId = (videoUrl: string) => {
    try {
      const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
      return match ? match[1] : null;
    } catch (e) {
      return null;
    }
  };

  if (isYouTube) {
    const ytId = getYouTubeId(url);
    return (
      <div className={`universal-player-wrapper overflow-hidden rounded-md shadow-sm border border-slate-200 ${className || ''}`}>
        {ytId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${ytId}?rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            Invalid YouTube URL
          </div>
        )}
      </div>
    );
  }

  if (isUpload) {
    return (
      <div className={`universal-player-wrapper overflow-hidden rounded-md shadow-sm border border-slate-200 ${className || ''}`}>
        <video 
          ref={playerRef as any}
          src={url}
          controls={controls}
          className="w-full h-full object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
          controlsList="nodownload"
        />
      </div>
    );
  }

  // Fallback to ReactPlayer for anything else
  return (
    <div className={`universal-player-wrapper overflow-hidden rounded-md shadow-sm border border-slate-200 ${className || ''}`}>
      <ReactPlayer
        {...({
          ref: playerRef,
          url: url,
          playing: playing,
          controls: controls,
          light: false,
          width: "100%",
          height: "100%",
          onPlay: handlePlay,
          onPause: handlePause,
          onEnded: handlePause,
          onClickPreview: handlePlay,
        } as any)}
      />
    </div>
  );
}
