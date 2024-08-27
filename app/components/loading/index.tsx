import { twMerge } from "tailwind-merge";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  const loaderClassName = twMerge(
    "wrapper fixed bottom-0 left-0 right-0 top-0 z-50 m-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black p-0 text-center",
    !isLoading && "hidden"
  );

  return (
    <div className={loaderClassName}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className="font-primary text-heading2 text-white">تحميل</h2>
    </div>
  );
}
