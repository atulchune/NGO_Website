import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { BadgeCheck, Download, MoreHorizontal, ShieldCheck } from "lucide-react"

const membersData = [
  { id: "MB-2026-001", name: "Rahul Patel", type: "Life Member", status: "Active", joined: "Jan 12, 2026", email: "rahul.p@example.com" },
  { id: "MB-2026-002", name: "Simran Kaur", type: "Annual Member", status: "Active", joined: "Feb 05, 2026", email: "simran.k@example.com" },
  { id: "MB-2026-003", name: "Amit Sharma", type: "Annual Member", status: "Expired", joined: "Mar 10, 2025", email: "amit.s@example.com" },
  { id: "MB-2026-004", name: "Priya Singh", type: "Life Member", status: "Pending Approval", joined: "May 29, 2026", email: "priya.s@example.com" },
]

export default function MembershipPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Membership Directory</h1>
          <p className="text-muted-foreground mt-2">
            Manage members, approve applications, and issue certificates.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
          <Button className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Review Applications
          </Button>
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Membership Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Joined Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {membersData.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-mono text-xs font-medium text-slate-500">{member.id}</TableCell>
                <TableCell className="font-medium text-slate-900">{member.name}</TableCell>
                <TableCell className="text-sm text-slate-600">{member.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    member.type === 'Life Member' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {member.type}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    member.status === 'Active' ? 'bg-green-100 text-green-800' :
                    member.status === 'Pending Approval' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {member.status}
                  </span>
                </TableCell>
                <TableCell className="text-right text-muted-foreground text-sm">{member.joined}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600" title="Issue Certificate">
                      <BadgeCheck className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600">
                      <MoreHorizontal className="w-4 h-4" />
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
