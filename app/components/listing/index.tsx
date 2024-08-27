"use client";

import { useCallback, useEffect, useState } from "react";

import { DotLottiePlayer } from "@dotlottie/react-player";

import { QueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import Filter from "../filter";
import ListingCard from "../listing-card";

import SharePopup from "../share-popup";

import { useListings } from "@/hooks/use-listings";
import { useCurrentUser, useGetOne, useVote } from "@/hooks";
import { useAuth } from "@/context";
import { AxiosError } from "axios";
import Pagination from "../pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getToken, setToken } from "@/utils";
import VotePopup from "../vote-popup";

const chefs = [
  {
    chefId: "all",
    imageUrl: "/images/checkmark.svg",
    title: "كل المشاركات",
  },
  {
    chefId: "2",
    imageUrl: "/images/ghano-cuisine-hover.png",
    title: "مشاركات متابعي شاف غانو",
  },
  {
    chefId: "3",
    imageUrl: "/images/sara-cook-hover.png",
    title: "مشاركات متابعي شاف سارة كوك",
  },
  {
    chefId: "1",
    imageUrl: "/images/chef-aymen-hover.png",
    title: "مشاركات متابعي شاف أيمن",
  },
];

export default function Listing() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedParticipation, setSelectedParticipation] = useState<
    string | undefined
  >(undefined);
  const [selectedChef, setSelectedChef] = useState("all");
  const [votedParticipation, setVotedParticipation] = useState<string | null>(
    null
  );
  const [showVotePopup, setShowVotePopup] = useState(false);
  const handleAlreadyVoted = (error: AxiosError) =>
    toast.error(error.response?.data?.reason);

  const limit = "16";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || "1");

  const queryClient = new QueryClient();
  const {
    data: listings,
    isLoading,
    refetch,
  } = useListings(selectedChef, limit, page);
  const { data: currentParticipation } = useGetOne(selectedParticipation);
  const { mutateAsync: submitVote } = useVote();
  const { data: user } = useCurrentUser();
  const { openAuthPopup, closeAuthPopup } = useAuth();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleFilterClicked = useCallback((chefId: string) => {
    setPage("1");
    setSelectedChef(chefId);
  }, []);

  const handleOpenSharePopup = useCallback((participationId: string) => {
    setSelectedParticipation(participationId);
    setIsShareOpen(true);
  }, []);

  const handleClosePopups = useCallback(() => {
    setSelectedParticipation(undefined);
    setIsShareOpen(false);
    setShowVotePopup(false);
  }, []);

  const handleOpenSuccessPopup = useCallback((participationId: string) => {
    setVotedParticipation(participationId);
    setShowVotePopup(true);
  }, []);

  const handleOnVoteClicked = useCallback(
    async (participationId: string) => {
      if (!user?.id) {
        localStorage.setItem("participationId", participationId);
        return openAuthPopup();
      }

      try {
        const createdVote = await submitVote(participationId);
        await queryClient.invalidateQueries({
          queryKey: ["listings"],
        });
        await refetch();
        localStorage.removeItem("participationId");
        router.push(`${pathname}?${createQueryString("token", "")}`, {
          scroll: false,
        });
        handleOpenSuccessPopup(participationId);
        return createdVote;
      } catch (error) {
        const e = error as AxiosError;
        if (e?.response?.data?.reason) {
          return handleAlreadyVoted(error as AxiosError);
        }
        console.log({ e });
        return e;
      }
    },
    [
      openAuthPopup,
      refetch,
      submitVote,
      createQueryString,
      pathname,
      router,
      user?.id,
      handleOpenSuccessPopup,
    ]
  );

  const handleVoteAfterRedirect = useCallback(async () => {
    const token = searchParams.get("token");
    const participationId = localStorage.getItem("participationId");

    if (token && participationId) {
      setToken(token);
      const storedToken = getToken();

      if (storedToken) {
        await handleOnVoteClicked(participationId as string);
        closeAuthPopup();
      }
    }
  }, [closeAuthPopup, handleOnVoteClicked, searchParams]);

  useEffect(() => {
    handleVoteAfterRedirect();
  }, [handleVoteAfterRedirect]);

  return (
    <>
      <Toaster />
      <section id="vote-listing" className="mt-10 block lg:mt-20">
        <div className="section-title-wrapper relative flex w-full flex-col items-center justify-center gap-5 pb-20 lg:pt-32">
          <span className="text-body-medium lg:text-heading4 text-white">
            صوت الآن
          </span>
          <h2 className="text-heading4 text-gold text-center lg:text-[48px]">
            صوّت على صورة التي تستحق الوصول إلى النهائي
          </h2>
          <img src="/images/title-separator.svg" />
          <img
            src="/images/powder-pastry.svg"
            className="absolute -bottom-10 -left-24 -z-10 block h-80 w-auto lg:hidden"
          />
        </div>

        <Filter buttons={chefs} onClick={handleFilterClicked} />

        <div className="container mt-32">
          {isLoading ? (
            <div className="mx-auto h-52 w-52">
              <DotLottiePlayer
                src="/images/fetch-animation.json"
                autoplay
                loop
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(listings as any)?.data?.map?.((listing: any) => (
                <ListingCard
                  {...listing}
                  key={listing.id}
                  chef={{
                    image: listing?.chef?.profilePicture,
                    name: listing?.chef?.fullNameAr,
                  }}
                  id={listing?.id}
                  imageUrl={listing?.participationPicture}
                  name={listing?.fullName}
                  numberOfVotes={listing?.votes?.length}
                  onShareClicked={handleOpenSharePopup}
                  onVoteClicked={handleOnVoteClicked}
                  hasVoted={
                    !!listing?.votes?.find((vote) => vote?.userId === user?.id)
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Pagination
        totalPages={listings?.totalPages}
        currentPage={+page}
        onChange={(page) => setPage(page)}
      />

      {votedParticipation && (
        <VotePopup
          participationId={votedParticipation}
          onClose={handleClosePopups}
          isOpen={showVotePopup}
        />
      )}

      <SharePopup
        isOpen={isShareOpen}
        onClose={handleClosePopups}
        data={currentParticipation}
      />
    </>
  );
}
