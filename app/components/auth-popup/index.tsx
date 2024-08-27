"use client";

import { useAuth } from "@/context";

import { useMediaQuery } from "react-responsive";

export default function AuthPopup() {
  const { isAuthPopupOpen, closeAuthPopup } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const redirectToFacebook = () => {
    const redirectUri = encodeURIComponent(window.location.href);
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/facebook?redirect_uri=${redirectUri}`;
  };

  const redirectToGoogle = () => {
    const redirectUri = encodeURIComponent(window.location.href);
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google?redirect_uri=${redirectUri}`;
  };

  const redirectToInstagram = () => {
    const redirectUri = encodeURIComponent(window.location.href);
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/instagram?redirect_uri=${redirectUri}`;
  };

  if (!isAuthPopupOpen) return null;

  return isMobile ? (
    <div className="fixed inset-0 z-[2000] h-full w-full items-center justify-center bg-[#141414]">
      <div className="relative flex h-full w-full flex-col justify-center">
        <button
          id="auth-close"
          type="button"
          onClick={closeAuthPopup}
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
              <h3 className="font-secondary text-heading5 font-bold leading-10">
                لتأكيد المشاركة يرجى تسجيل الدخول عبر
              </h3>
              <h3 className="font-secondary text-heading5 font-bold leading-10">
                Facebook أو Instagram أو Google
              </h3>
            </div>

            <div className="flex flex-col justify-center space-y-3">
              <button
                className="text-heading4 flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 leading-7 text-white"
                onClick={redirectToFacebook}
              >
                <img src="/images/ico-facebook-auth.svg" className="ms-4 w-9" />
                <span className="pt-2 text-body-medium">
                  تسجيل الدخول عبر <span className="ms-1">Facebook</span>
                </span>
              </button>

              <button
                id="loginWithGoogle"
                className="flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white"
                onClick={redirectToGoogle}
              >
                <img src="/images/ico-google-auth.svg" className="ms-4 w-9" />
                <span className="pt-2 text-body-medium">
                  تسجيل الدخول عبر <span className="ms-1">Google</span>
                </span>
              </button>

              <button
                className="flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white"
                onClick={redirectToInstagram}
              >
                <img
                  src="/images/ico-instagram-auth.svg"
                  className="ms-4 w-9"
                />
                <span className="pt-2 text-body-medium">
                  تسجيل الدخول عبر <span className="ms-1">Instagram</span>
                </span>
              </button>
            </div>
          </div>

          <hr className="my-14 border-b border-solid border-[#C2AC6E] border-opacity-35 text-[#C2AC6E]" />

          <button
            id="auth-cancel"
            onClick={closeAuthPopup}
            className="mx-auto flex min-w-52 items-center justify-center rounded-[10px] border border-[#C2AC6E] px-6 py-4 font-secondary text-heading4 leading-7 text-white"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed inset-0 z-[2000] h-screen items-center justify-center bg-black/50">
      <div className="relative mx-auto w-1/2">
        <img src="/images/bg-popup.svg" className="max-w-full" />

        <button
          id="auth-close"
          type="button"
          onClick={closeAuthPopup}
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
              <h3 className="font-secondary text-heading3 font-bold leading-10">
                لتأكيد المشاركة يرجى تسجيل الدخول عبر
              </h3>
              <h3 className="font-secondary text-heading3 font-bold leading-10">
                Facebook أو Instagram أو Google
              </h3>
            </div>

            <div className="space-y-7">
              <button
                className="flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white"
                onClick={redirectToFacebook}
              >
                <img src="/images/ico-facebook-auth.svg" className="ms-4 w-9" />
                <span className="pt-2">
                  تسجيل الدخول عبر <span className="ms-1">Facebook</span>
                </span>
              </button>

              <button
                id="loginWithGoogle"
                className="flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white"
                onClick={redirectToGoogle}
              >
                <img src="/images/ico-google-auth.svg" className="ms-4 w-9" />
                <span className="pt-2">
                  تسجيل الدخول عبر <span className="ms-1">Google</span>
                </span>
              </button>

              <button
                className="flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white"
                onClick={redirectToInstagram}
              >
                <img
                  src="/images/ico-instagram-auth.svg"
                  className="ms-4 w-9"
                />
                <span className="pt-2">
                  تسجيل الدخول عبر <span className="ms-1">Instagram</span>
                </span>
              </button>
            </div>
          </div>

          <hr className="my-14 border-b border-solid border-[#C2AC6E] border-opacity-35 text-[#C2AC6E]" />

          <button
            id="auth-cancel"
            onClick={closeAuthPopup}
            className="mx-auto flex min-w-52 items-center justify-center rounded-[10px] border border-[#C2AC6E] px-6 py-4 font-secondary text-heading4 leading-7 text-white"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
