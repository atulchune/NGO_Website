import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Link
        href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : "#"}
        className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
            : "border-gray-300 text-primary hover:bg-gray-100"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <Link
              key={page}
              href={`${baseUrl}?page=${page}`}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <Link
        href={currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : "#"}
        className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
            : "border-gray-300 text-primary hover:bg-gray-100"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
