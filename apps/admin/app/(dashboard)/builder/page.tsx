import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GripVertical, Eye, Settings, Power } from "lucide-react"

const homepageSections = [
  { id: 1, name: "Hero Banner Slider", status: "Active", configurable: true },
  { id: 2, name: "Quick Access Icons", status: "Active", configurable: true },
  { id: 3, name: "Latest News Feed", status: "Active", configurable: true },
  { id: 4, name: "Featured Videos Grid", status: "Active", configurable: true },
  { id: 5, name: "Live Kirtan & Hukamnama", status: "Inactive", configurable: false },
  { id: 6, name: "Upcoming Events Ticker", status: "Active", configurable: true },
  { id: 7, name: "Membership CTA", status: "Active", configurable: false },
]

export default function BuilderPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Homepage Builder</h1>
          <p className="text-muted-foreground mt-2">
            Drag and drop sections to rearrange your public homepage layout.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Eye className="w-4 h-4" /> Preview
          </Button>
          <Button className="flex items-center gap-2">
            Publish Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {homepageSections.map((section, index) => (
            <Card key={section.id} className={`border ${section.status === 'Active' ? 'border-l-4 border-l-secondary' : 'opacity-60 border-l-4 border-l-slate-300'}`}>
              <div className="flex items-center p-4">
                <div className="cursor-move text-slate-400 hover:text-slate-600 mr-4">
                  <GripVertical className="w-6 h-6" />
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg text-primary">{section.name}</h3>
                    <p className="text-sm text-muted-foreground">Position {index + 1}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${section.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'}`}>
                      {section.status}
                    </span>
                    <Button variant="ghost" size="icon" className={section.status === 'Active' ? 'text-green-600' : 'text-slate-400'}>
                      <Power className="w-5 h-5" />
                    </Button>
                    {section.configurable && (
                      <Button variant="ghost" size="icon" className="text-slate-600">
                        <Settings className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Theme Settings</CardTitle>
              <CardDescription>Global homepage configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Hero Transition Speed</label>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option>Fast (3s)</option>
                  <option selected>Normal (5s)</option>
                  <option>Slow (8s)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Default View Mode</label>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option selected>High Density (Enterprise)</option>
                  <option>Spacious (Minimal)</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
