"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Eye, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function TableActions({ itemType, itemId }: { itemType: string, itemId: string }) {
  const { toast } = useToast();
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const getEndpoint = () => {
    if (itemType === 'EVENT') return `/api/events/${itemId}`;
    if (['NEWS', 'BLOG', 'PROJECT'].includes(itemType)) return `/api/v1/content/${itemId}`;
    if (['VIDEO', 'AUDIO'].includes(itemType)) return `/api/v1/media/${itemId}`;
    return null;
  };

  const handleView = () => {
    if (['VIDEO', 'AUDIO'].includes(itemType)) {
      router.push(`/media/view/${itemId}?type=${itemType}`);
    } else {
      router.push(`/content/view/${itemId}?type=${itemType}`);
    }
  }

  const handleEdit = () => {
    if (['VIDEO', 'AUDIO'].includes(itemType)) {
      router.push(`/media/edit/${itemId}?type=${itemType}`);
    } else {
      router.push(`/content/edit/${itemId}?type=${itemType}`);
    }
  }

  const handleDelete = async () => {
    const endpoint = getEndpoint();
    if (!endpoint) return;

    if (!confirm(`Are you sure you want to permanently delete this ${itemType}?`)) return;

    setIsDeleting(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer admin_mock_token_123'
        }
      });

      if (!res.ok) throw new Error('Failed to delete item');

      toast({
        title: "Deleted Successfully",
        description: `The ${itemType} was permanently removed.`,
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Delete Failed",
        description: "An error occurred while deleting the item from the backend.",
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600" onClick={handleView} disabled={isDeleting}>
        <Eye className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600" onClick={handleEdit} disabled={isDeleting}>
        <Edit2 className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
      </Button>
    </div>
  )
}
