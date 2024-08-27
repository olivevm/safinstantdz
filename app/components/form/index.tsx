export default function Form() {
  return (
    <section id="participation" className="mt-32 block lg:mt-60">
      <div className="container">
        <div className="relative mx-auto flex max-w-sm items-center justify-center pb-10 lg:max-w-7xl">
          <img
            src="/images/bg-form-with-stuffs.svg"
            className="absolute left-0 top-0 hidden h-full w-full lg:block"
          />

          <img
            src="/images/bg-form-with-stuffs-mobile.svg"
            className="absolute left-0 top-0 block h-auto w-full lg:hidden"
          />

          <div className="relative mx-auto max-w-full px-5 py-20 lg:px-0">
            <img
              src="/images/flour-card4.svg"
              className="absolute -left-[450px] top-[20%] -z-10 translate-y-[20%] scale-[1.6]"
            />

            <img
              src="/images/flour-card3.svg"
              className="absolute -right-[500px] top-1/4 -z-10 -translate-y-1/4 rotate-[145deg] scale-125"
            />

            <span className="before:absolute before:right-40 before:top-0 before:-z-10 before:h-96 before:w-full before:-translate-y-1/2 before:rounded-full before:bg-gold before:opacity-10 before:blur-3xl lg:before:-right-96 lg:before:top-1/2"></span>

            <span className="before:absolute before:-bottom-40 before:-left-40 before:-z-10 before:h-96 before:w-full before:rounded-full before:bg-gold before:opacity-10 before:blur-3xl lg:before:-left-80 lg:before:bottom-0"></span>

            <div className="section-title-wrapper relative flex w-full flex-col items-center justify-center gap-5 lg:pb-10">
              <h2 className="text-[48px] text-gold">سجل الآن</h2>
              <img src="/images/title-separator.svg" />
            </div>

            <form
              action="participation.php"
              encType="multipart/form-data"
              method="post"
              id="concours"
              name="concours"
              className="mx-auto w-full px-5 lg:px-0"
            >
              <div className="text-gray w-full">
                <div className="error-group mb-5">
                  <div className="input-group group">
                    <label className="label" htmlFor="fullname">
                      الإسم واللقب
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      className="input"
                      id="fullname"
                    />
                  </div>
                </div>

                <div className="error-group">
                  <div className="input-group group">
                    <label className="label" htmlFor="wilaya">
                      الولاية
                    </label>
                    <select
                      name="wilaya"
                      className="input h-[58px] appearance-none bg-[url(/images/ico-select-chevron.svg)] bg-[center_left_30px] bg-no-repeat lg:h-[68px]"
                      id="wilaya"
                    >
                      <option value=""></option>
                      <option value="أدرار">أدرار</option>
                      <option value="الشلف">الشلف</option>
                      <option value="الأغواط">الأغواط</option>
                      <option value="ام البواقي">ام البواقي</option>
                      <option value="باتنة">باتنة</option>
                      <option value="بجاية">بجاية</option>
                      <option value="بسكرة">بسكرة</option>
                      <option value="بشار">بشار</option>
                      <option value="البليدة">البليدة</option>
                      <option value="البويرة">البويرة</option>
                      <option value="تمنراست">تمنراست</option>
                      <option value="تبسة">تبسة</option>
                      <option value="تلمسان">تلمسان</option>
                      <option value="تيارت">تيارت</option>
                      <option value="تيزي وزو">تيزي وزو</option>
                      <option value="الجزائر">الجزائر</option>
                      <option value="الجلفة">الجلفة</option>
                      <option value="جيجل">جيجل</option>
                      <option value="سطيف">سطيف</option>
                      <option value="سعيدة">سعيدة</option>
                      <option value="سكيكدة">سكيكدة</option>
                      <option value="سيدي بلعباس">سيدي بلعباس</option>
                      <option value="عنابة">عنابة</option>
                      <option value="قالمة">قالمة</option>
                      <option value="قسنطينة">قسنطينة</option>
                      <option value="المدية">المدية</option>
                      <option value="مستغانم">مستغانم</option>
                      <option value="المسيلة">المسيلة</option>
                      <option value="معسكر">معسكر</option>
                      <option value="ورقلة">ورقلة</option>
                      <option value="وهران">وهران</option>
                      <option value="البيض">البيض</option>
                      <option value="إليزي">إليزي</option>
                      <option value="برج بوعريريج">برج بوعريريج</option>
                      <option value="بومرداس">بومرداس</option>
                      <option value="الطارف">الطارف</option>
                      <option value="تندوف">تندوف</option>
                      <option value="تيسمسيلت">تيسمسيلت</option>
                      <option value="الوادي">الوادي</option>
                      <option value="خنشلة">خنشلة</option>
                      <option value="سوق أهراس">سوق أهراس</option>
                      <option value="تيبازة">تيبازة</option>
                      <option value="ميلة">ميلة</option>
                      <option value="عين الدفلى">عين الدفلى</option>
                      <option value="النعامة">النعامة</option>
                      <option value="عين تموشنت">عين تموشنت</option>
                      <option value="غرداية">غرداية</option>
                      <option value="غليزان">غليزان</option>
                      <option value="تيميمون">تيميمون</option>
                      <option value="برج باجي مختار">برج باجي مختار</option>
                      <option value="أولاد جلال">أولاد جلال</option>
                      <option value="بني عباس">بني عباس</option>
                      <option value="ان صالح">ان صالح</option>
                      <option value="إن ڨزام">إن ڨزام</option>
                      <option value="تقرت">تقرت</option>
                      <option value="جانيت">جانيت</option>
                      <option value="المغير">المغير</option>
                      <option value="المنيعة">المنيعة</option>
                    </select>
                  </div>
                </div>

                <div className="error-group mb-5">
                  <div className="input-group group">
                    <label className="label" htmlFor="phone">
                      رقم الهاتف
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      className="input"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="error-group radio mb-5">
                  <div className="input-group group mb-10 text-center lg:text-start">
                    <label htmlFor="chef">أشارك مع</label>
                    <div className="mt-8 flex w-full flex-wrap items-center lg:mt-5">
                      <div className="mx-auto flex flex-col gap-10 lg:mx-0 lg:flex-row lg:gap-4">
                        <div className="radio-card">
                          <input
                            type="radio"
                            name="chef"
                            id="ghano-cuisine"
                            className="input"
                            value="Ghano Cuisine"
                            required
                          />
                          <label
                            htmlFor="ghano-cuisine"
                            className="block cursor-pointer"
                          >
                            <div className="rounded-[10px] border border-[#4B4B4B] p-4 text-center transition-colors duration-300">
                              <div className="image-wrapper">
                                <img
                                  src="/images/ghano-cuisine.png"
                                  alt="Ghano Cuisine"
                                  className="image-container mx-auto -mt-7 mb-2 h-24 w-24 object-contain"
                                />
                                <img
                                  src="/images/ghano-cuisine-hover.png"
                                  alt="Ghano Cuisine"
                                  className="checked-image-container mx-auto -mt-7 mb-2 h-24 w-24 object-contain"
                                />
                              </div>
                              <span className="mt-3 block">Ghano Cuisine</span>
                            </div>
                            <div className="checkbox-icon mt-2">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </label>
                        </div>

                        <div className="radio-card">
                          <input
                            type="radio"
                            name="chef"
                            id="sara-cook"
                            className="input"
                            value="Sara Cook"
                            required
                          />
                          <label
                            htmlFor="sara-cook"
                            className="block cursor-pointer"
                          >
                            <div className="rounded-[10px] border border-[#4B4B4B] p-4 text-center transition-colors duration-300">
                              <div className="image-wrapper">
                                <img
                                  src="/images/sara-cook.png"
                                  alt="Sara Cook"
                                  className="image-container mx-auto -mt-7 mb-2 h-24 w-24 object-contain"
                                />
                                <img
                                  src="/images/sara-cook-hover.png"
                                  alt="Sara Cook"
                                  className="checked-image-container mx-auto -mt-7 mb-2 h-24 w-24 object-contain"
                                />
                              </div>

                              <span className="mt-3 block">Sara Cook</span>
                            </div>
                            <div className="checkbox-icon mt-2">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </label>
                        </div>

                        <div className="radio-card">
                          <input
                            type="radio"
                            name="chef"
                            id="chef-aymen"
                            className="input"
                            value="Chef Aymen"
                            required
                          />
                          <label
                            htmlFor="chef-aymen"
                            className="block cursor-pointer"
                          >
                            <div className="rounded-[10px] border border-[#4B4B4B] p-4 text-center transition-colors duration-300">
                              <div className="image-wrapper">
                                <img
                                  src="/images/chef-aymen.png"
                                  alt="Chef Aymen"
                                  className="image-container mx-auto -mt-7 mb-2 h-24 w-24 object-contain"
                                />
                                <img
                                  src="/images/chef-aymen-hover.png"
                                  alt="Chef Aymen"
                                  className="checked-image-container mx-auto -mt-7 mb-2 h-24 w-24 object-contain"
                                />
                              </div>
                              <span className="mt-3 block">Chef Aymen</span>
                            </div>
                            <div className="checkbox-icon mt-2">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      id="radio-error"
                      className="error-message mt-4 text-center lg:text-start"
                    >
                      الرجاء اختيار الشيف
                    </div>
                  </div>
                </div>

                <div className="error-group mb-5">
                  <div className="flex w-full flex-col items-start justify-start">
                    <label
                      htmlFor="fileupload"
                      className="flex w-full cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-[#937546] bg-transparent p-4 lg:h-40 lg:p-0"
                    >
                      <div className="fileupload relative flex flex-col items-center justify-center lg:flex-row lg:gap-10">
                        {/* <span className="absolute -top-3 right-14 h-8 w-8 rounded-full bg-[#4A3D29]">
                          <DotLottiePlayer
                            src="/images/upload-animation.json"
                            className="absolute"
                            loop
                            autoplay
                          />
                        </span> */}
                        <img
                          src="/images/ico-file-upload.svg"
                          className="mb-5 max-w-[50px] lg:mb-0 lg:max-w-full"
                        />
                        <div className="flex flex-col items-center justify-center gap-4">
                          <p className="text-body-medium text-white lg:mb-2 lg:text-heading5">
                            صورة خبز مع علبة Saf-instant
                          </p>
                          <p
                            id="fileupload-text"
                            className="font-secondary text-body-medium text-[#C2AC6E] underline"
                          >
                            تصفح
                          </p>
                        </div>
                      </div>
                      <input
                        id="fileupload"
                        name="fileupload"
                        type="file"
                        accept="image/*"
                        className="input hidden"
                        required
                      />
                    </label>
                    <div
                      id="file-error"
                      className="error-message mt-4 text-center lg:text-start"
                    >
                      الرجاء إضافة الصورة
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="checkbox relative block">
                    <input
                      type="checkbox"
                      name="accepte"
                      id="accepte"
                      className="accepte relative z-10 h-6 w-6 cursor-pointer border-2 bg-transparent opacity-0"
                    />
                    <span
                      id="check"
                      className="checkmark absolute start-4 top-1.5 h-6 w-6 rounded-[5px] border border-solid border-[#4b4b4b] bg-transparent after:hidden lg:start-0"
                    ></span>
                    <label
                      htmlFor="accepte"
                      className="ms-5 text-body-small lg:ms-2 lg:text-body-medium"
                    >
                      أوافق على
                      <a
                        href="/images/reglement.pdf"
                        target="_blank"
                        className="text-red-100 underline"
                      >
                        شروط المسابقة
                      </a>
                    </label>
                    <div
                      id="checkbox-error"
                      className="error-message mt-4 text-center lg:text-start"
                    >
                      يرجى التأكد من أنك قرأت الشروط والأحكام ووافقت عليها
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                id="g-recaptcha-response"
                name="g-recaptcha-response"
              />
              <input type="hidden" name="action" value="validate_captcha" />

              <div className="group transition-all lg:mt-10">
                <input
                  type="submit"
                  value="أشارك"
                  className="btn btn-primary mx-auto block cursor-pointer"
                />
              </div>
            </form>
            <div
              id="loader"
              style={{
                display: "none",
              }}
            >
              Submitting...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
