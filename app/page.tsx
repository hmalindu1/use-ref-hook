"use client";

import EmojiRow from "@/components/EmojiRow";
import MeaningList from "@/components/MeaningList";
import { useRef } from "react";
const Home = () => {
  const meaningRefs = {
    Prosper: useRef(null),
    Luck: useRef(null),
    Perfect: useRef(null),
    Love: useRef(null),
    Pray: useRef(null),
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-medium">Mastering Refs in React 🧐</h1>
      <div className="flex gap-7">
        <EmojiRow meaningRefs={meaningRefs} />
      </div>
      <div className="flex flex-col gap-7 w-[500px] max-h-[calc(100vh-910px)] overflow-y-auto shadow-inner">
        <MeaningList meaningRefs={meaningRefs} />
      </div>
    </div>
  );
};

export default Home;
