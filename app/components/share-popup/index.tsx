"use client";

import { useMediaQuery } from "react-responsive";
import CopyUrlButton from "../copy-url-button";
import ParticipationCard from "../participation-card";

export default function SharePopup({
  data,
  onClose,
  isOpen,
}: {
  data: any;
  isOpen: boolean;
  onClose?: () => void;
}) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  if (!isOpen) return null;

  return isMobile ? (
    <div className="fixed inset-0 z-[2000] h-full w-full items-center justify-center bg-[#141414]">
      <div className="relative flex flex-col justify-center w-full h-full">
        <button
          id="share-close"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#C2AC6E]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative container z-[2001] w-full bg-transparent text-white">
          <div className="mx-auto">
            <div className="mb-16 text-center">
              <h3 className="font-secondary text-[44px] font-bold leading-10 text-[#C2AC6E]">
                رابط المشاركة{" "}
              </h3>
            </div>

            <div className="mb-10">
              <ParticipationCard data={data} />
            </div>

            <div className="space-y-7 flex justify-center">
              <CopyUrlButton id={String(data?.id)} />
            </div>
          </div>

          <hr className="my-14 border-b border-solid border-[#C2AC6E] border-opacity-35 text-[#C2AC6E]" />

          <button
            id="auth-cancel"
            onClick={onClose}
            className="font-secondary text-heading4 mx-auto flex min-w-52 items-center justify-center rounded-[10px] border border-[#C2AC6E] px-6 py-4 leading-7 text-white"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed inset-0 z-[2000] h-screen items-center justify-center bg-black/50">
      <div className="relative mx-auto w-1/2">
        <img src="/images/bg-popup.svg" className="max-w-full" />

        <button
          id="share-close"
          type="button"
          onClick={onClose}
          className="absolute right-28 top-14 text-[#C2AC6E]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="absolute left-1/2 top-1/2 z-[2001] w-3/4 -translate-x-1/2 -translate-y-1/2 bg-transparent text-white">
          <div className="mx-auto w-max">
            <div className="mb-16 text-center">
              <h3 className="font-secondary text-heading2 font-bold leading-10 text-[#C2AC6E]">
                رابط المشاركة{" "}
              </h3>
            </div>

            <div className="mb-10">
              <ParticipationCard data={data} />
            </div>

            <div className="space-y-7">
              <CopyUrlButton id={String(data?.id)} />
            </div>
          </div>

          <hr className="my-14 border-b border-solid border-[#C2AC6E] border-opacity-35 text-[#C2AC6E]" />

          <button
            id="auth-cancel"
            onClick={onClose}
            className="mx-auto flex min-w-52 items-center justify-center rounded-[10px] border border-[#C2AC6E] px-6 py-4 font-secondary text-heading4 leading-7 text-white"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
