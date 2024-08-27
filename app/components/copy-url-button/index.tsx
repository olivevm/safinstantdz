"use client";

import { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function CopyUrlButton({ id }: { id: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 500 });

  const handleCopy = useCallback(async () => {
    const shareableUrl = window?.location?.host + "/participation/" + id;
    try {
      await navigator.clipboard.writeText(shareableUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy the URL", error);
    }
  }, [id]);

  return isMobile ? (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className="flex flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-solid border-[#707070] bg-white/5 text-wrap"
      >
        <div className="flex flex-col items-start gap-4 p-4">
          <span className="text-heading5 text-[#C2AC6E]">رابط المشاركة</span>
          <span className="text-heading5 text-[#CECECE] text-right">
            {" "}
            {window?.location?.host + "/participation/" + id}
          </span>
        </div>
        <div className="relative h-full w-full items-center justify-center border-r border-solid border-[#707070] bg-[#C2AC6E]/35 p-4 text-nowrap">
          <span className="relative leading-8 text-heading5 text-white">
            نسخ رابط
          </span>
        </div>
      </button>
      {isCopied && (
        <div className="absolute right-0 top-full mt-2 p-2 bg-gray-800 text-white text-sm rounded">
          <div className="flex gap-2 items-center">
            <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center p-1">
              <img src="/images/checkmark.svg" />
            </div>
            <span className="text-body-smaller">تم نسخ الرابط إلى الحافظة</span>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className="flex h-24 flex-row items-center justify-between overflow-hidden rounded-2xl border border-solid border-[#707070] bg-white/5 text-nowrap"
      >
        <div className="flex flex-col items-start gap-4 p-4">
          <span className="text-heading5 text-[#C2AC6E]">رابط المشاركة</span>
          <span className="text-heading5 text-[#CECECE] text-right">
            {" "}
            {window?.location?.host + "/participation/" + id}
          </span>
        </div>
        <div className="relative h-full items-center justify-center border-r border-solid border-[#707070] bg-[#C2AC6E]/35 p-4 text-nowrap">
          <span className="relative top-7 text-heading5 text-white">
            نسخ رابط
          </span>
        </div>
      </button>
      {isCopied && (
        <div className="absolute right-0 top-full mt-2 p-2 bg-gray-800 text-white text-sm rounded">
          <div className="flex gap-2 items-center">
            <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center p-1">
              <img src="/images/checkmark.svg" />
            </div>
            <span className="text-body-smaller">تم نسخ الرابط إلى الحافظة</span>
          </div>
        </div>
      )}
    </div>
  );
}
