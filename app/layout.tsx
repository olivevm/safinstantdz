import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import localFont from "next/font/local";
import QueryProvider from "@/providers/query-client-provider";
import { setBaseURL } from "@/utils";
import PageWrapper from "./wrapper";

import "./globals.css";
import { AuthProvider } from "@/context";
import AuthPopup from "./components/auth-popup";
import { Suspense } from "react";

setBaseURL("/");

const tajawal = Tajawal({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-primary",
});

const hacenElTaroute = localFont({
  src: "../assets/fonts/HacenEltaroute.woff2",
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Saf-instant تحدي الخبازين الهواة لـ",
  description:
    "احصل على فرصة الفوز بشيك قيمته 30 مليون سنتيم جزائري، ورشة في تقنيات الخبر من طرف خبراء ساف انستانت، مما سيفتح لك فرصًا لا تفوت في عالم الطبخ.",
  robots: {
    follow: true,
    index: true,
  },
  keywords: "saf instant",
  openGraph: {
    type: "website",
    url: "https://tahadi-elhouwat.safinstantdz.com",
    title: "شارك وحاول الفوز بجوائز قيمة مع ساف انستانت",
    description:
      "احصل على فرصة الفوز بشيك قيمته 30 مليون سنتيم جزائري، ورشة في تقنيات الخبر من طرف خبراء ساف انستانت، مما سيفتح لك فرصًا لا تفوت في عالم الطبخ.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${hacenElTaroute.variable}`}
    >
      <body className="bg-black">
        <QueryProvider>
          <AuthProvider>
            <PageWrapper>
              {children}
              <Suspense>
                <AuthPopup />
              </Suspense>
            </PageWrapper>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
