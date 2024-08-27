export default function Timer() {
  return (
    <div
      id="timer"
      className="countdown fixed bottom-0 left-1/2 z-50 mx-auto flex max-w-full -translate-x-1/2 items-center justify-center gap-4 overflow-hidden rounded-t-[20px] border border-solid border-[#E6C588] bg-[#0F0F0F] px-7 py-4 font-secondary shadow-[0px_0px_45px_-20px_#D2C283] lg:max-w-fit lg:gap-8"
    >
      <div className="clock-item clock-days countdown-time-value flex flex-col gap-1 text-center lg:gap-2">
        <div id="canvas-days" className="clock-canvas invisible h-0"></div>
        <p className="val text-[50px]">0</p>
        <span className="text-body-medium">أيام</span>
      </div>
      <div className="-mt-6 flex flex-col gap-2 text-center lg:gap-4">
        <span className="h-1 w-1 rounded-full bg-[#C2AC6E]"></span>
        <span className="h-1 w-1 rounded-full bg-[#C2AC6E]"></span>
      </div>
      <div className="clock-item clock-hours countdown-time-value flex flex-col gap-1 text-center lg:gap-2">
        <div id="canvas-hours" className="clock-canvas invisible h-0"></div>
        <p className="val text-[50px]">0</p>
        <span className="text-body-medium">ساعات</span>
      </div>
      <div className="-mt-6 flex flex-col gap-2 text-center lg:gap-4">
        <span className="h-1 w-1 rounded-full bg-[#C2AC6E]"></span>
        <span className="h-1 w-1 rounded-full bg-[#C2AC6E]"></span>
      </div>
      <div className="clock-item clock-minutes countdown-time-value flex flex-col gap-1 text-center lg:gap-2">
        <div id="canvas-minutes" className="clock-canvas invisible h-0"></div>
        <p className="val minutes text-[50px]">0</p>
        <span className="text-body-medium">دقيقة</span>
      </div>
      <div className="-mt-6 flex flex-col gap-2 text-center lg:gap-4">
        <span className="h-1 w-1 rounded-full bg-[#C2AC6E]"></span>
        <span className="h-1 w-1 rounded-full bg-[#C2AC6E]"></span>
      </div>
      <div className="clock-item clock-seconds countdown-time-value flex flex-col gap-1 text-center lg:gap-2">
        <div id="canvas-seconds" className="clock-canvas invisible h-0"></div>
        <p className="val seconds text-[50px]">0</p>
        <span className="text-body-medium">ثانية</span>
      </div>
    </div>
  );
}
