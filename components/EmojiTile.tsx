"use client";

import { EmojiDataType } from "@/types/types";

interface EmojiTileProps {
  emoji: EmojiDataType;
  onClick: () => void;
}

const EmojiTile = ({ emoji, onClick }: EmojiTileProps) => {
  return (
    <div
      className="w-20 h-20 shadow flex items-center justify-center rounded-md bg-black/5 hover:bg-black/10 cursor-pointer"
      onClick={onClick}
    >
      {emoji.icon}
    </div>
  );
};

export default EmojiTile;
