import socialNetworks from "@/constants/social-networks";
import React from "react";

export default function Header() {
  return (
    <header id="header" className="relative hidden w-full lg:block">
      <div className="bg-[#00000099] py-2">
        <div className="container">
          <div className="flex w-full items-center justify-between">
            <div className="relative flex w-full items-center justify-between md:w-auto md:justify-normal md:gap-7">
              <img src="/images/logo-saf.svg" />
              <p className="hidden text-heading3 lg:mt-4 lg:block lg:text-gold">
                #تحدي_الخبازٍين_الهواة
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <p className="hidden pl-5 lg:block lg:text-heading5 lg:text-gold">
                تابعونا
              </p>
              <div className="flex items-center gap-4">
                {socialNetworks?.map?.(({ icon, title, url }, index) => (
                  <React.Fragment key={title}>
                    <a
                      href={url}
                      target="_blank"
                      className="bg-red-100 flex h-5 w-5 items-center justify-center rounded-full md:h-7 md:w-7"
                    >
                      <img src={icon} alt={title} />
                    </a>
                    {index !== socialNetworks?.length - 1 && (
                      <img src="/images/icones-separator.svg" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-2 z-[60] -translate-x-1/2">
        <span className="relative before:absolute before:h-60 before:w-full before:rounded-full before:bg-gold before:opacity-20 before:blur-3xl" />
        <img
          src="/images/logo-challenge.svg"
          alt="Logo Challenge"
          className="h-16 md:h-48"
        />
      </div>

      <div className="hidden w-full gap-80 lg:flex">
        <span className="relative w-full border border-l-[520px] border-solid border-[#edd3a1] border-l-transparent"></span>
        <span className="relative w-full border border-r-[520px] border-solid border-[#edd3a1] border-r-transparent"></span>
      </div>
    </header>
  );
}
