"use client";

import React, { createContext, useContext, useState } from 'react';

type MediaContextType = {
  currentlyPlayingId: string | null;
  setCurrentlyPlayingId: (id: string | null) => void;
};

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: React.ReactNode }) {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);

  return (
    <MediaContext.Provider value={{ currentlyPlayingId, setCurrentlyPlayingId }}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
}
