import socialNetworks from "@/constants/social-networks";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="relative hidden w-full pt-40 lg:block">
        <div className="flex flex-col">
          <div>
            <div className="py-2">
              <div className="container">
                <div className="relative flex w-full items-center justify-between">
                  <div className="relative flex w-full items-center justify-between md:w-auto md:justify-normal md:gap-7">
                    <img src="/images/logo-saf.svg" />
                    <p className="hidden text-heading3 lg:mt-4 lg:block lg:text-gold">
                      #تحدي_الخبازٍين_الهواة
                    </p>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2">
                    <span className="relative before:absolute before:h-full before:w-full before:rounded-full before:bg-gold before:opacity-20 before:blur-3xl" />
                    <img
                      src="/images/logo-challenge.svg"
                      alt="Logo Challenge"
                      className="h-16 md:h-48"
                    />
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
                          {index !== socialNetworks.length - 1 && (
                            <img src="/images/icones-separator.svg" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-80">
            <span className="relative w-full border border-l-[520px] border-solid border-[#edd3a1] border-l-transparent"></span>
            <span className="relative w-full border border-r-[520px] border-solid border-[#edd3a1] border-r-transparent"></span>
          </div>

          <div className="container">
            <div className="flex items-center justify-between py-5">
              <div>
                <p>جميع الحقوق محفوظة © Saf-instant</p>
              </div>

              <div className="flex items-end gap-3">
                <p>مصمم و مطوّر من طرف</p>
                <a href="https://shiftin.co/">
                  <img src="/images/logo-shiftin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer
        id="footer-mobile"
        className="relative block w-full pt-10 lg:hidden"
      >
        <div className="flex flex-col">
          <div>
            <div className="py-2">
              <div className="container">
                <div className="relative flex w-full flex-col items-center justify-between gap-6">
                  <div className="relative">
                    <img
                      src="/images/logo-challenge.svg"
                      alt="Logo Challenge"
                      className="h-36"
                    />
                  </div>

                  <div className="relative">
                    <img src="/images/logo-saf.svg" className="h-14 w-auto" />
                  </div>

                  <div className="flex items-center gap-3">
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
                          {index !== socialNetworks.length - 1 && (
                            <img src="/images/icones-separator.svg" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="flex flex-col-reverse items-center justify-between gap-4 py-5 text-body-small">
              <div>
                <p>جميع الحقوق محفوظة © Saf-instant</p>
              </div>

              <div className="flex items-end gap-3">
                <p>مصمم و مطوّر من طرف</p>
                <a href="https://shiftin.co/">
                  <img
                    src="/images/logo-shiftin.svg"
                    className="max-w-[120px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
