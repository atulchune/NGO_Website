import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link";
import { fetchAdminAPI, PaginatedResponse, ContentItem } from "@/lib/api";
import { TableActions } from "@/components/TableActions";

export default async function ContentPage() {
  // Fetch from the backend
  const [newsRes, blogRes, projectRes, eventsRes] = await Promise.all([
    fetchAdminAPI<PaginatedResponse<ContentItem>>('/api/v1/content?type=NEWS&limit=50'),
    fetchAdminAPI<PaginatedResponse<ContentItem>>('/api/v1/content?type=BLOG&limit=50'),
    fetchAdminAPI<PaginatedResponse<ContentItem>>('/api/v1/content?type=PROJECT&limit=50'),
    fetchAdminAPI<any>('/api/events'),
  ]);

  const newsItems = newsRes?.success ? newsRes.data : [];
  const blogItems = blogRes?.success ? blogRes.data : [];
  const projectItems = projectRes?.success ? projectRes.data : [];
  const eventItems = eventsRes?.success ? eventsRes.data : [];

  // Normalize data for the table
  let mergedData: any[] = [];
  
  [...newsItems, ...blogItems, ...projectItems].forEach((item) => {
    mergedData.push({
      id: item.id,
      title: item.title,
      type: item.type,
      status: item.type === 'PROJECT' ? item.status : 'Published',
      date: item.createdAt,
      author: item.author || 'Admin'
    });
  });

  eventItems.forEach((event: any) => {
    mergedData.push({
      id: event.id,
      title: event.title,
      type: 'EVENT',
      status: event.isPublished ? 'Published' : 'Draft',
      date: event.createdAt,
      author: 'Admin'
    });
  });

  // Sort by newest first
  mergedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Fallback if APIs fail or empty
  if (mergedData.length === 0) {
    mergedData = [
      { id: '1', title: "Free Medical Camp Organized Successfully", type: "NEWS", status: "Published", date: "2026-05-28T00:00:00Z", author: "Admin" },
      { id: '2', title: "The Importance of Seva in Modern Times", type: "BLOG", status: "Draft", date: "2026-05-20T00:00:00Z", author: "Gurpreet Singh" },
    ];
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Content Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage all your blogs, news, announcements, and custom pages here.
          </p>
        </div>
        <Link href="/content/create">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Content
          </Button>
        </Link>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Date Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mergedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {item.type}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Published' || item.status === 'Active' ? 'bg-green-100 text-green-800' :
                    item.status === 'Draft' ? 'bg-amber-100 text-amber-800' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status || 'Archived'}
                  </span>
                </TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell className="text-right text-muted-foreground text-sm">{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <TableActions itemType={item.type} itemId={item.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
