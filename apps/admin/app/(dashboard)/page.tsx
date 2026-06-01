import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Users, FileText, Heart, Calendar, CheckCircle, Clock, Video, Mic } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Overview</h1>
        <p className="text-muted-foreground mt-2">
          Enterprise Content & Community Management Platform.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-t-4 border-t-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Members
            </CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1,245</div>
            <p className="text-xs text-muted-foreground">
              +12 this month
            </p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
            <Heart className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">₹12.5L</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Published Content
            </CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">342</div>
            <p className="text-xs text-muted-foreground">
              News, Blogs, & Pages
            </p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Media Assets
            </CardTitle>
            <Video className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">89</div>
            <p className="text-xs text-muted-foreground">
              Videos & Audios
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-primary">Recent Activity Feed</CardTitle>
            <CardDescription>
              Latest actions performed across the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { icon: FileText, title: "New Blog Published", desc: "The Importance of Seva", time: "2 hours ago", color: "text-blue-500" },
                { icon: Users, title: "Membership Approved", desc: "Rahul Patel upgraded to Life Member", time: "5 hours ago", color: "text-secondary" },
                { icon: Video, title: "Video Uploaded", desc: "Sunday Kirtan Diwan", time: "1 day ago", color: "text-purple-500" },
                { icon: Heart, title: "Donation Received", desc: "₹50,000 for Medical Camp", time: "1 day ago", color: "text-accent" },
                { icon: Mic, title: "Audio Uploaded", desc: "Daily Hukamnama Translation", time: "2 days ago", color: "text-orange-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className={`p-2 bg-slate-100 rounded-full mr-4 ${item.color}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{item.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-primary">Pending Approvals</CardTitle>
            <CardDescription>
              Items requiring admin attention.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { icon: Clock, title: "Membership Application", desc: "Priya Singh - Life Member", type: "Member" },
                { icon: FileText, title: "Draft Review", desc: "Vaisakhi 2026 Preparations", type: "Content" },
                { icon: Clock, title: "Membership Application", desc: "Amit Sharma - Annual Member", type: "Member" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <item.icon className="w-8 h-8 text-amber-500 mr-3 p-1.5 bg-amber-50 rounded-md" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-secondary hover:underline">Review</button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
