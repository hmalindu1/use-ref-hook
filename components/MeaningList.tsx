"use client";

import { MEANING_DATA } from "@/constants/meaningData";
import MeaningCard from "./MeaningCard";

type MeaningRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};


const MeaningList = ({ meaningRefs }: { meaningRefs: MeaningRefs }) => {
  return MEANING_DATA.map((meaning) => (
    <div key={meaning.name} ref={meaningRefs[meaning.name]} >
      <MeaningCard meaning={meaning} />
    </div>
  ));
};

export default MeaningList;
