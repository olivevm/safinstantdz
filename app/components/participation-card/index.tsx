import Link from "next/link";

export default function ParticipationCard({ data }: { data: any }) {
  return (
    <Link
      href={`/participation/${data?.id}`}
      className="flex items-center bg-[#0F0F0F] border border-[#C2AC6E] rounded-[31px] p-5"
    >
      <div className="relative">
        <img
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${
            data?.participationPicture
          }`}
          className="w-28 h-28 object-cover rounded-[5px]"
        />
        <img
          src="/images/vote-card-border.svg"
          className="absolute left-0 top-0 -rotate-2 scale-105 w-28 h-28"
        />
      </div>
      <div className="flex-col text-white mr-4 grow">
        <p className="text-body-big">{data?.fullName}</p>
        <hr className="text-[#C2AC6E] opacity-25 my-3.5 w-full" />
        <div className="flex flex-row items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-[#C2AC6E]">
            <img
              src={
                process.env.NEXT_PUBLIC_API_BASE_URL +
                data?.chef?.profilePicture
              }
            />
          </div>
          <span className="text-body-medium text-white">
            فريق {data?.chef?.fullNameAr}
          </span>
        </div>
      </div>
    </Link>
  );
}
