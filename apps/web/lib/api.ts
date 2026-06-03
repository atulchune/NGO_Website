const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ContentItem {
  id: string;
  type: 'NEWS' | 'BLOG' | 'EVENT' | 'PROJECT';
  title: string;
  content: string;
  image: string;
  category: string | null;
  author: string | null;
  status: string | null;
  eventDate: string | null;
  eventTime: string | null;
  venue: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface MediaItem {
  id: string;
  type: 'VIDEO' | 'AUDIO';
  title: string;
  sourceType: 'UPLOAD' | 'YOUTUBE' | 'LIVE_STREAM';
  url: string;
  isLive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HeroItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Helper fetch function with standard ISR caching
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Revalidate every hour
      ...options,
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch ${url}: ${res.statusText}`);
      return null;
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

export async function getHero(): Promise<HeroItem | null> {
  const response = await fetchAPI<any>('/api/hero');
  const data = response?.success ? response.data : response;
  if (data && Array.isArray(data)) {
    return data.find(h => h.isActive) || data[0] || null;
  }
  return null;
}

export async function getContent(type: 'NEWS' | 'BLOG' | 'PROJECT', limit: number = 10, page: number = 1): Promise<PaginatedResponse<ContentItem> | null> {
  const response = await fetchAPI<any>(`/api/v1/content?type=${type}&limit=${limit}&page=${page}`);
  return response?.success ? response : null;
}

export async function getEvents(): Promise<EventItem[]> {
  const response = await fetchAPI<any>('/api/events');
  const data = response?.success ? response.data : response;
  return data || [];
}

export async function getMedia(type: 'VIDEO' | 'AUDIO', isLive?: boolean, limit: number = 10, page: number = 1): Promise<PaginatedResponse<MediaItem> | null> {
  let endpoint = `/api/v1/media?type=${type}&limit=${limit}&page=${page}`;
  if (isLive !== undefined) endpoint += `&isLive=${isLive}`;
  const response = await fetchAPI<any>(endpoint);
  return response?.success ? response : null;
}
