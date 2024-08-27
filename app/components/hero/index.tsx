export default function Hero() {
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
                id="hand1-mobile"
                src="/images/hand-hero1.svg"
                className="mx-auto max-w-full lg:hidden"
              />
              <img
                id="hand2-mobile"
                src="/images/hand-hero2.svg"
                className="mx-auto max-w-full lg:hidden"
              />
              <img
                id="hand3-mobile"
                src="/images/hand-hero3.svg"
                className="mx-auto max-w-full lg:hidden"
              />
            </div>

            <img
              id="word1"
              src="/images/word-hero1.svg"
              className="relative mx-auto mb-5 max-w-[300px] lg:absolute lg:mx-0 lg:max-w-sm"
            />
            <img
              id="word2"
              src="/images/word-hero2.svg"
              className="relative mx-auto mb-5 max-w-[300px] lg:absolute lg:mx-0 lg:max-w-sm"
            />
            <img
              id="word3"
              src="/images/word-hero3.svg"
              className="relative mx-auto mb-5 max-w-[300px] lg:absolute lg:mx-0 lg:max-w-sm"
            />

            <div id="hero-content" className="invisible relative z-10">
              <h3 className="text-secondary mb-2 text-center font-secondary text-heading3 text-gold lg:mb-0 lg:text-start">
                هل أنت هاوي في فن الخبز ؟
              </h3>
              <p className="relative mx-auto my-8 block max-w-xs text-center text-heading5 leading-[34px] text-white lg:mx-0 lg:mb-0 lg:max-w-full lg:text-start">
                أبدع وانظم إلى تحدي الهواة ل Saf-instant و احصل على فرصة الفوز
                بشيك قيمته 30 مليون سنتيم جزائري، ورشة في تقنيات الخبر من طرف
                خبراء Saf-instant، مما سيفتح لك فرصًا لا تفوت في عالم الطبخ.
              </p>

              <div className="relative z-10 my-8 flex flex-col items-center gap-5 lg:flex-row lg:items-start">
                <a
                  href="#participation"
                  className="btn btn-primary transition-colors duration-200 ease-in-out"
                >
                  شارك الآن
                </a>
                <a
                  href="#steps"
                  className="btn transition-colors duration-200 ease-in-out"
                >
                  خطوات المشاركة
                </a>
              </div>
            </div>
          </div>

          <div className="-mt-10 flex max-w-full items-center justify-center lg:hidden">
            <img src="/images/gift-new.png" className="scale-110" />
          </div>

          <div id="hero-image" className="-mt-60 hidden grow lg:flex">
            <img id="hand1" src="/images/hand-hero1.svg" alt="" />
            <img id="hand2" src="/images/hand-hero2.svg" alt="" />
            <img id="hand3" src="/images/hand-hero3.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 hidden lg:block">
        <img
          id="arrow-down"
          src="/images/ico-arrow-down.svg"
          className="absolute bottom-[45%] left-1/2 w-10 -translate-x-1/2"
        />

        <img id="gift-motif" src="/images/gift-motif.svg" alt="" />
        <img id="gift-confetti" src="/images/gift-confetti.svg" alt="" />

        <img src="/images/donut.svg" className="absolute left-0" alt="" />
      </div>
    </div>
  );
}
