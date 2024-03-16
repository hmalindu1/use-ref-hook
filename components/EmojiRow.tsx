"use client";

import { EMOJI_DATA } from "@/constants/emojiData";
import EmojiTile from "./EmojiTile";

const EmojiRow = () => {
  return EMOJI_DATA.map((emoji, index) => (
    <div key={index} className="">
      <EmojiTile emoji={emoji} />
    </div>
  ));
};

export default EmojiRow;
