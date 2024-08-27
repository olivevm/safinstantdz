export default function VoteHero() {
  return (
    <div className="container relative z-50 flex h-auto w-full items-center justify-center bg-black pt-10 lg:h-screen lg:pt-0">
      <div>
        <div className="flex flex-col items-start justify-center gap-0 lg:flex-row lg:gap-10">
          <div className="flex w-full flex-col justify-center gap-3 lg:w-1/2 lg:justify-start lg:gap-8">
            <img
              src="/images/logo-challenge.svg"
              className="mx-auto max-w-[200px] lg:hidden"
            />
            <img
              src="/images/logo-saf.svg"
              className="mx-auto max-w-[200px] lg:hidden"
            />
            <div className="-mt-5 flex max-h-64 overflow-hidden lg:mt-0 lg:max-h-full lg:overflow-auto">
              <img
                id="hand3-mobile"
                src="/images/hand-hero3.svg"
                className="mx-auto max-w-full lg:hidden"
              />
            </div>

            <div id="hero-content" className="relative z-10 mt-0 lg:-mt-20">
              <img
                id="word3"
                src="/images/word-hero3.svg"
                className="relative mx-auto mb-5 max-w-[300px] lg:mx-0 lg:max-w-sm"
              />

              <h3 className="text-secondary mb-2 text-center font-secondary text-heading3 text-gold lg:mb-0 lg:text-start">
                هل أنت هاوي في فن الخبز ؟
              </h3>
              <p className="relative mx-auto my-8 block max-w-xs text-center text-heading5 leading-[34px] text-white lg:mx-0 lg:mb-0 lg:max-w-full lg:text-start">
                شاركنا برأيك وصوّت على صورة التي تستحق الوصول إلى نهائي تحدي
                الخبازين الهواة. لفرصة الفوز بشيك قيمته 30 مليون سنتيم جزائري،
                ورشة في تقنيات الخبر من طرف خبراء Saf-instant، مما سيفتح
                للفائزين فرصًا لا تفوت في عالم الطبخ
              </p>

              <div className="relative z-10 my-8 flex flex-col items-center gap-5 lg:flex-row lg:items-start">
                <a
                  href="#vote-listing"
                  className="btn btn-primary btn-auto transition-colors duration-200 ease-in-out"
                >
                  أصوت على أفضل وصفة
                </a>
              </div>
            </div>
          </div>

          <div className="-mt-10 flex max-w-full items-center justify-center lg:hidden">
            <img src="/images/gift-new.png" className="scale-110" />
          </div>

          <div id="hero-image" className="-mt-60 hidden grow lg:flex">
            <img id="hand3" src="/images/hand-hero3.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] hidden lg:block">
        <img
          id="arrow-down"
          src="/images/ico-arrow-down.svg"
          className="absolute bottom-[45%] left-1/2 w-10 -translate-x-1/2"
        />

        <img
          id="gift-motif"
          src="/images/gift-motif.svg"
          className="bottom-0 absolute -z-10"
          alt=""
        />
        <img id="gift-confetti" src="/images/gift-confetti.svg" alt="" />

        <img src="/images/donut.svg" className="absolute left-0" alt="" />
      </div>
    </div>
  );
}
