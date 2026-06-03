// apps/admin/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Mock token for development since Auth isn't fully set up yet
const MOCK_AUTH_TOKEN = "admin_mock_token_123";

// Helper fetch function for admin (no caching, includes auth)
export async function fetchAdminAPI<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers = new Headers(options?.headers);
    if (!headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${MOCK_AUTH_TOKEN}`);
    }
    if (!headers.has('Content-Type') && options?.method && options.method !== 'GET') {
      headers.set('Content-Type', 'application/json');
    }

    const res = await fetch(url, {
      cache: 'no-store', // Always fetch fresh data for admin
      ...options,
      headers,
    });
    
    if (!res.ok) {
      console.error(`Admin API Failed to fetch ${url}: ${res.statusText}`);
      return null;
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Admin API Error fetching ${endpoint}:`, error);
    return null;
  }
}

// Reuse the same interfaces as web
export interface ContentItem {
  id: string;
  type: string;
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
  type: string;
  title: string;
  sourceType: string;
  url: string;
  isLive: boolean;
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
