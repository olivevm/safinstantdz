import { Suspense } from "react";
import VoteHero from "../components/vote-hero";
import Content from "../components/content";
import Listing from "../components/listing";
import Loading from "../components/loading";

export default function Vote() {
  return (
    <>
      <VoteHero />
      <Suspense fallback={<Loading isLoading />}>
        <Content />
      </Suspense>
      <Suspense>
        <Listing />
      </Suspense>
    </>
  );
}
