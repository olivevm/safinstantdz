"use client";

import { twMerge } from "tailwind-merge";

export interface FilterButtonProps {
  chefId: string;
  imageUrl?: string;
  title: string;
  isSelected?: boolean;
  onClick: (chefId: string) => void;
}

export default function FilterButton({
  chefId,
  imageUrl,
  title,
  isSelected,
  onClick,
}: FilterButtonProps) {
  const buttonClassName = twMerge("filter-btn group", isSelected && "active");

  return (
    <button
      type="button"
      onClick={() => onClick(chefId)}
      className={buttonClassName}
    >
      <span className="relative ml-4 mr-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#6C6C6C] group-[.active]:bg-[#C2AC6E] overflow-hidden">
        <img src={imageUrl} alt={title} />
      </span>
      <span>{title}</span>
    </button>
  );
}
