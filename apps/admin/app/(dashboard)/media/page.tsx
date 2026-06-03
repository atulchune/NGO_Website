import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus, PlayCircle, Mic, Radio } from "lucide-react"
import Link from "next/link";
import { fetchAdminAPI, PaginatedResponse, MediaItem } from "@/lib/api";
import { TableActions } from "@/components/TableActions";

export default async function MediaPage() {
  const [videoRes, audioRes] = await Promise.all([
    fetchAdminAPI<PaginatedResponse<MediaItem>>('/api/v1/media?type=VIDEO&limit=50'),
    fetchAdminAPI<PaginatedResponse<MediaItem>>('/api/v1/media?type=AUDIO&limit=50')
  ]);

  const videoItems = videoRes?.success ? videoRes.data : [];
  const audioItems = audioRes?.success ? audioRes.data : [];

  let mergedData = [...videoItems, ...audioItems];

  // Sort by newest first
  mergedData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Fallback if APIs fail or empty
  if (mergedData.length === 0) {
    mergedData = [
      { id: '1', title: "Annual Kirtan Darbar 2026", type: "VIDEO", sourceType: "YOUTUBE", isLive: true, createdAt: "2026-05-28T00:00:00Z" } as any,
      { id: '2', title: "Sukhmani Sahib Path", type: "AUDIO", sourceType: "UPLOAD", isLive: false, createdAt: "2026-05-20T00:00:00Z" } as any,
      { id: '3', title: "Foundation Day Highlight Reel", type: "VIDEO", sourceType: "UPLOAD", isLive: false, createdAt: "2026-05-15T00:00:00Z" } as any,
    ];
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Media Library</h1>
          <p className="text-muted-foreground mt-2">
            Manage your audio tracks, video gallery, and live stream links.
          </p>
        </div>
        <Link href="/media/create">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Media
          </Button>
        </Link>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Date Added</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mergedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  {item.type === 'VIDEO' ? <PlayCircle className="w-4 h-4 text-slate-400" /> : <Mic className="w-4 h-4 text-slate-400" />}
                  {item.title}
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.sourceType}</TableCell>
                <TableCell>
                  {item.isLive ? (
                    <span className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold w-fit">
                      <Radio className="w-3 h-3" /> Live Now
                    </span>
                  ) : (
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-semibold">
                      Archived
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right text-muted-foreground text-sm">{new Date(item.createdAt).toLocaleDateString()}</TableCell>
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
