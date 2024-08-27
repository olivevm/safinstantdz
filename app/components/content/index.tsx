"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useMediaQuery } from "react-responsive";

export default function Content({ hideCards }: { hideCards?: boolean }) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      {!hideCards && (
        <section className="relative mt-20 block">
          <>
            <img
              src="/images/powder-bread.svg"
              className="absolute -right-20 -top-72 -z-10 hidden h-[800px] w-auto lg:block"
            />
            <img
              src="/images/powder-bread-mobile.svg"
              className="absolute -right-44 -top-20 -z-10 block h-auto w-auto lg:hidden"
            />
          </>

          <div className="container">
            <div className="section-title-wrapper relative flex w-full flex-col items-center justify-center gap-5 pb-20 lg:pt-10">
              <span className="text-body-medium lg:text-heading4 text-white">
                مراحل المنافسة
              </span>
              <h2 className="text-heading4 text-gold lg:text-[48px] text-center">
                اكتشفوا جميع مراحل المنافسة
              </h2>
              <img src="/images/title-separator.svg" />
            </div>

            {isMobile ? (
              <div dir="rtl" id="usps-mobile">
                <div className="slider-container">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      disabledClass: "swiper-disabled",
                      nextEl: "#next",
                      prevEl: "#prev",
                    }}
                    pagination={{
                      el: ".usps-dots",
                    }}
                    dir="rtl"
                    className="block lg:flex lg:flex-nowrap lg:gap-7"
                  >
                    <SwiperSlide className="block">
                      <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                        <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] lg:rounded-[20px] lg:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)]">
                          <img src="/images/checkmark.svg" />
                        </span>

                        <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                          <img
                            src="/images/ico-card1-disabled.svg"
                            className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                          />
                          <img
                            src="/images/pack-saf.png"
                            className="absolute right-8 top-8 max-w-[90px]"
                          />
                          <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                          <h3 className="font-secondary text-heading3 text-disabled lg:-mt-2.5">
                            مشاركة الهواة
                          </h3>
                          <p className="text-body-big leading-7">
                            خلال هذه المرحلة، ستتاح لك الفرصة للمشاركة كخباز
                            هاوٍ من خلال إحدى إبداعاتك باستخدام خميرة
                            Saf-instant.
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-calendar.svg" />
                            <p className="font-secondary">
                              من{" "}
                              <span className="text-heading4 text-gold">
                                07/02
                              </span>{" "}
                              إلى{" "}
                              <span className="text-heading4 text-gold">
                                08/07
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-pin.svg" />
                            <p className="font-secondary">
                              على الموقع الإلكتروني
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="block">
                      <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                        <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 text-black group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] group-hover:text-black lg:rounded-[20px] lg:bg-[linear-gradient(90deg,#221F1F,#221F1F)] lg:text-gold">
                          2
                        </span>
                        <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                          <img
                            src="/images/ico-card2.svg"
                            className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                          />
                          <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                          <h3 className="font-secondary text-heading3 text-gold">
                            تصويت الجمهور
                          </h3>
                          <p className="text-body-big leading-7">
                            في المرحلة الثانية، سيكون لك دور في التصويت على أفضل
                            صورة لاختيار الستة المتأهلين الذين سيحظون الفرصة
                            للمشاركة في النهائي الكبير.
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-calendar.svg" />
                            <p className="font-secondary">
                              من{" "}
                              <span className="text-heading4 text-gold">
                                08/19
                              </span>{" "}
                              إلى{" "}
                              <span className="text-heading4 text-gold">
                                09/08
                              </span>{" "}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-pin.svg" />
                            <p className="font-secondary">
                              على الموقع الإلكتروني
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="block">
                      <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                        <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 text-black group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] group-hover:text-black lg:rounded-[20px] lg:bg-[linear-gradient(90deg,#221F1F,#221F1F)] lg:text-gold">
                          3
                        </span>
                        <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                          <img
                            src="/images/ico-card3.svg"
                            className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                          />
                          <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                          <h3 className="font-secondary text-heading3 text-gold">
                            ورشة المتأهلين
                          </h3>
                          <p className="text-body-big leading-7">
                            سيحظى المتأهلون الستة للنهائي بفرصة المشاركة في ورشة
                            مميزة في ال Baking center، حيث يشرف على التدريب
                            خبراء Saf-instant.
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-calendar.svg" />
                            <p className="font-secondary">
                              <span className="text-heading4 text-gold">
                                09/13{" "}
                              </span>{" "}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-pin.svg" />
                            <p className="font-secondary">
                              الجزائر العاصمة - Baking Center
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="block">
                      <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                        <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 text-black group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] group-hover:text-black lg:rounded-[20px] lg:bg-[linear-gradient(90deg,#221F1F,#221F1F)] lg:text-gold">
                          4
                        </span>
                        <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                          <img
                            src="/images/ico-card4.svg"
                            className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                          />
                          <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                          <h3 className="font-secondary text-heading3 text-gold">
                            النهائي الكبير
                          </h3>
                          <p className="text-body-big leading-7">
                            في المرحلة النهائية، سيتاح للمتأهلين فرصة المنافسة
                            في ال Baking Center برفقة صانع المحتوى الشيف، بهدف
                            إبهار الحكام والفوز بفرصة الحصول على شيك بقيمة 30
                            مليون سنتيم.
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-calendar.svg" />
                            <p className="font-secondary">
                              <span className="text-heading4 text-gold">
                                09/14
                              </span>{" "}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <img src="/images/ico-pin.svg" />
                            <p className="font-secondary">
                              الجزائر العاصمة - Baking Center
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            ) : (
              <div
                dir="rtl"
                id="usps"
                className="block lg:flex lg:flex-nowrap lg:gap-7"
              >
                <div>
                  <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                    <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] lg:rounded-[20px] lg:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)]">
                      <img src="/images/checkmark.svg" />
                    </span>

                    <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                      <img
                        src="/images/ico-card1-disabled.svg"
                        className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                      />
                      <img
                        src="/images/pack-saf.png"
                        className="absolute right-8 top-8 max-w-[90px]"
                      />
                      <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                      <h3 className="font-secondary text-heading3 text-disabled lg:-mt-2.5">
                        مشاركة الهواة
                      </h3>
                      <p className="text-body-big leading-7">
                        خلال هذه المرحلة، ستتاح لك الفرصة للمشاركة كخباز هاوٍ من
                        خلال إحدى إبداعاتك باستخدام خميرة Saf-instant.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-calendar.svg" />
                        <p className="font-secondary">
                          من{" "}
                          <span className="text-heading4 text-gold">07/02</span>{" "}
                          إلى{" "}
                          <span className="text-heading4 text-gold">08/07</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-pin.svg" />
                        <p className="font-secondary">على الموقع الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                    <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 text-black group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] group-hover:text-black lg:rounded-[20px] lg:bg-[linear-gradient(90deg,#221F1F,#221F1F)] lg:text-gold">
                      2
                    </span>
                    <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                      <img
                        src="/images/ico-card2.svg"
                        className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                      />
                      <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                      <h3 className="font-secondary text-heading3 text-gold">
                        تصويت الجمهور
                      </h3>
                      <p className="text-body-big leading-7">
                        في المرحلة الثانية، سيكون لك دور في التصويت على أفضل
                        صورة لاختيار الستة المتأهلين الذين سيحظون الفرصة
                        للمشاركة في النهائي الكبير.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-calendar.svg" />
                        <p className="font-secondary">
                          من{" "}
                          <span className="text-heading4 text-gold">08/19</span>{" "}
                          إلى{" "}
                          <span className="text-heading4 text-gold">09/08</span>{" "}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-pin.svg" />
                        <p className="font-secondary">على الموقع الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                    <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 text-black group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] group-hover:text-black lg:rounded-[20px] lg:bg-[linear-gradient(90deg,#221F1F,#221F1F)] lg:text-gold">
                      3
                    </span>
                    <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                      <img
                        src="/images/ico-card3.svg"
                        className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                      />
                      <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                      <h3 className="font-secondary text-heading3 text-gold">
                        ورشة المتأهلين
                      </h3>
                      <p className="text-body-big leading-7">
                        سيحظى المتأهلون الستة للنهائي بفرصة المشاركة في ورشة
                        مميزة في ال Baking center، حيث يشرف على التدريب خبراء
                        Saf-instant.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-calendar.svg" />
                        <p className="font-secondary">
                          <span className="text-heading4 text-gold">
                            09/13{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-pin.svg" />
                        <p className="font-secondary">
                          الجزائر العاصمة - Baking Center
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card group relative flex max-w-full grow flex-col justify-center rounded-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)] transition-all duration-200 ease-in-out hover:bg-[#0F0F0F] lg:h-full lg:max-w-sm lg:bg-transparent lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
                    <span className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center self-center rounded-full border border-solid border-gold bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] pt-2 text-[36px] leading-9 text-black group-hover:bg-[linear-gradient(180deg,#f2dfb5,#dfb66e)] group-hover:text-black lg:rounded-[20px] lg:bg-[linear-gradient(90deg,#221F1F,#221F1F)] lg:text-gold">
                      4
                    </span>
                    <div className="relative flex flex-col items-center justify-center gap-5 p-8 pt-12 lg:min-h-[410px] lg:justify-start">
                      <img
                        src="/images/ico-card4.svg"
                        className="mb-3 opacity-100 lg:opacity-40 lg:group-hover:opacity-100"
                      />
                      <span className="before:absolute before:left-1/2 before:top-7 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold before:opacity-30 before:blur-3xl lg:absolute lg:before:top-0"></span>
                      <h3 className="font-secondary text-heading3 text-gold">
                        النهائي الكبير
                      </h3>
                      <p className="text-body-big leading-7">
                        في المرحلة النهائية، سيتاح للمتأهلين فرصة المنافسة في ال
                        Baking Center برفقة صانع المحتوى الشيف، بهدف إبهار
                        الحكام والفوز بفرصة الحصول على شيك بقيمة 30 مليون سنتيم.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-solid border-gold px-8 py-6 text-body-big">
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-calendar.svg" />
                        <p className="font-secondary">
                          <span className="text-heading4 text-gold">09/14</span>{" "}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/images/ico-pin.svg" />
                        <p className="font-secondary">
                          الجزائر العاصمة - Baking Center
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CAROUSEL NAV */}
            {isMobile && (
              <div className="relative my-10 flex items-center justify-center lg:hidden">
                <div id="prev">
                  <img
                    src="/images/ico-chevron-nav.svg"
                    className="rotate-180"
                  />
                </div>
                <div className="usps-dots mx-3"></div>
                <div id="next">
                  <img src="/images/ico-chevron-nav.svg" />
                </div>
              </div>
            )}
          </div>

          <img
            src="/images/powder-pastry.svg"
            className="absolute -bottom-72 -left-60 -z-10 hidden h-[800px] w-auto lg:block"
          />
        </section>
      )}

      <section className="block">
        <div className="steps-card-line relative max-w-full before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[url('/images/line-before-steps-cards.svg')] before:bg-contain before:bg-[position:100%_100%] before:bg-no-repeat">
          <img
            src="/images/flour-card3.svg"
            className="absolute -right-80 bottom-0 -z-10 hidden lg:block"
          />
          <div className="container">
            <div
              id="steps"
              className="section-title-wrapper relative flex w-full flex-col items-center justify-center gap-5 pb-20 lg:pt-32"
            >
              <span className="text-body-medium lg:text-heading4 text-white">
                خطوات التصويت
              </span>
              <h2 className="text-heading4 text-gold lg:text-[48px] text-center">
                الخطوات السهلة للتصويت على مشاركاتكم المفضلة
              </h2>
              <img src="/images/title-separator.svg" />
              <img
                src="/images/powder-pastry.svg"
                className="absolute -bottom-10 -left-24 -z-10 block h-80 w-auto lg:hidden"
              />
            </div>

            <div className="mx-auto flex max-w-xs flex-col items-start justify-center lg:max-w-7xl lg:flex-row">
              <div className="relative flex flex-col lg:w-auto w-full">
                <img
                  src="/images/word-step1.svg"
                  className="mx-auto mb-10 block w-36 lg:mb-20 lg:w-auto"
                />
                <div className="card group relative flex h-[290px] max-w-md flex-col justify-center rounded-[20px] bg-[#121212] p-8 transition-all duration-200 ease-in-out lg:h-[450px] lg:p-16">
                  <img
                    src="/images/flour-card2.svg"
                    className="absolute -right-56 -top-36 -z-10 block lg:hidden"
                  />
                  <span className="-z-10 before:absolute before:-right-40 before:top-0 before:h-3/4 before:w-full before:rounded-full before:bg-gold before:opacity-10 before:blur-3xl"></span>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                    <img
                      src="/images/ico-step1-vote.svg"
                      className="mb-3 max-w-[100px] lg:max-w-full"
                    />
                    <p className="text-center text-body-big leading-7">
                      اكتشف قائمة
                      <br />
                      المشاركات
                    </p>
                  </div>
                  <span className="absolute start-0 top-0 hidden scale-110 lg:block">
                    <img src="/images/step-card-border.svg" />
                  </span>
                  <span className="absolute -left-2 -top-4 block lg:hidden">
                    <img src="/images/step-card-border.svg" />
                  </span>
                </div>

                <img
                  src="/images/flour-saf-step1-vote.png"
                  className="absolute -right-7 bottom-10 hidden max-w-28 lg:block"
                />

                <img
                  src="/images/flour-saf-step1-vote.png"
                  className="absolute bottom-10 -right-4 block max-w-[70px] lg:hidden"
                />
              </div>

              <div className="mt-10 block self-end lg:hidden">
                <img
                  src="/images/ico-arrow-step1.svg"
                  className="max-w-[100px] -rotate-90"
                />
              </div>

              <div className="mx-10 mt-28 hidden self-center lg:block">
                <img src="/images/ico-arrow-step1.svg" />
              </div>

              <div className="flex flex-col w-full lg:w-auto lg:mt-20">
                <img
                  src="/images/word-step2.svg"
                  className="mx-auto mb-10 block w-36 lg:mb-20 lg:w-auto"
                />
                <div className="card group relative flex h-[290px] max-w-md flex-col justify-center rounded-[20px] bg-[#121212] p-8 transition-all duration-200 ease-in-out lg:h-[450px] lg:p-16">
                  <img
                    src="/images/flour-card2.svg"
                    className="absolute -bottom-16 -left-24 -z-10 lg:-bottom-28 lg:-left-48 lg:scale-150"
                  />
                  <span className="-z-10 before:absolute before:-left-40 before:top-0 before:h-3/4 before:w-full before:rounded-full before:bg-gold before:opacity-10 before:blur-3xl"></span>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                    <img
                      src="/images/ico-step2-vote.svg"
                      className="mb-3 max-w-[100px] lg:ms-10 lg:max-w-full"
                    />
                    <p className="text-center text-body-big leading-7">
                      اختر و صوّت على الصور <br />
                      المفضلة لديك{" "}
                    </p>
                  </div>
                  <span className="absolute start-0 top-0 hidden scale-110 lg:block">
                    <img src="/images/step-card-border.svg" />
                  </span>
                  <span className="absolute -left-2 -top-4 block lg:hidden">
                    <img src="/images/step-card-border.svg" />
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 block lg:hidden">
              <img
                src="/images/ico-arrow-step2.svg"
                className="max-w-[100px] rotate-90"
              />
            </div>

            <div className="mx-auto -mb-14 mt-10 hidden pe-10 text-center lg:block">
              <img src="/images/ico-arrow-step2.svg" className="mx-auto" />
            </div>

            <div className="mx-auto -mt-5 flex max-w-xs flex-col items-start justify-center lg:max-w-7xl lg:flex-row">
              <div className="relative flex flex-col">
                <img
                  src="/images/word-step3.svg"
                  className="mx-auto mb-10 block w-36 lg:mb-20 lg:w-auto"
                />
                <div className="card group relative flex h-[290px] max-w-md flex-col justify-center rounded-[20px] bg-[#121212] p-8 transition-all duration-200 ease-in-out lg:h-[450px] lg:p-16">
                  <img
                    src="/images/flour-card3.svg"
                    className="absolute -right-56 -top-12 -z-10 block lg:hidden"
                  />
                  <span className="-z-10 before:absolute before:-right-40 before:-top-14 before:h-3/4 before:w-full before:rounded-full before:bg-gold before:opacity-10 before:blur-3xl lg:before:-right-80 lg:before:bottom-0"></span>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                    <img
                      src="/images/ico-step3-vote.svg"
                      className="mb-3 max-w-[100px] lg:max-w-full"
                    />

                    <p className="text-center text-body-big leading-7">
                      قم بتسجيل الدخول عبر Facebook أو Instagram أو Google
                      للتحقق من صحة حسابك{" "}
                    </p>
                  </div>

                  <span className="absolute start-0 top-0 hidden scale-110 lg:block">
                    <img src="/images/step-card-border.svg" />
                  </span>
                  <span className="absolute -left-2 -top-4 block lg:hidden">
                    <img src="/images/step-card-border.svg" />
                  </span>
                </div>
              </div>

              <div className="mt-10 block self-end lg:hidden">
                <img
                  src="/images/ico-arrow-step1.svg"
                  className="max-w-[100px] -rotate-90"
                />
              </div>

              <div className="mx-10 mt-28 hidden self-center lg:block">
                <img src="/images/ico-arrow-step3.svg" />
              </div>

              <div className="-mt-3 flex flex-col lg:mt-20">
                <img
                  src="/images/word-step4.svg"
                  className="mx-auto mb-10 block w-36 lg:mb-20 lg:w-auto"
                />
                <div className="card group relative flex h-[290px] max-w-md flex-col justify-center rounded-[20px] bg-[#121212] p-8 transition-all duration-200 ease-in-out lg:h-[450px] lg:p-16">
                  <span className="-z-10 before:absolute before:-left-40 before:bottom-0 before:h-3/4 before:w-full before:rounded-full before:bg-gold before:opacity-10 before:blur-3xl"></span>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                    <img
                      src="/images/ico-step4-vote.svg"
                      className="mb-3 max-w-[100px] lg:max-w-full"
                    />
                    <p className="text-center text-body-big leading-7">
                      ترقّب الإعلان عن المتأهلين الستة للنهائي الكبير
                    </p>
                  </div>

                  <span className="absolute start-0 top-0 hidden scale-110 lg:block">
                    <img src="/images/step-card-border.svg" />
                  </span>
                  <span className="absolute -left-2 -top-4 block lg:hidden">
                    <img src="/images/step-card-border.svg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/flour-card2.svg"
            className="absolute -bottom-16 -left-24 -z-10 block lg:hidden"
          />

          <img
            src="/images/flour-card4.svg"
            className="absolute -bottom-[500px] -left-[550px] -z-10 hidden lg:block"
          />
        </div>
      </section>
    </>
  );
}
