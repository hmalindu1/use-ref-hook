"use client";

import { MEANING_DATA } from "@/constants/meaningData";
import MeaningCard from "./MeaningCard";

const MeaningList = () => {
  return MEANING_DATA.map((meaning) => (
    <div key={meaning.name}>
      <MeaningCard meaning={meaning} />
    </div>
  ));
};

export default MeaningList;
