"use client";

import { Image } from "@nextui-org/react";
import React from "react";

export default function ValorantIntroduction(): JSX.Element {


  return (
    <div className="tracking-widest h-[85vh] w-full content-center bg-purple-200" style={{ fontFamily: "BabySparkle" }}>
      <div className="relative flex justify-around mx-auto w-3/5">
        <div className="text-6xl content-center leading-normal text-center">
          <span className="text-5xl">Welcome &nbsp;</span>
          <span className="text-white" style={{
            textShadow: "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
          }}>Readella</span>
          <br />
          <span className="text-4xl">to &nbsp;</span>
          <span className="underline">Candy Book Library</span>
        </div>
        <div className="animate-floatY relative z-10">
          <Image
            alt="That's Not My Cat Book"
            className="object-cover rotate-6"
            src="/image/introductionBook.png"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute" style={{ top: "-10%", right: "0", zIndex: "0" }}>
          <Image
            alt="Sticker1"
            className="object-cover -rotate-12 hover:rotate-12"
            src="/image/sticker1.png"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute" style={{ bottom: "-10%", right: "-8%", zIndex: "20" }}>
          <Image
            alt="Sticker2"
            className="object-cover -rotate-12 hover:rotate-12"
            src="/image/sticker2.png"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute" style={{ top: "-20%", left: "-15%", zIndex: "20" }}>
          <Image
            alt="Sticker3"
            className="object-cover -rotate-[30deg] hover:-rotate-0"
            src="/image/sticker3.png"
            width={250}
            height={250}
          />
        </div>
        <div className="absolute" style={{ top: "-20%", left: "50%", zIndex: "20" }}>
          <Image
            alt="Sticker4"
            className="object-cover -rotate-0 hover:rotate-12"
            src="/image/sticker4.png"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute" style={{ bottom: "-20%", left: "-20%", zIndex: "20" }}>
          <Image
            alt="Sticker5"
            className="object-cover -rotate-0 hover:rotate-12"
            src="/image/sticker5.png"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute" style={{ bottom: "0%", right: "26%", zIndex: "20" }}>
          <Image
            alt="Sticker6"
            className="object-cover -rotate-0 hover:-rotate-12"
            src="/image/sticker6.png"
            width={125}
            height={125}
          />
        </div>
      </div>
    </div >
  );
}
