exports.id=317,exports.ids=[317],exports.modules={6283:(e,s,t)=>{Promise.resolve().then(t.bind(t,2789)),Promise.resolve().then(t.bind(t,8819)),Promise.resolve().then(t.bind(t,3860)),Promise.resolve().then(t.bind(t,7360)),Promise.resolve().then(t.bind(t,13))},2858:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},2789:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var a=t(326),r=t(8778),l=t(8349);function i(){let{isAuthPopupOpen:e,closeAuthPopup:s}=(0,r.a)(),t=(0,l.ac)({maxWidth:768}),i=()=>{let e=encodeURIComponent(window.location.href);window.location.href=`https://bakers-backend.shiftin-demo.com/api/auth/facebook?redirect_uri=${e}`},n=()=>{let e=encodeURIComponent(window.location.href);window.location.href=`https://bakers-backend.shiftin-demo.com/api/auth/google?redirect_uri=${e}`},o=()=>{let e=encodeURIComponent(window.location.href);window.location.href=`https://bakers-backend.shiftin-demo.com/api/auth/instagram?redirect_uri=${e}`};return e?t?a.jsx("div",{className:"fixed inset-0 z-[2000] h-full w-full items-center justify-center bg-[#141414]",children:(0,a.jsxs)("div",{className:"relative flex h-full w-full flex-col justify-center",children:[a.jsx("button",{id:"auth-close",type:"button",onClick:s,className:"absolute top-5 right-5 text-[#C2AC6E]",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),(0,a.jsxs)("div",{className:"relative container z-[2001] w-full bg-transparent text-white",children:[(0,a.jsxs)("div",{className:"mx-auto",children:[(0,a.jsxs)("div",{className:"mb-16 text-center",children:[a.jsx("h3",{className:"font-secondary text-heading5 font-bold leading-10",children:"لتأكيد المشاركة يرجى تسجيل الدخول عبر"}),a.jsx("h3",{className:"font-secondary text-heading5 font-bold leading-10",children:"Facebook أو Instagram أو Google"})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-center space-y-3",children:[(0,a.jsxs)("button",{className:"text-heading4 flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 leading-7 text-white",onClick:i,children:[a.jsx("img",{src:"/images/ico-facebook-auth.svg",className:"ms-4 w-9"}),(0,a.jsxs)("span",{className:"pt-2 text-body-medium",children:["تسجيل الدخول عبر ",a.jsx("span",{className:"ms-1",children:"Facebook"})]})]}),(0,a.jsxs)("button",{id:"loginWithGoogle",className:"flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white",onClick:n,children:[a.jsx("img",{src:"/images/ico-google-auth.svg",className:"ms-4 w-9"}),(0,a.jsxs)("span",{className:"pt-2 text-body-medium",children:["تسجيل الدخول عبر ",a.jsx("span",{className:"ms-1",children:"Google"})]})]}),(0,a.jsxs)("button",{className:"flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white",onClick:o,children:[a.jsx("img",{src:"/images/ico-instagram-auth.svg",className:"ms-4 w-9"}),(0,a.jsxs)("span",{className:"pt-2 text-body-medium",children:["تسجيل الدخول عبر ",a.jsx("span",{className:"ms-1",children:"Instagram"})]})]})]})]}),a.jsx("hr",{className:"my-14 border-b border-solid border-[#C2AC6E] border-opacity-35 text-[#C2AC6E]"}),a.jsx("button",{id:"auth-cancel",onClick:s,className:"mx-auto flex min-w-52 items-center justify-center rounded-[10px] border border-[#C2AC6E] px-6 py-4 font-secondary text-heading4 leading-7 text-white",children:"إلغاء"})]})]})}):a.jsx("div",{className:"fixed inset-0 z-[2000] h-screen items-center justify-center bg-black/50",children:(0,a.jsxs)("div",{className:"relative mx-auto w-1/2",children:[a.jsx("img",{src:"/images/bg-popup.svg",className:"max-w-full"}),a.jsx("button",{id:"auth-close",type:"button",onClick:s,className:"absolute right-28 top-14 text-[#C2AC6E]",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),(0,a.jsxs)("div",{className:"absolute left-1/2 top-1/2 z-[2001] w-3/4 -translate-x-1/2 -translate-y-1/2 bg-transparent text-white",children:[(0,a.jsxs)("div",{className:"mx-auto w-max",children:[(0,a.jsxs)("div",{className:"mb-16 text-center",children:[a.jsx("h3",{className:"font-secondary text-heading3 font-bold leading-10",children:"لتأكيد المشاركة يرجى تسجيل الدخول عبر"}),a.jsx("h3",{className:"font-secondary text-heading3 font-bold leading-10",children:"Facebook أو Instagram أو Google"})]}),(0,a.jsxs)("div",{className:"space-y-7",children:[(0,a.jsxs)("button",{className:"flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white",onClick:i,children:[a.jsx("img",{src:"/images/ico-facebook-auth.svg",className:"ms-4 w-9"}),(0,a.jsxs)("span",{className:"pt-2",children:["تسجيل الدخول عبر ",a.jsx("span",{className:"ms-1",children:"Facebook"})]})]}),(0,a.jsxs)("button",{id:"loginWithGoogle",className:"flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white",onClick:n,children:[a.jsx("img",{src:"/images/ico-google-auth.svg",className:"ms-4 w-9"}),(0,a.jsxs)("span",{className:"pt-2",children:["تسجيل الدخول عبر ",a.jsx("span",{className:"ms-1",children:"Google"})]})]}),(0,a.jsxs)("button",{className:"flex w-full items-center justify-start rounded-[10px] border border-[#C2AC6E] px-6 py-4 text-heading4 leading-7 text-white",onClick:o,children:[a.jsx("img",{src:"/images/ico-instagram-auth.svg",className:"ms-4 w-9"}),(0,a.jsxs)("span",{className:"pt-2",children:["تسجيل الدخول عبر ",a.jsx("span",{className:"ms-1",children:"Instagram"})]})]})]})]}),a.jsx("hr",{className:"my-14 border-b border-solid border-[#C2AC6E] border-opacity-35 text-[#C2AC6E]"}),a.jsx("button",{id:"auth-cancel",onClick:s,className:"mx-auto flex min-w-52 items-center justify-center rounded-[10px] border border-[#C2AC6E] px-6 py-4 font-secondary text-heading4 leading-7 text-white",children:"إلغاء"})]})]})}):null}},8819:(e,s,t)=>{"use strict";t.d(s,{default:()=>x});var a=t(326),r=t(7577),l=t.n(r);let i=[{title:"youtube",url:"https://www.youtube.com/c/safinstantAlg%C3%A9rie",icon:"/images/ico-youtube.svg"},{title:"tiktok",url:"https://www.tiktok.com/@safinstantdz?lang=fr",icon:"/images/ico-tiktok.svg"},{title:"instagram",url:"https://www.instagram.com/safinstantdz",icon:"/images/ico-instagram.svg"},{title:"facebook",url:"https://www.facebook.com/SafInstantAlgerie",icon:"/images/ico-facebook.svg"}];function n(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("footer",{id:"footer",className:"relative hidden w-full pt-40 lg:block",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("div",{children:a.jsx("div",{className:"py-2",children:a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"relative flex w-full items-center justify-between",children:[(0,a.jsxs)("div",{className:"relative flex w-full items-center justify-between md:w-auto md:justify-normal md:gap-7",children:[a.jsx("img",{src:"/images/logo-saf.svg"}),a.jsx("p",{className:"hidden text-heading3 lg:mt-4 lg:block lg:text-gold",children:"#تحدي_الخبازٍين_الهواة"})]}),(0,a.jsxs)("div",{className:"absolute left-1/2 -translate-x-1/2",children:[a.jsx("span",{className:"relative before:absolute before:h-full before:w-full before:rounded-full before:bg-gold before:opacity-20 before:blur-3xl"}),a.jsx("img",{src:"/images/logo-challenge.svg",alt:"Logo Challenge",className:"h-16 md:h-48"})]}),(0,a.jsxs)("div",{className:"hidden items-center gap-3 md:flex",children:[a.jsx("p",{className:"hidden pl-5 lg:block lg:text-heading5 lg:text-gold",children:"تابعونا"}),a.jsx("div",{className:"flex items-center gap-4",children:i?.map?.(({icon:e,title:s,url:t},r)=>a.jsxs(l().Fragment,{children:[a.jsx("a",{href:t,target:"_blank",className:"bg-red-100 flex h-5 w-5 items-center justify-center rounded-full md:h-7 md:w-7",children:a.jsx("img",{src:e,alt:s})}),r!==i.length-1&&a.jsx("img",{src:"/images/icones-separator.svg"})]},s))})]})]})})})}),(0,a.jsxs)("div",{className:"flex w-full gap-80",children:[a.jsx("span",{className:"relative w-full border border-l-[520px] border-solid border-[#edd3a1] border-l-transparent"}),a.jsx("span",{className:"relative w-full border border-r-[520px] border-solid border-[#edd3a1] border-r-transparent"})]}),a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"flex items-center justify-between py-5",children:[a.jsx("div",{children:a.jsx("p",{children:"جميع الحقوق محفوظة \xa9 Saf-instant"})}),(0,a.jsxs)("div",{className:"flex items-end gap-3",children:[a.jsx("p",{children:"مصمم و مطوّر من طرف"}),a.jsx("a",{href:"https://shiftin.co/",children:a.jsx("img",{src:"/images/logo-shiftin.svg"})})]})]})})]})}),a.jsx("footer",{id:"footer-mobile",className:"relative block w-full pt-10 lg:hidden",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("div",{children:a.jsx("div",{className:"py-2",children:a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"relative flex w-full flex-col items-center justify-between gap-6",children:[a.jsx("div",{className:"relative",children:a.jsx("img",{src:"/images/logo-challenge.svg",alt:"Logo Challenge",className:"h-36"})}),a.jsx("div",{className:"relative",children:a.jsx("img",{src:"/images/logo-saf.svg",className:"h-14 w-auto"})}),a.jsx("div",{className:"flex items-center gap-3",children:a.jsx("div",{className:"flex items-center gap-4",children:i?.map?.(({icon:e,title:s,url:t},r)=>a.jsxs(l().Fragment,{children:[a.jsx("a",{href:t,target:"_blank",className:"bg-red-100 flex h-5 w-5 items-center justify-center rounded-full md:h-7 md:w-7",children:a.jsx("img",{src:e,alt:s})}),r!==i.length-1&&a.jsx("img",{src:"/images/icones-separator.svg"})]},s))})})]})})})}),a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"flex flex-col-reverse items-center justify-between gap-4 py-5 text-body-small",children:[a.jsx("div",{children:a.jsx("p",{children:"جميع الحقوق محفوظة \xa9 Saf-instant"})}),(0,a.jsxs)("div",{className:"flex items-end gap-3",children:[a.jsx("p",{children:"مصمم و مطوّر من طرف"}),a.jsx("a",{href:"https://shiftin.co/",children:a.jsx("img",{src:"/images/logo-shiftin.svg",className:"max-w-[120px]"})})]})]})})]})})]})}function o(){return(0,a.jsxs)("header",{id:"header",className:"relative hidden w-full lg:block",children:[a.jsx("div",{className:"bg-[#00000099] py-2",children:a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,a.jsxs)("div",{className:"relative flex w-full items-center justify-between md:w-auto md:justify-normal md:gap-7",children:[a.jsx("img",{src:"/images/logo-saf.svg"}),a.jsx("p",{className:"hidden text-heading3 lg:mt-4 lg:block lg:text-gold",children:"#تحدي_الخبازٍين_الهواة"})]}),(0,a.jsxs)("div",{className:"hidden items-center gap-3 md:flex",children:[a.jsx("p",{className:"hidden pl-5 lg:block lg:text-heading5 lg:text-gold",children:"تابعونا"}),a.jsx("div",{className:"flex items-center gap-4",children:i?.map?.(({icon:e,title:s,url:t},r)=>a.jsxs(l().Fragment,{children:[a.jsx("a",{href:t,target:"_blank",className:"bg-red-100 flex h-5 w-5 items-center justify-center rounded-full md:h-7 md:w-7",children:a.jsx("img",{src:e,alt:s})}),r!==i?.length-1&&a.jsx("img",{src:"/images/icones-separator.svg"})]},s))})]})]})})}),(0,a.jsxs)("div",{className:"absolute left-1/2 top-2 z-[60] -translate-x-1/2",children:[a.jsx("span",{className:"relative before:absolute before:h-60 before:w-full before:rounded-full before:bg-gold before:opacity-20 before:blur-3xl"}),a.jsx("img",{src:"/images/logo-challenge.svg",alt:"Logo Challenge",className:"h-16 md:h-48"})]}),(0,a.jsxs)("div",{className:"hidden w-full gap-80 lg:flex",children:[a.jsx("span",{className:"relative w-full border border-l-[520px] border-solid border-[#edd3a1] border-l-transparent"}),a.jsx("span",{className:"relative w-full border border-r-[520px] border-solid border-[#edd3a1] border-r-transparent"})]})]})}var c=t(1009);function d({isLoading:e}){let s=(0,c.m6)("wrapper fixed bottom-0 left-0 right-0 top-0 z-50 m-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black p-0 text-center",!e&&"hidden");return(0,a.jsxs)("div",{className:s,children:[(0,a.jsxs)("div",{className:"lds-ellipsis",children:[a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{})]}),a.jsx("h2",{className:"font-primary text-heading2 text-white",children:"تحميل"})]})}function x({children:e}){let[s,t]=(0,r.useState)(!0),l=(0,c.m6)("page",s?"opacity-0":"opacity-100");return(0,a.jsxs)(a.Fragment,{children:[a.jsx(d,{isLoading:s}),(0,a.jsxs)("div",{className:l,children:[a.jsx(o,{}),a.jsx("main",{className:"relative",children:e}),a.jsx(n,{})]})]})}},3860:(e,s,t)=>{"use strict";t.r(s),t.d(s,{AuthProvider:()=>i,useAuth:()=>n});var a=t(326),r=t(7577);let l=(0,r.createContext)(void 0),i=({children:e})=>{let[s,t]=(0,r.useState)(!1);return a.jsx(l.Provider,{value:{isAuthPopupOpen:s,openAuthPopup:()=>t(!0),closeAuthPopup:()=>t(!1)},children:e})},n=()=>{let e=(0,r.useContext)(l);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},8778:(e,s,t)=>{"use strict";t.d(s,{a:()=>a.useAuth});var a=t(3860)},7360:(e,s,t)=>{"use strict";t.d(s,{default:()=>o});var a=t(326),r=t(2852),l=t(4976),i=t(787),n=t(7577);function o({children:e}){let[s]=(0,n.useState)(()=>new r.S);return(0,a.jsxs)(l.aH,{client:s,children:[e,a.jsx(i.t,{})]})}},13:(e,s,t)=>{"use strict";t.r(s),t.d(s,{authHeader:()=>l,getToken:()=>r,setToken:()=>a});let a=e=>void 0!==window?localStorage.setItem("token",e):null,r=()=>{if(void 0!==window){let e=localStorage.getItem("token");return console.log({token:e}),e}return null},l=e=>({Authorization:`Bearer ${e}`})},2247:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>U,metadata:()=>_});var a=t(9510),r=t(1025),l=t.n(r),i=t(2622),n=t.n(i),o=t(8570);let c=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/providers/query-client-provider.tsx`),{__esModule:d,$$typeof:x}=c;c.default;let m=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/providers/query-client-provider.tsx#default`),h=t(9712).Z.create({headers:{Accept:"application/json","Content-Type":"application/json"}}),g=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/utils/token.ts`),{__esModule:p,$$typeof:f}=g;g.default,(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/utils/token.ts#authHeader`),(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/utils/token.ts#getToken`),(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/utils/token.ts#setToken`);let u=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/app/wrapper/index.tsx`),{__esModule:j,$$typeof:b}=u;u.default;let v=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/app/wrapper/index.tsx#default`);t(7272);let w=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/context/auth-context.tsx`),{__esModule:N,$$typeof:k}=w;w.default;let y=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/context/auth-context.tsx#AuthProvider`);(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/context/auth-context.tsx#useAuth`);let C=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/app/components/auth-popup/index.tsx`),{__esModule:P,$$typeof:A}=C;C.default;let S=(0,o.createProxy)(String.raw`/Users/mac/Desktop/Projects/saf-instant/bakers-challenge/prod/olivier-repo/safinstantdz/app/components/auth-popup/index.tsx#default`);var z=t(1159);h.defaults.baseURL="/";let _={title:"Saf-instant تحدي الخبازين الهواة لـ",description:"احصل على فرصة الفوز بشيك قيمته 30 مليون سنتيم جزائري، ورشة في تقنيات الخبر من طرف خبراء ساف انستانت، مما سيفتح لك فرصًا لا تفوت في عالم الطبخ.",robots:{follow:!0,index:!0},keywords:"saf instant",openGraph:{type:"website",url:"https://tahadi-elhouwat.safinstantdz.com",title:"شارك وحاول الفوز بجوائز قيمة مع ساف انستانت",description:"احصل على فرصة الفوز بشيك قيمته 30 مليون سنتيم جزائري، ورشة في تقنيات الخبر من طرف خبراء ساف انستانت، مما سيفتح لك فرصًا لا تفوت في عالم الطبخ."}};function U({children:e}){return a.jsx("html",{lang:"ar",dir:"rtl",className:`${l().variable} ${n().variable}`,children:a.jsx("body",{className:"bg-black",children:a.jsx(m,{children:a.jsx(y,{children:(0,a.jsxs)(v,{children:[e,a.jsx(z.Suspense,{children:a.jsx(S,{})})]})})})})})}},7272:()=>{}};