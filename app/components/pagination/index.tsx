"use client";

/* eslint-disable react/no-array-index-key */

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange?: (page: string) => void;
  visiblePages?: number;
}

export default function Pagination({
  totalPages,
  currentPage,
  onChange,
  visiblePages = 5,
}: PaginationProps) {
  const router = useRouter();
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const generatePages = () => {
      const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      const newPages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
      setPages(newPages);
    };

    generatePages();
  }, [currentPage, totalPages, visiblePages]);

  const goToPage = useCallback(
    (page: number) => {
      router.push(`?page=${page}`, {
        scroll: false,
      });
      onChange?.(page.toString()); // Ensure that this triggers any additional logic needed
    },
    [onChange, router]
  );

  return (
    <section id="vote-pagination" className="mt-10 block">
      <div className="container mt-32">
        <div className="flex flex-col justify-center gap-5 lg:flex-row">
          <div className="flex items-center justify-center space-x-4 border-t border-[#C2AC6E] border-opacity-40 py-4 pt-10">
            <button
              type="button"
              className="ml-7 text-white disabled:text-[#A8A8A8]"
              onClick={() => goToPage(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
            >
              السابق
            </button>
            <div className="flex space-x-4">
              {pages.map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`rounded-full px-3 py-1 ${
                    currentPage === page
                      ? "h-10 w-10 rounded-xl border border-[#E6C588] bg-[#221F1F]"
                      : "text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="mr-7 text-white disabled:text-[#A8A8A8]"
              onClick={() =>
                goToPage(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
              disabled={currentPage === totalPages}
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
