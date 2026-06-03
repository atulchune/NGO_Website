"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { ArrowLeft, Save, Calendar, User, Eye, ImageIcon, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type ContentType = "news" | "blog" | "event" | "project";

export default function ViewContentPage() {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    type: "news" as ContentType,
    title: "",
    content: "",
    image: "/images/gallery/3.jpg",
    category: "Health",
    author: "Admin User",
    eventDate: "",
    eventTime: "",
    venue: "",
    status: "Active",
  });

  const [isUploading, setIsUploading] = useState(false);

  const searchParams = useSearchParams();
  const itemType = searchParams.get('type') || 'NEWS';
  const id = params.id as string;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      if (!id) return;
      try {
        setIsLoading(true);
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const isEvent = itemType === 'EVENT';
        const endpoint = isEvent ? `/api/events/${id}` : `/api/v1/content/${id}`;
        
        const res = await fetch(`${API_URL}${endpoint}`);
        const data = await res.json();
        
        if (data.success && data.data) {
          const item = data.data;
          if (isEvent) {
             const dateObj = new Date(item.eventDate || new Date());
             const date = dateObj.toISOString().split('T')[0];
             const time = dateObj.toTimeString().split(' ')[0].slice(0,5);
             
             setFormData(prev => ({
               ...prev,
               type: 'event',
               title: item.title || '',
               content: item.description || '',
               eventDate: date,
               eventTime: time,
               venue: item.location || '',
               image: item.imageUrl || '',
               status: item.isPublished ? 'Active' : 'Completed'
             }));
          } else {
             setFormData(prev => ({
               ...prev,
               type: item.type?.toLowerCase() as ContentType || 'news',
               title: item.title || '',
               content: item.content || '',
               image: item.image || '',
               category: item.category || 'Health',
               author: item.author || 'Admin User',
               status: item.status || 'Active'
             }));
          }
        }
      } catch (error) {
        toast({ title: "Error", description: "Failed to load item data.", variant: "destructive" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchItem();
  }, [id, itemType]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/content">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-primary">View Content</h1>
            <p className="text-sm text-muted-foreground">Read-only view of this content item.</p>
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
                  <Label>Content Type</Label>
                  <Select 
                    value={formData.type} 
                    disabled
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="news">Latest News</SelectItem>
                      <SelectItem value="blog">Featured Blog</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.type === "news" && (
                  <div className="flex flex-col gap-2">
                    <Label>Category</Label>
                    <Select 
                      value={formData.category} 
                      disabled
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Health">Health</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Community">Community</SelectItem>
                        <SelectItem value="Environment">Environment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formData.type === "project" && (
                  <div className="flex flex-col gap-2">
                    <Label>Project Status</Label>
                    <Select 
                      value={formData.status} 
                      disabled
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

              </div>

              <div className="flex flex-col gap-2">
                <Label>Title</Label>
                <Input 
                  value={formData.title} 
                  disabled
                  placeholder="Enter title here"
                />
              </div>

              {formData.type === "blog" && (
                <div className="flex flex-col gap-2">
                  <Label>Author</Label>
                  <Input 
                    value={formData.author} 
                    disabled
                    placeholder="Enter author name"
                  />
                </div>
              )}

              {formData.type === "event" && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label>Date</Label>
                    <Input 
                      type="date"
                      value={formData.eventDate} 
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Time</Label>
                    <Input 
                      type="time"
                      value={formData.eventTime} 
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Venue</Label>
                    <Input 
                      value={formData.venue} 
                      disabled
                      placeholder="Event location"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label>{formData.type === 'blog' ? 'Excerpt' : 'Content / Description'}</Label>
                <textarea 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.content} 
                  disabled
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Featured Image</Label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50/50">
                  {formData.image ? (
                    <div className="flex flex-col items-center gap-2">
                      <img src={formData.image} alt="Featured" className="h-20 object-cover rounded shadow-sm" />
                    </div>
                  ) : (
                    <p className="text-sm font-medium text-slate-500">No image provided</p>
                  )}
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
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 min-h-[500px] flex items-center justify-center">
            
            {/* Conditional Mock Component Renders */}
            {formData.type === "news" && (
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group flex flex-col w-full max-w-[400px]">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-2 left-2 z-10 bg-orange-100 text-orange-800 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {formData.category}
                  </div>
                  <img src={formData.image} alt={formData.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors mb-2">
                    {formData.title || "News Title"}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{formData.content}</p>
                  <span className="text-xs text-gray-500 flex items-center gap-1 mt-auto">
                    <Calendar className="w-3 h-3" /> Just now
                  </span>
                </div>
              </div>
            )}

            {formData.type === "blog" && (
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group w-full max-w-[400px]">
                <div className="h-48 overflow-hidden">
                  <img src={formData.image} alt={formData.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Just now</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {formData.author || "Author"}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {formData.title || "Blog Title"}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {formData.content}
                  </p>
                </div>
              </div>
            )}

            {formData.type === "event" && (
              <div className="bg-white rounded-xl overflow-hidden shadow-md group w-full max-w-[400px]">
                <div className="relative h-48 overflow-hidden">
                  <img src={formData.image} alt={formData.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl shadow-lg text-center overflow-hidden w-14 z-20">
                    <div className="bg-orange-500 text-white text-[10px] font-bold py-1.5 uppercase tracking-widest">
                      {formData.eventDate ? new Date(formData.eventDate).toLocaleString('default', { month: 'short' }) : 'MON'}
                    </div>
                    <div className="py-2 text-xl font-black text-slate-800">
                      {formData.eventDate ? new Date(formData.eventDate).getDate() : '00'}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {formData.title || "Event Title"}
                  </h3>
                  <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                       {formData.eventTime || "Time"}
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                       {formData.venue || "Venue"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {formData.type === "project" && (
              <div className="bg-white rounded-2xl overflow-hidden shadow-md group w-full max-w-[400px]">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {formData.status}
                  </div>
                  <img src={formData.image} alt={formData.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {formData.title || "Project Title"}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {formData.content}
                  </p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </div>
            )}

          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            This is an interactive preview of how the component will render in the user-facing web application.
          </p>
        </div>

      </div>
    </div>
  );
}
