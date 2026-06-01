import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"

const contentData = [
  { id: 1, title: "Free Medical Camp Organized Successfully", type: "News", status: "Published", date: "May 28, 2026", author: "Admin" },
  { id: 2, title: "The Importance of Seva in Modern Times", type: "Blog", status: "Draft", date: "May 20, 2026", author: "Gurpreet Singh" },
  { id: 3, title: "Annual Education Scholarship Distribution", type: "News", status: "Published", date: "May 15, 2026", author: "Admin" },
  { id: 4, title: "Daily Hukamnama Translation Guide", type: "Page", status: "Published", date: "May 10, 2026", author: "Editor" },
  { id: 5, title: "Vaisakhi 2026 Preparations", type: "Announcement", status: "Archived", date: "Apr 01, 2026", author: "Admin" },
]

export default function ContentPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Content Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage all your blogs, news, announcements, and custom pages here.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Content
        </Button>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {item.type}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Published' ? 'bg-green-100 text-green-800' :
                    item.status === 'Draft' ? 'bg-amber-100 text-amber-800' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell className="text-right text-muted-foreground text-sm">{item.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
