"use client";

import { useSearchParams } from "next/navigation";
import FilterButton, { FilterButtonProps } from "../filter-button";
import { useCallback, useEffect, useState } from "react";

interface FilterProps {
  buttons: Pick<FilterButtonProps, "chefId" | "imageUrl" | "title">[];
  onClick: (chefId: string) => void;
}

export default function Filter({ buttons, onClick }: FilterProps) {
  const searchParams = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    const chefIdFromQuery = searchParams.get("chefId");
    if (chefIdFromQuery) {
      setSelectedFilter(chefIdFromQuery);
    }
  }, [searchParams]);

  const handleFilterClick = useCallback(
    (chefId: string) => {
      setSelectedFilter(chefId);
      onClick(chefId);
    },
    [onClick]
  );

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-center gap-5">
        {buttons.map((button) => (
          <FilterButton
            {...button}
            key={button.chefId}
            isSelected={selectedFilter === button.chefId}
            onClick={handleFilterClick}
          />
        ))}
      </div>
    </div>
  );
}
