"use client";

import { MeaningDataType } from "@/types/types";

interface MeaningCardProps {
    meaning: MeaningDataType;
}

const MeaningCard = ({ meaning }:  MeaningCardProps ) => {
  return <div className="h-20 bg-black/5 flex items-center justify-center rounded-md shadow">{meaning.description}</div>;
};

export default MeaningCard;
