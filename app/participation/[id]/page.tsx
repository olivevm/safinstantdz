"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { useCurrentUser, useGetOne, useVote } from "@/hooks";
import CopyUrlButton from "@/app/components/copy-url-button";
import { QueryClient } from "@tanstack/react-query";
import { useAuth } from "@/context";
import Hero from "@/app/components/hero";

export default function Participation({ params }: { params: { id: string } }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const queryClient = new QueryClient();
  const { data, isLoading, refetch } = useGetOne(params?.id);
  const { mutateAsync: submitVote } = useVote();
  const { data: currentUser } = useCurrentUser();
  const { openAuthPopup } = useAuth();
  const router = useRouter();

  const goBack = useCallback(() => router.back(), [router]);

  const handleSubmitVote = useCallback(async () => {
    if (!currentUser?.id) return openAuthPopup();

    const createdVote = await submitVote(data?.id);
    await queryClient.invalidateQueries({
      queryKey: ["getOne"],
    });
    await refetch();
    return createdVote;
  }, [
    currentUser?.id,
    data?.id,
    openAuthPopup,
    queryClient,
    refetch,
    submitVote,
  ]);

  const hasVoted = data?.votes?.find(
    (vote) => vote?.userId === currentUser?.id
  );

  return (
    <>
      <div className="container relative z-50 flex h-auto w-full items-center justify-center bg-black pt-10 lg:h-screen lg:pt-0 lg:hidden">
        <div>
          <div className="flex flex-col items-start justify-center gap-0 lg:flex-row lg:gap-10">
            <div className="flex w-full flex-col justify-center gap-3 lg:w-1/2 lg:justify-start lg:gap-8">
              <img
                src="/images/logo-challenge.svg"
                className="mx-auto max-w-[200px] lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="relative flex flex-col pb-0 pt-28">
        <img
          src="/images/flour-card3.svg"
          className="absolute top-[30%] -right-[20%] h-[700px] overflow-hidden -z-10 hidden rotate-[110deg] lg:block"
        />

        <img
          src="/images/flour-card3.svg"
          className="absolute -bottom-96 -right-1/2 h-[700px] overflow-hidden -z-10 block rotate-[110deg] lg:hidden"
        />

        <div className="container">
          {isLoading ? (
            <div className="mx-auto h-52 w-52">
              <DotLottiePlayer
                src="/images/fetch-animation.json"
                autoplay
                loop
              />
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-10 lg:gap-0 justify-between">
              <div className="flex w-full lg:w-1/3 flex-col gap-5">
                <button
                  type="button"
                  onClick={goBack}
                  className="flex-row items-center justify-start gap-4 hidden lg:flex"
                >
                  <img
                    src="/images/ico-arrow-down.svg"
                    className="w-5 -rotate-90"
                  />
                  <span className="text-heading3"> رجوع </span>
                </button>

                <div className="text-heading3 text-white lg:text-[48px] text-center lg:text-start">
                  {data?.fullName}
                </div>

                <div className="font-secondary flex flex-row items-center gap-3 mx-auto lg:mx-0">
                  <span className="text-heading2 text-white">
                    {" "}
                    {data?.votes?.length}{" "}
                  </span>
                  <span className="text-heading3 -mb-5 text-[#C2AC6E]">
                    {" "}
                    (صوت){" "}
                  </span>
                </div>

                <hr className="mb-5 block h-[1px] w-full text-[#C2AC6E]" />

                <div className="flex flex-row items-center gap-8">
                  <div className="relative h-16 w-16 rounded-full bg-[#C2AC6E]">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_API_BASE_URL +
                        data?.chef?.profilePicture
                      }
                      className="-mt-4"
                    />
                  </div>
                  <span className="text-heading4 text-white">
                    فريق {data?.chef?.fullNameAr}
                  </span>
                </div>

                <CopyUrlButton id={data?.id} />

                {hasVoted ? (
                  <button
                    type="button"
                    disabled
                    className="btn btn-primary vote-btn group/btn mt-5 cursor-not-allowed gap-3"
                  >
                    <img src="/images/ico-heart-filled.svg" />
                    <span> تم تصويت </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn vote-btn group/btn mt-5 gap-3 max-[768px]:mx-auto"
                    onClick={handleSubmitVote}
                  >
                    <img
                      src="/images/ico-heart-empty.svg"
                      className="block group-hover/btn:hidden"
                    />
                    <img
                      src="/images/ico-heart-filled.svg"
                      className="hidden group-hover/btn:block"
                    />
                    <span> صوت </span>
                  </button>
                )}
              </div>
              <div className="relative">
                <div className="absolute -top-14">
                  <button
                    type="button"
                    onClick={goBack}
                    className="flex flex-row items-center justify-start gap-4 lg:hidden"
                  >
                    <img
                      src="/images/ico-arrow-down.svg"
                      className="w-5 -rotate-90"
                    />
                    <span className="text-heading3"> رجوع </span>
                  </button>
                </div>

                <img
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${
                    data?.participationPicture
                  }`}
                  className="h-[100vw] w-[100vw] lg:h-[500px] lg:w-[500px] rounded-[20px] object-cover"
                />
                <img
                  src="/images/vote-card-border.svg"
                  className="absolute left-0 top-0 -rotate-1 scale-105 w-screen h-[100vw] lg:w-auto lg:h-auto"
                />
              </div>
            </div>
          )}
        </div>

        <img
          src="/images/single-flour-left.svg"
          className="absolute -top-24 -left-24 -z-10 block lg:hidden"
        />

        <img
          src="/images/single-flour-left.svg"
          className="absolute top-0 rotate-45 left-2/4 -z-10 block lg:hidden"
        />

        <img
          src="/images/single-flour-left.svg"
          className="absolute -top-16 -left-[15%] -z-10 hidden h-[800px] lg:block"
        />
      </section>
    </>
  );
}
