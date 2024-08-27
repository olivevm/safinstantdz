"use client";

import { ReactNode, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Loading from "../components/loading";
import { twMerge } from "tailwind-merge";

interface WrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: WrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  const pageClassName = twMerge(
    "page",
    isLoading ? "opacity-0" : "opacity-100"
  );

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={pageClassName}>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </div>
    </>
  );
}
