"use client";

import { EMOJI_DATA } from "@/constants/emojiData";
import EmojiTile from "./EmojiTile";

type MeaningRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

const EmojiRow = ({ meaningRefs }: { meaningRefs: MeaningRefs }) => {
  return EMOJI_DATA.map((emoji, index) => (
    <div key={emoji.name} className="">
      <EmojiTile
        emoji={emoji}
        onClick={() =>
          meaningRefs[emoji.name].current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
    </div>
  ));
};

export default EmojiRow;
