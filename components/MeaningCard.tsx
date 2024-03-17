"use client";

import { MeaningDataType } from "@/types/types";
import { forwardRef, LegacyRef } from "react";

interface MeaningCardProps {
  meaning: MeaningDataType;
}

const MeaningCard = forwardRef(
  ({ meaning }: MeaningCardProps, ref: LegacyRef<HTMLDivElement> | null) => {
    return (
      <div
        className="h-20 bg-black/5 flex items-center justify-center rounded-md shadow"
        ref={ref}
      >
        {meaning.description}
      </div>
    );
  }
);

MeaningCard.displayName = "MeaningCard";

export default MeaningCard;
