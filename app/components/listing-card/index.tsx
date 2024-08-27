import Link from "next/link";

interface ChefProps {
  name: string;
  image: string;
}

interface ListingCardProps {
  id: number;
  name: string;
  imageUrl: string;
  chef: ChefProps;
  numberOfVotes: number;
  onVoteClicked?: (id: number) => void;
  hasVoted?: boolean;
  onShareClicked?: (id: number) => void;
}

export default function ListingCard(props: ListingCardProps) {
  let {
    chef,
    name,
    id,
    numberOfVotes,
    onVoteClicked,
    imageUrl,
    onShareClicked,
    hasVoted,
  } = props;
  if (imageUrl.endsWith(".jpeg")) {
    imageUrl = imageUrl.replace(/\.jpeg$/, ".jpg");
  }

  return (
    <div className="relative rounded-[31px] border border-solid border-[#C2AC6E] bg-[#0F0F0F] px-10 pb-10 pt-0 transition-all hover:shadow-[1px_1px_50px_0px_rgba(238,213,164,0.2)]">
      <button
        type="button"
        className="absolute left-16 z-10 flex h-[70px] items-center justify-center rounded-b-[10px] bg-[#C2AC6E] px-3"
        onClick={() => onShareClicked?.(id)}
      >
        <img src="/images/ico-share.svg" className="w-7" />
      </button>

      <Link
        href={{
          pathname: "/participation/" + id,
        }}
      >
        <div className="relative mt-10">
          <div className="overflow-hidden">
            <img
              className="w-96 h-72 origin-center object-cover rounded-[20px]"
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/square/${imageUrl}`}
            />

            <img
              src="/images/vote-card-border.svg"
              className="absolute left-0 top-0 -rotate-2 scale-105"
            />
          </div>
        </div>

        <div className="font-primary text-heading3 mb-5 mt-10 block border-b border-solid border-[#C2AC6E] border-opacity-25 pb-5 text-center">
          {name}
        </div>

        <div className="font-secondary flex flex-row items-center justify-center gap-2">
          <span className="text-heading3 text-white"> {numberOfVotes} </span>
          <span className="text-heading4 text-[#C2AC6E]"> (صوت) </span>
        </div>

        <div className="font-primary mt-10 flex flex-row items-center justify-center gap-4">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#C2AC6E]">
            <img
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${chef?.image}`}
              className="-ml-2 -mt-3"
            />
          </div>
          <span className="text-body-big text-white"> فريق {chef?.name} </span>
        </div>
      </Link>

      {hasVoted ? (
        <button
          type="button"
          disabled
          className="btn btn-primary vote-btn btn-full mt-5 cursor-not-allowed gap-3"
        >
          <img src="/images/ico-heart-filled.svg" />
          <span> تم تصويت </span>
        </button>
      ) : (
        <button
          type="button"
          className="btn vote-btn btn-full group/btn mt-5 gap-3"
          onClick={() => onVoteClicked?.(id)}
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
  );
}
