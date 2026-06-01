"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  LayoutDashboard,
  Users,
  FileText,
  Image as ImageIcon,
  Heart,
  Calendar,
  Settings,
  Megaphone,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Content Center",
      url: "/content",
      icon: FileText,
    },
    {
      title: "Homepage Builder",
      url: "/builder",
      icon: Frame,
    },
    {
      title: "Media",
      url: "/media",
      icon: ImageIcon,
    },
    {
      title: "Membership",
      url: "/membership",
      icon: Users,
    },
    {
      title: "Donations",
      url: "#",
      icon: Heart,
      items: [
        {
          title: "Campaigns",
          url: "/donations/campaigns",
        },
        {
          title: "Transactions",
          url: "/donations/transactions",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">VPCF Admin</span>
                  <span className="truncate text-xs">Enterprise CMS</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.items ? (
                <>
                  <SidebarMenuButton asChild>
                    <span className="font-medium text-muted-foreground">{item.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </>
              ) : (
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">admin@vpcf.org</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
