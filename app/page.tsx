"use client";

import EmojiRow from "@/components/EmojiRow";
import MeaningList from "@/components/MeaningList";
import { useRef } from "react";
/*
The Home component is the main component of our application. 
It renders a container div with a flex layout that takes up the full screen height.
It has a title h1 and a div that contains the EmojiRow and MeaningList components.

The meaningRefs object is created to store refs to the meaning divs in MeaningList component.
Each property in the object represents a meaning and its value is a ref created with the useRef hook.
These refs will be used in the EmojiRow component to scroll to the corresponding meaning when a tile is clicked.

The Home component returns a JSX div that contains the title, EmojiRow, and MeaningList components.
*/

const Home = () => {
  // Create a refs object to store refs to the meaning divs in MeaningList component
  const meaningRefs = {
    Prosper: useRef(null), // Ref for the Prosper meaning div
    Luck: useRef(null), // Ref for the Luck meaning div
    Perfect: useRef(null), // Ref for the Perfect meaning div
    Love: useRef(null), // Ref for the Love meaning div
    Pray: useRef(null), // Ref for the Pray meaning div
  };

  return (
    // Render a container div with a flex layout that takes up the full screen height
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      {/* Render a title h1 */}
      <h1 className="text-3xl font-medium">Mastering Refs in React 🧐</h1>
      {/* Render a div that contains the EmojiRow component */}
      <div className="flex gap-7">
        <EmojiRow meaningRefs={meaningRefs} />
      </div>
      {/* Render a div that contains the MeaningList component with a shadow effect */}
      <div className="flex flex-col gap-7 w-[500px] max-h-[calc(100vh-910px)] overflow-y-auto shadow-inner">
        <MeaningList meaningRefs={meaningRefs} />
      </div>
    </div>
  );
};


export default Home;
