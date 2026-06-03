"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { ArrowLeft, Save, UploadCloud, PlayCircle, Mic, Radio, Link as LinkIcon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type MediaType = "video" | "audio";
type SourceType = "upload" | "youtube" | "live";

export default function ViewMediaPage() {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    type: "video" as MediaType,
    title: "",
    sourceType: "youtube" as SourceType,
    url: "",
    isLive: false,
    duration: "14:20",
  });

  const id = params.id as string;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      if (!id) return;
      try {
        setIsLoading(true);
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        
        const res = await fetch(`${API_URL}/api/v1/media/${id}`);
        const data = await res.json();
        
        if (data.success && data.data) {
          const item = data.data;
          setFormData({
            type: item.type?.toLowerCase() as MediaType || 'video',
            title: item.title || '',
            sourceType: item.sourceType?.toLowerCase() as SourceType || 'youtube',
            url: item.url || item.fileUrl || '',
            isLive: item.isLive || false,
            duration: item.duration || "14:20"
          });
        }
      } catch (error) {
        toast({ title: "Error", description: "Failed to load media data.", variant: "destructive" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchItem();
  }, [id]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/media">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-primary">View Media</h1>
            <p className="text-sm text-muted-foreground">Read-only view of this media item.</p>
          </div>
        </div>
        <div className="flex gap-2">
          {/* No Save Buttons */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side - Form */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Card>
            <CardContent className="pt-6 flex flex-col gap-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Media Type</Label>
                  <Select 
                    value={formData.type} 
                    disabled
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Source</Label>
                  <Select 
                    value={formData.sourceType} 
                    disabled
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upload">Local Upload</SelectItem>
                      <SelectItem value="youtube">YouTube Link</SelectItem>
                      <SelectItem value="live">Live Stream URL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Title</Label>
                <Input 
                  value={formData.title} 
                  disabled
                  placeholder="Enter media title"
                />
              </div>

              {formData.sourceType === "upload" ? (
                <div className="flex flex-col gap-2">
                  <Label>Media File</Label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50/50">
                    {formData.url ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                          <Save className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium text-slate-700">File uploaded</p>
                      </div>
                    ) : (
                      <p className="text-sm font-medium text-slate-500">No file provided</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Label>{formData.sourceType === 'live' ? 'Stream URL' : 'YouTube URL'}</Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      className="pl-9"
                      value={formData.url} 
                      disabled
                      placeholder="https://"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-lg mt-2">
                <input 
                  type="checkbox" 
                  id="isLive"
                  className="w-4 h-4 rounded text-primary border-gray-300 opacity-50 cursor-not-allowed"
                  checked={formData.isLive}
                  disabled
                />
                <div className="flex flex-col">
                  <Label htmlFor="isLive" className="cursor-pointer font-bold text-slate-800 flex items-center gap-2">
                    Mark as Live <Radio className="w-3 h-3 text-red-500" />
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">If checked, this will appear in the Live Kirtan section on the homepage.</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Right Side - Live Preview */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Eye className="w-4 h-4" />
            <h3 className="font-semibold text-sm uppercase tracking-wider">Live Web Preview</h3>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
            {/* Background blur effect for vibe */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 w-full max-w-[400px]">
              
              {formData.isLive && (
                <div className="mb-4 flex items-center gap-2 bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit mx-auto backdrop-blur">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  Live Now
                </div>
              )}

              {formData.type === "video" ? (
                <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl overflow-hidden group">
                  <div className="aspect-video bg-black relative flex items-center justify-center group-hover:bg-black/80 transition-colors">
                    {/* Fake Video Player */}
                    <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center z-10 cursor-pointer group-hover:bg-white/30 transition-colors">
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-medium text-center line-clamp-1">{formData.title || "Untitled Video"}</h4>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-medium text-center mb-2 line-clamp-1">{formData.title || "Untitled Audio Track"}</h4>
                  
                  {/* Fake Audio Player UI */}
                  <div className="w-full mt-4 flex items-center gap-3">
                    <PlayCircle className="w-6 h-6 text-slate-300 cursor-pointer hover:text-white transition-colors shrink-0" />
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0 font-mono">0:00 / 14:20</span>
                  </div>
                </div>
              )}

            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Preview of the media player as it will appear in the Web interface.
          </p>
        </div>

      </div>
    </div>
  );
}
